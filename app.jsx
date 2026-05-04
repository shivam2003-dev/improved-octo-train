// Main app — orchestrates routing, state, and Tweaks
const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sidebarLayout": "rail",
  "darkMode": false
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ page: "home" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => new Set(["a01", "a05"]));
  const [revised, setRevised] = useState(() => new Set(["a08", "a10", "a12"]));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.darkMode ? "dark" : "light");
  }, [tweaks.darkMode]);

  // route to bookmarks page via "saved"
  const effectivePage = route.page === "saved" ? "saved" : route.page;

  const toggleBookmark = (id) => {
    setBookmarks(s => {
      const ns = new Set(s);
      if (ns.has(id)) ns.delete(id); else ns.add(id);
      return ns;
    });
  };
  const toggleRevised = (id) => {
    setRevised(s => {
      const ns = new Set(s);
      if (ns.has(id)) ns.delete(id); else ns.add(id);
      return ns;
    });
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
