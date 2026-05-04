// Main app — orchestrates routing, state, and Tweaks
const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sidebarLayout": "rail",
  "darkMode": false
}/*EDITMODE-END*/;

// ── Dynamic content loader ────────────────────────────────────────────────────
// Fetches content/index.json then loads each daily JSON file.
// Merges with the bundled ARTICLES from data.jsx (oldest seed data).
// New daily files added by the GitHub Action automatically appear here.
async function loadDynamicArticles() {
  try {
    const idxResp = await fetch("content/index.json?_=" + Date.now());
    if (!idxResp.ok) return [];
    const dates = await idxResp.json();   // ["2026-05-05", "2026-05-04", ...]

    const all = [];
    const existingIds = new Set(window.ARTICLES.map(a => a.id));

    // Load last 30 days only (avoid fetching entire history on every load)
    const recent = dates.slice(0, 30);
    const results = await Promise.allSettled(
      recent.map(d => {
        const [y, m] = [d.slice(0, 4), d.slice(5, 7)];
        return fetch(`content/${y}/${m}/${d}.json?_=${Date.now()}`).then(r => r.ok ? r.json() : []);
      })
    );

    for (const r of results) {
      if (r.status === "fulfilled" && Array.isArray(r.value)) {
        for (const art of r.value) {
          if (!existingIds.has(art.id)) {
            all.push(art);
            existingIds.add(art.id);
          }
        }
      }
    }
    return all;
  } catch (_) {
    return [];
  }
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ page: "home" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => new Set(["a01", "a05"]));
  const [revised, setRevised] = useState(() => new Set(["a08", "a10", "a12"]));
  // Extra articles fetched from content/ folder (daily JSONs)
  const [dynamicArticles, setDynamicArticles] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  // Merge bundled + dynamic, newest first
  const allArticles = useMemo(() => {
    const merged = [...dynamicArticles, ...window.ARTICLES];
    // deduplicate by id
    const seen = new Set();
    return merged.filter(a => { if (seen.has(a.id)) return false; seen.add(a.id); return true; })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [dynamicArticles]);

  // Expose merged list globally so page components read from it
  window.ARTICLES = allArticles;

  useEffect(() => {
    loadDynamicArticles().then(arts => {
      setDynamicArticles(arts);
      setLoadingNews(false);
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.darkMode ? "dark" : "light");
  }, [tweaks.darkMode]);

  const effectivePage = route.page === "saved" ? "saved" : route.page;

  const toggleBookmark = (id) => {
    setBookmarks(s => { const ns = new Set(s); if (ns.has(id)) ns.delete(id); else ns.add(id); return ns; });
  };
  const toggleRevised = (id) => {
    setRevised(s => { const ns = new Set(s); if (ns.has(id)) ns.delete(id); else ns.add(id); return ns; });
  };

  const sidebarLayout = tweaks.sidebarLayout || "rail";
  const showRail = sidebarLayout === "rail";

  return (
    <div className="app" data-screen-label={`page-${effectivePage}`}>
      <Navbar
        route={route} setRoute={setRoute}
        search={search} setSearch={setSearch}
        sidebarLayout={sidebarLayout}
      />
      {loadingNews && (
        <div style={{
          position: "fixed", top: "var(--nav-h)", left: 0, right: 0, zIndex: 999,
          height: 3, background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          animation: "shimmer 1.4s ease-in-out infinite",
        }} />
      )}
      <div className="app-body">
        {showRail && <LeftRail route={route} setRoute={setRoute} />}
        <main className={`app-main ${showRail ? "with-rail" : ""}`}>
          {effectivePage === "home" && (
            <HomePage
              setRoute={setRoute} search={search}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised}
              filter={route.filter || filter} setFilter={setFilter}
            />
          )}
          {effectivePage === "archive" && (
            <ArchivePage
              setRoute={setRoute}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised}
            />
          )}
          {effectivePage === "daily" && (
            <DailyPage
              route={route} setRoute={setRoute}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised}
            />
          )}
          {effectivePage === "revise" && (
            <RevisionPage
              setRoute={setRoute}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised}
            />
          )}
          {effectivePage === "saved" && (
            <BookmarksPage
              setRoute={setRoute}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised}
            />
          )}
        </main>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Layout">
          <TweakRadio
            label="Navigation"
            value={tweaks.sidebarLayout}
            onChange={v => setTweak("sidebarLayout", v)}
            options={[
              { value: "rail", label: "Left rail" },
              { value: "top", label: "Top tabs" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Theme">
          <TweakToggle
            label="Dark mode"
            value={tweaks.darkMode}
            onChange={v => setTweak("darkMode", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
