#!/usr/bin/env python3
"""
Daily news fetcher for RBI Grade B Bulletin.

Pipeline:
  1. Pull today's articles from RSS feeds (real scraped text — no hallucination).
  2. Send each article's RAW TEXT to GitHub Copilot (GitHub Models API)
     together with news_prompt.md so the AI only restructures real content.
  3. Inject AI-structured articles at the top of ARTICLES[] in data.jsx.

Required env var (auto-provided by GitHub Actions):
  GITHUB_TOKEN  — needs `models: read` permission (Copilot subscription)
"""

import json
import math
import os
import re
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

# ── RSS feeds ──────────────────────────────────────────────────────────────────
RSS_FEEDS = [
    "https://www.rbi.org.in/Scripts/rss.aspx",
    "https://economictimes.indiatimes.com/rssfeedstopstories.cms",
    "https://www.thehindubusinessline.com/economy/macro-economy/?service=rss",
    "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
    "https://feeds.feedburner.com/ndtvnews-india-news",
]

# ── GitHub Models API (OpenAI-compatible, uses your Copilot subscription) ──────
MODELS_ENDPOINT = "https://models.inference.ai.azure.com/chat/completions"
MODEL           = "gpt-4o-mini"   # fast; swap to "gpt-4o" for richer output

# ── relevance pre-filter: only pass finance/banking news to the AI ─────────────
RELEVANT_KEYWORDS = [
    "rbi", "reserve bank", "repo", "crr", "slr", "mpc", "inflation",
    "gdp", "bank", "nbfc", "npa", "sebi", "irdai", "nabard", "sidbi",
    "fiscal", "budget", "gst", "imf", "world bank", "monetary",
    "credit", "loan", "deposit", "capital", "liquidity", "scheme",
    "yojana", "pradhan mantri", "economy", "finance", "rupee", "forex",
    "interest rate", "treasury", "bond", "g-sec", "market",
]

DATA_JSX_PATH  = "data.jsx"
PROMPT_MD_PATH = "news_prompt.md"


# ── RSS helpers ────────────────────────────────────────────────────────────────

def parse_date(raw: str, fallback: str) -> str:
    for fmt in (
        "%a, %d %b %Y %H:%M:%S %z",
        "%a, %d %b %Y %H:%M:%S GMT",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m-%dT%H:%M:%S%z",
    ):
        try:
            return datetime.strptime(raw.strip(), fmt).strftime("%Y-%m-%d")
        except ValueError:
            pass
    return fallback


def fetch_feed(url: str, timeout: int = 15) -> list[dict]:
    """Fetch one RSS/Atom feed; return list of raw item dicts."""
    items = []
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "BulletinBot/1.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            raw = resp.read()
        root = ET.fromstring(raw)
        ns = {"atom": "http://www.w3.org/2005/Atom"}
        entries = root.findall(".//item") or root.findall(".//atom:entry", ns)
        today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        for e in entries[:15]:
            title = (e.findtext("title") or
                     e.findtext("atom:title", namespaces=ns) or "").strip()
            desc  = (e.findtext("description") or
                     e.findtext("atom:summary", namespaces=ns) or "").strip()
            # strip HTML
            desc  = re.sub(r"<[^>]+>", "", desc).strip()[:800]
            link  = (e.findtext("link") or
                     e.findtext("atom:link", namespaces=ns) or "").strip()
            pub   = (e.findtext("pubDate") or
                     e.findtext("atom:updated", namespaces=ns) or "").strip()
            date  = parse_date(pub, today)
            if title:
                items.append({"title": title, "desc": desc, "link": link, "date": date})
    except Exception as exc:
        print(f"  [warn] {url}: {exc}", file=sys.stderr)
    return items


def is_relevant(title: str, desc: str) -> bool:
    """Quick pre-filter — only pass finance/banking stories to the AI."""
    text = (title + " " + desc).lower()
    return any(kw in text for kw in RELEVANT_KEYWORDS)


# ── GitHub Copilot (Models API) ────────────────────────────────────────────────

def load_system_prompt() -> str:
    """Read news_prompt.md — the single source of truth for AI instructions."""
    return Path(PROMPT_MD_PATH).read_text(encoding="utf-8")


