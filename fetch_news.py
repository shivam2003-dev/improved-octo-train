#!/usr/bin/env python3
"""
Fetches latest RBI/banking current affairs from RSS feeds and
appends new articles to data.jsx for the Bulletin website.
Designed to run daily via GitHub Actions.
"""

import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

# RSS feeds covering RBI / banking / economy news
RSS_FEEDS = [
    ("RBI",     "https://www.rbi.org.in/Scripts/rss.aspx"),
    ("Economy", "https://economictimes.indiatimes.com/rssfeedstopstories.cms"),
    ("Banking", "https://www.thehindubusinessline.com/economy/macro-economy/?service=rss"),
]

CATEGORY_KEYWORDS = {
    "RBI":     ["rbi", "reserve bank", "mpc", "repo", "monetary policy", "sdf", "cbdc"],
    "Banking": ["bank", "npa", "nbfc", "credit", "loan", "deposit", "sbi", "hdfc"],
    "Economy": ["gdp", "inflation", "cpi", "wpi", "fiscal", "budget", "gst", "india economy"],
    "Reports": ["report", "survey", "publication", "world bank", "imf", "fsr", "annual"],
    "Schemes": ["scheme", "pradhan mantri", "yojana", "mission", "programme", "pm "],
}

DATA_JSX_PATH = "data.jsx"


def fetch_feed(url: str, timeout: int = 15) -> list[dict]:
    """Fetch and parse an RSS feed, return list of {title, summary, link, date} dicts."""
    items = []
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "BulletinBot/1.0"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            data = resp.read()
        root = ET.fromstring(data)
        ns = {"atom": "http://www.w3.org/2005/Atom"}
        # Handle both RSS <item> and Atom <entry>
        entries = root.findall(".//item") or root.findall(".//atom:entry", ns)
        for entry in entries[:10]:  # top 10 per feed
            title = (entry.findtext("title") or entry.findtext("atom:title", namespaces=ns) or "").strip()
            summary = (entry.findtext("description") or entry.findtext("atom:summary", namespaces=ns) or "").strip()
            # Strip HTML tags
            summary = re.sub(r"<[^>]+>", "", summary)[:300]
            link = (entry.findtext("link") or entry.findtext("atom:link", namespaces=ns) or "").strip()
            pub_date = (entry.findtext("pubDate") or entry.findtext("atom:updated", namespaces=ns) or "").strip()
            # Parse date to YYYY-MM-DD
            date_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
            for fmt in ("%a, %d %b %Y %H:%M:%S %z", "%a, %d %b %Y %H:%M:%S GMT", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S%z"):
                try:
                    date_str = datetime.strptime(pub_date, fmt).strftime("%Y-%m-%d")
                    break
                except ValueError:
                    continue
            if title:
                items.append({"title": title, "summary": summary, "link": link, "date": date_str})
    except Exception as e:
        print(f"  Warning: could not fetch {url}: {e}", file=sys.stderr)
    return items


def infer_category(title: str, summary: str) -> str:
    text = (title + " " + summary).lower()
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(kw in text for kw in keywords):
            return cat
    return "Economy"


def load_existing_ids(jsx_content: str) -> set[str]:
    return set(re.findall(r'id:\s*"([^"]+)"', jsx_content))


def load_existing_titles(jsx_content: str) -> set[str]:
    return set(t.lower() for t in re.findall(r'title:\s*"([^"]+)"', jsx_content))


def slugify_id(title: str, date: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower())[:30].strip("-")
    return f"auto-{date}-{slug}"


def build_article_js(article: dict, cat: str) -> str:
    title = article["title"].replace('"', '\\"')
    summary = article["summary"].replace('"', '\\"').replace("\n", " ")
    link = article["link"]
    date = article["date"]
    art_id = slugify_id(article["title"], date)

    return f"""  {{
    id: "{art_id}",
    date: "{date}",
    category: "{cat}",
    title: "{title}",
    summary: "{summary}",
    readTime: 3,
    concepts: [],
    source: "{link}",
    body: [
      {{ kind: "p", text: "{summary}" }},
    ],
    mcqs: [],
  }}"""


def inject_articles(jsx_content: str, new_articles_js: list[str]) -> str:
    """Prepend new articles into the ARTICLES array after the opening bracket."""
    marker = "const ARTICLES = ["
    idx = jsx_content.find(marker)
    if idx == -1:
        print("ERROR: could not find ARTICLES array in data.jsx", file=sys.stderr)
        return jsx_content
    insert_at = idx + len(marker)
    joined = "\n" + ",\n".join(new_articles_js) + ","
    return jsx_content[:insert_at] + joined + jsx_content[insert_at:]


def main():
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    print(f"Fetching news for {today}...")

    with open(DATA_JSX_PATH, "r", encoding="utf-8") as f:
        jsx = f.read()

    existing_titles = load_existing_titles(jsx)
    new_articles_js = []

    for cat_hint, url in RSS_FEEDS:
        print(f"  Fetching {cat_hint}: {url}")
        items = fetch_feed(url)
        for item in items:
            if item["date"] != today:
                continue
            if item["title"].lower() in existing_titles:
                continue
            cat = infer_category(item["title"], item["summary"])
            new_articles_js.append(build_article_js(item, cat))
            existing_titles.add(item["title"].lower())
            print(f"    + [{cat}] {item['title'][:70]}")

    if not new_articles_js:
        print("No new articles for today.")
        return

    updated = inject_articles(jsx, new_articles_js)
    with open(DATA_JSX_PATH, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Injected {len(new_articles_js)} new article(s) into {DATA_JSX_PATH}.")


if __name__ == "__main__":
    main()