def call_copilot(system_prompt: str, user_message: str, token: str) -> str:
    """
    Call GitHub Models API with the system prompt from news_prompt.md and
    the raw news text as the user message.
    Returns the assistant reply string.
    """
    payload = json.dumps({
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": user_message},
        ],
        "temperature": 0.1,   # low temp = less creativity = less hallucination
        "max_tokens": 1400,
    }).encode()

    req = urllib.request.Request(
        MODELS_ENDPOINT,
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type":  "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=50) as resp:
            data = json.loads(resp.read())
        return data["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        raise RuntimeError(f"HTTP {e.code}: {body[:300]}") from e


def process_with_copilot(item: dict, system_prompt: str, token: str) -> dict | None:
    """
    Send the real scraped article text to Copilot with the prompt from
    news_prompt.md.  The AI may only restructure what is in the raw text.
    Returns a parsed dict, or None if the article should be skipped.
    """
    user_msg = (
        f"TITLE: {item['title']}\n"
        f"SOURCE URL: {item['link']}\n"
        f"DATE: {item['date']}\n"
        f"RAW TEXT:\n{item['desc']}"
    )

    try:
        reply = call_copilot(system_prompt, user_msg, token)
    except Exception as exc:
        print(f"    [warn] Copilot call failed: {exc}", file=sys.stderr)
        return None

    # Strip any accidental markdown fences
    reply = re.sub(r"^```(?:json)?\s*", "", reply)
    reply = re.sub(r"\s*```$",          "", reply).strip()

    try:
        parsed = json.loads(reply)
    except json.JSONDecodeError as exc:
        print(f"    [warn] JSON parse error: {exc}\n    Raw reply: {reply[:200]}", file=sys.stderr)
        return None

    if parsed.get("skip"):
        return None

    return parsed


# ── data.jsx helpers ───────────────────────────────────────────────────────────

def load_existing_titles(jsx: str) -> set[str]:
    return {t.lower() for t in re.findall(r'title:\s*"([^"]+)"', jsx)}


def slugify_id(title: str, date: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower())[:28].strip("-")
    return f"ai-{date}-{slug}"


def article_to_js(raw: dict, ai: dict) -> str:
    """Serialise one AI-structured article to a JS object literal."""
    art_id  = slugify_id(ai.get("title", raw["title"]), raw["date"])
    title   = ai.get("title",   raw["title"]).replace("\\", "\\\\").replace('"', '\\"')
    summary = ai.get("summary", raw["desc"][:150]).replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")
    cat     = ai.get("category",  "CurrentAffairs")
    rt      = ai.get("readTime",  max(1, math.ceil(len(raw["desc"].split()) / 200)))
    src     = raw["link"].replace('"', '\\"')

    concepts_js = json.dumps(ai.get("concepts", []),  ensure_ascii=False)
    body_js     = json.dumps(ai.get("body",     [{"kind": "p", "text": summary}]), ensure_ascii=False)
    mcqs_js     = json.dumps(ai.get("mcqs",     []),  ensure_ascii=False)

    return (
        f'  {{\n'
        f'    id: "{art_id}",\n'
        f'    date: "{raw["date"]}",\n'
        f'    category: "{cat}",\n'
        f'    title: "{title}",\n'
        f'    summary: "{summary}",\n'
        f'    readTime: {rt},\n'
        f'    source: "{src}",\n'
        f'    concepts: {concepts_js},\n'
        f'    body: {body_js},\n'
        f'    mcqs: {mcqs_js},\n'
        f'  }}'
    )


def inject_articles(jsx: str, blocks: list[str]) -> str:
    """Prepend new article objects right after `const ARTICLES = [`."""
    marker   = "const ARTICLES = ["
    idx      = jsx.find(marker)
    if idx == -1:
        print("ERROR: ARTICLES array not found in data.jsx", file=sys.stderr)
        sys.exit(1)
    insert   = idx + len(marker)
    joined   = "\n" + ",\n".join(blocks) + ","
    return jsx[:insert] + joined + jsx[insert:]


def build_article_dict(raw: dict, ai: dict) -> dict:
    """Build a plain Python dict for JSON serialisation."""
    return {
        "id":       slugify_id(ai.get("title", raw["title"]), raw["date"]),
        "date":     raw["date"],
        "category": ai.get("category", "CurrentAffairs"),
        "title":    ai.get("title",    raw["title"]),
        "summary":  ai.get("summary",  raw["desc"][:150]).replace("\n", " "),
        "readTime": ai.get("readTime", max(1, math.ceil(len(raw["desc"].split()) / 200))),
        "source":   raw["link"],
        "concepts": ai.get("concepts", []),
        "body":     ai.get("body",     [{"kind": "p", "text": raw["desc"][:300]}]),
        "mcqs":     ai.get("mcqs",     []),
    }


def save_daily_json(articles: list[dict], date: str) -> Path:
    """
    Write content/YYYY/MM/YYYY-MM-DD.json with today's articles.
    Merges with any existing file for that date (re-runs are safe).
    Returns the file path.
    """
    year, month = date[:4], date[5:7]
    folder = Path("content") / year / month
    folder.mkdir(parents=True, exist_ok=True)
    filepath = folder / f"{date}.json"

    existing: list[dict] = []
    if filepath.exists():
        try:
            existing = json.loads(filepath.read_text(encoding="utf-8"))
        except Exception:
            existing = []

    existing_ids = {a["id"] for a in existing}
    merged = existing + [a for a in articles if a["id"] not in existing_ids]
    filepath.write_text(json.dumps(merged, indent=2, ensure_ascii=False), encoding="utf-8")
    return filepath


def update_content_index(date: str) -> None:
    """
    Maintain content/index.json — a sorted list of all available date files.
    The website JS reads this to know which JSON files to fetch.
    """
    index_path = Path("content/index.json")
    dates: list[str] = []
    if index_path.exists():
        try:
            dates = json.loads(index_path.read_text(encoding="utf-8"))
        except Exception:
            dates = []

    if date not in dates:
        dates.append(date)
        dates.sort(reverse=True)   # newest first
        index_path.write_text(json.dumps(dates, indent=2), encoding="utf-8")
        print(f"  ✓ content/index.json updated ({len(dates)} entries)")


# ── main ───────────────────────────────────────────────────────────────────────

def main() -> None:
    token = os.environ.get("GITHUB_TOKEN", "")
    if not token:
        print("ERROR: GITHUB_TOKEN env var not set.", file=sys.stderr)
        sys.exit(1)

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    print(f"=== Bulletin daily fetch — {today} ===\n")

    # Load AI instruction prompt (no hallucination rules live here)
    system_prompt = load_system_prompt()
    print(f"Loaded system prompt from {PROMPT_MD_PATH} ({len(system_prompt)} chars)\n")

    # Read existing data.jsx
    with open(DATA_JSX_PATH, "r", encoding="utf-8") as f:
        jsx = f.read()
    existing_titles = load_existing_titles(jsx)

    # Fetch all RSS feeds
    all_items: list[dict] = []
    for url in RSS_FEEDS:
        print(f"Fetching {url} …")
        items = fetch_feed(url)
        today_items = [i for i in items if i["date"] == today]
        print(f"  {len(today_items)} article(s) from today\n")
        all_items.extend(today_items)

    # Deduplicate + relevance filter
    seen: set[str] = set()
    candidates: list[dict] = []
    for item in all_items:
        key = item["title"].lower()
        if key in seen or key in existing_titles:
            continue
        if not is_relevant(item["title"], item["desc"]):
            continue
        seen.add(key)
        candidates.append(item)

    print(f"{len(candidates)} new relevant article(s) to process with GitHub Copilot.\n")

    js_blocks:    list[str]  = []
    article_dicts: list[dict] = []

    for item in candidates:
        print(f"  → [{item['date']}] {item['title'][:75]}")
        ai = process_with_copilot(item, system_prompt, token)
        if ai is None:
            print("    skipped (AI returned skip or failed)")
            continue
        js_blocks.append(article_to_js(item, ai))
        article_dicts.append(build_article_dict(item, ai))
        print(f"    ✓ category={ai.get('category')}  concepts={ai.get('concepts', [])[:3]}")

    if not js_blocks:
        print("\nNo new articles today.")
        return

    # 1. Inject into data.jsx (website runtime)
    updated = inject_articles(jsx, js_blocks)
    with open(DATA_JSX_PATH, "w", encoding="utf-8") as f:
        f.write(updated)
    print(f"\n✓ Injected {len(js_blocks)} article(s) into {DATA_JSX_PATH}.")

    # 2. Save organised daily JSON: content/YYYY/MM/YYYY-MM-DD.json
    saved_path = save_daily_json(article_dicts, today)
    print(f"✓ Saved daily JSON → {saved_path}  ({len(article_dicts)} articles)")

    # 3. Update content/index.json manifest
    update_content_index(today)


if __name__ == "__main__":
    main()
