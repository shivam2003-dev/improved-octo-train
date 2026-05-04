// Shared UI components for Current Affairs Archive
const { useState, useEffect, useMemo, useRef } = React;

// ============ ICONS (inline SVG, stroke-based) ============
const Icon = {
  Search: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  Bookmark: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 3h12v18l-6-4-6 4z"/></svg>,
  BookmarkFill: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 3h12v18l-6-4-6 4z"/></svg>,
  Check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m4 12 5 5L20 6"/></svg>,
  Clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  ChevL: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m15 6-6 6 6 6"/></svg>,
  ChevR: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m9 6 6 6-6 6"/></svg>,
  ChevDown: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"/></svg>,
  Calendar: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  Home: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 11 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg>,
  Layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/></svg>,
  Flame: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4-1 3 1 4 1 4 0-3 2-5 2-10z"/></svg>,
  Sparkle: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
  Filter: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 5h18l-7 9v6l-4-2v-4z"/></svg>,
  X: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>,
  Book: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 4h11a4 4 0 0 1 4 4v13H8a4 4 0 0 1-4-4z"/><path d="M19 21H8a4 4 0 0 0-4 0"/></svg>,
  ArrowR: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
};

// ============ CATEGORY PILL ============
function CategoryPill({ category, size = "md" }) {
  const c = CATEGORIES[category];
  if (!c) return null;
  const px = size === "sm" ? "5px 8px" : "6px 10px";
  const fs = size === "sm" ? 10.5 : 11.5;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: px, fontSize: fs, fontWeight: 600,
      letterSpacing: "0.06em", textTransform: "uppercase",
      color: c.ink, background: c.bg,
      border: `1px solid ${c.color}30`,
      borderRadius: 3, fontFamily: "var(--font-ui)",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: 99, background: c.color }} />
      {c.label}
    </span>
  );
}

// ============ NAVBAR ============
function Navbar({ route, setRoute, search, setSearch, sidebarLayout }) {
  const navItems = [
    { id: "home",    label: "Today",    icon: Icon.Home },
    { id: "archive", label: "Archive",  icon: Icon.Calendar },
    { id: "revise",  label: "Revision", icon: Icon.Book },
  ];
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand" onClick={() => setRoute({ page: "home" })}>
          <div className="brand-mark">
            <svg viewBox="0 0 32 32" width="22" height="22">
              <rect x="2" y="2" width="28" height="28" rx="3" fill="var(--accent)" />
              <path d="M9 22V10M9 10h7a4 4 0 0 1 0 8H9M9 18l8 4" stroke="#1F1B16" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="brand-title">Bulletin</div>
            <div className="brand-sub">RBI Grade B · Current Affairs</div>
          </div>
        </div>

        {sidebarLayout === "top" && (
          <nav className="nav-tabs">
            {navItems.map(n => (
              <button key={n.id}
                className={`nav-tab ${route.page === n.id ? "active" : ""}`}
                onClick={() => setRoute({ page: n.id })}>
                {n.label}
              </button>
            ))}
          </nav>
        )}

        <div className="nav-search">
          <Icon.Search width="15" height="15" style={{ color: "var(--ink-3)" }} />
          <input
            type="text"
            placeholder="Search topics, concepts, dates…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <kbd>⌘K</kbd>
        </div>

        <div className="nav-right">
          <button className="icon-btn" title="Bookmarks" onClick={() => setRoute({ page: "home" })}>
            <Icon.Bookmark width="17" height="17" />
          </button>
          <div className="nav-streak" title="7-day revision streak">
            <Icon.Flame width="14" height="14" />
            <span>7</span>
          </div>
          <div className="nav-avatar">AS</div>
        </div>
      </div>
    </header>
  );
}

// ============ LEFT RAIL SIDEBAR ============
function LeftRail({ route, setRoute }) {
  const items = [
    { id: "home",    label: "Today",         icon: Icon.Home,     hint: "Latest" },
    { id: "archive", label: "Archive",       icon: Icon.Calendar, hint: "By date" },
    { id: "revise",  label: "Revision",      icon: Icon.Book,     hint: "Weekly" },
    { id: "saved",   label: "Bookmarks",     icon: Icon.Bookmark, hint: "Saved" },
  ];
  const cats = Object.keys(CATEGORIES);
  return (
    <aside className="left-rail">
      <div className="rail-section">
        <div className="rail-label">Browse</div>
        {items.map(it => (
          <button key={it.id}
            className={`rail-item ${route.page === it.id ? "active" : ""}`}
            onClick={() => setRoute({ page: it.id })}>
            <it.icon width="16" height="16" />
            <span className="rail-text">{it.label}</span>
            <span className="rail-hint">{it.hint}</span>
          </button>
        ))}
      </div>

      <div className="rail-section">
        <div className="rail-label">Categories</div>
        {cats.map(cat => {
          const c = CATEGORIES[cat];
          const count = ARTICLES.filter(a => a.category === cat).length;
          return (
            <button key={cat} className="rail-cat"
              onClick={() => setRoute({ page: "home", filter: cat })}>
              <span className="rail-cat-dot" style={{ background: c.color }} />
              <span className="rail-cat-name">{c.label}</span>
              <span className="rail-cat-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="rail-section">
        <div className="rail-streak-card">
          <div className="streak-title">
            <Icon.Flame width="14" height="14" />
            <span>Revision streak</span>
          </div>
          <div className="streak-num">7 days</div>
          <div className="streak-dots">
            {[1,1,1,1,1,1,1,0,0,0,0,0,0,0].map((d, i) => (
              <span key={i} className={`streak-dot ${d ? "on" : ""}`} />
            ))}
          </div>
          <div className="streak-hint">Revise today to keep it going.</div>
        </div>
      </div>
    </aside>
  );
}

// ============ NEWS CARD ============
function NewsCard({ article, onOpen, bookmarks, toggleBookmark, revised, toggleRevised, variant = "default" }) {
  const c = CATEGORIES[article.category];
  const isB = bookmarks.has(article.id);
  const isR = revised.has(article.id);
  const dateObj = new Date(article.date);
  const dateLabel = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "short" });

  if (variant === "compact") {
    return (
      <button className="news-card-compact" onClick={() => onOpen(article)}>
        <CategoryPill category={article.category} size="sm" />
        <div className="ncc-title">{article.title}</div>
        <div className="ncc-meta">
          <Icon.Clock width="11" height="11" />
          {article.readTime} min
        </div>
      </button>
    );
  }

  return (
    <article className={`news-card ${isR ? "is-revised" : ""}`} onClick={() => onOpen(article)}>
      <div className="nc-rule" style={{ background: c.color }} />
      <div className="nc-body">
        <div className="nc-top">
          <CategoryPill category={article.category} />
          <span className="nc-date">{dateLabel}</span>
          <span className="nc-meta">
            <Icon.Clock width="11" height="11" /> {article.readTime} min read
          </span>
          {isR && <span className="nc-revised"><Icon.Check width="10" height="10" /> Revised</span>}
        </div>
        <h3 className="nc-title">{article.title}</h3>
        <p className="nc-summary">{article.summary}</p>
        <div className="nc-bottom">
          <div className="nc-concepts">
            {article.concepts.slice(0, 3).map(con => (
              <span key={con} className="nc-concept">{con}</span>
            ))}
            {article.concepts.length > 3 && (
              <span className="nc-concept-more">+{article.concepts.length - 3}</span>
            )}
          </div>
          <div className="nc-actions" onClick={e => e.stopPropagation()}>
            <button className={`nc-icon ${isB ? "active" : ""}`}
              onClick={() => toggleBookmark(article.id)} title="Bookmark">
              {isB ? <Icon.BookmarkFill width="14" height="14" /> : <Icon.Bookmark width="14" height="14" />}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ============ MCQ COMPONENT ============
function MCQ({ mcq, idx }) {
  const [picked, setPicked] = useState(null);
  const correct = mcq.answer;
  return (
    <div className="mcq">
      <div className="mcq-head">
        <span className="mcq-num">Q{idx + 1}</span>
        <span className="mcq-q">{mcq.q}</span>
      </div>
      <div className="mcq-opts">
        {mcq.options.map((opt, i) => {
          const state = picked == null ? "idle" :
            i === correct ? "correct" :
            i === picked ? "wrong" : "muted";
          const letter = String.fromCharCode(65 + i);
          return (
            <button key={i}
              className={`mcq-opt ${state}`}
              disabled={picked != null}
              onClick={() => setPicked(i)}>
              <span className="mcq-letter">{letter}</span>
              <span className="mcq-text">{opt}</span>
              {state === "correct" && <Icon.Check width="14" height="14" />}
              {state === "wrong" && <Icon.X width="14" height="14" />}
            </button>
          );
        })}
      </div>
      {picked != null && (
        <div className="mcq-explain">
          <div className="mcq-explain-label">
            {picked === correct ? "Correct." : "Not quite."} Why:
          </div>
          <div className="mcq-explain-text">{mcq.explain}</div>
        </div>
      )}
    </div>
  );
}

// ============ HEATMAP CALENDAR ============
function HeatmapCalendar({ year, month, onPick, selectedDate }) {
  // month: 0-11
  const first = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();
  const startDow = (first.getDay() + 6) % 7; // Mon-first
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= lastDay; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const heatLevel = (count) => {
    if (count == null) return 0;
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  const monthName = first.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  return (
    <div className="heatmap">
      <div className="heatmap-head">
        <div className="heatmap-month">{monthName}</div>
        <div className="heatmap-legend">
          <span>Less</span>
          {[0,1,2,3,4].map(l => <span key={l} className={`hm-swatch lvl-${l}`} />)}
          <span>More</span>
        </div>
      </div>
      <div className="heatmap-dow">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="heatmap-grid">
        {cells.map((d, i) => {
          if (d == null) return <div key={i} className="hm-cell empty" />;
          const dateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
          const count = HEATMAP[dateStr];
          const lvl = heatLevel(count);
          const isSelected = selectedDate === dateStr;
          const isFuture = new Date(dateStr) > new Date('2026-05-04');
          return (
            <button key={i}
              className={`hm-cell lvl-${lvl} ${isSelected ? "selected" : ""} ${isFuture ? "future" : ""}`}
              disabled={isFuture}
              onClick={() => onPick(dateStr)}
              title={`${dateStr} — ${count || 0} articles`}>
              <span className="hm-num">{d}</span>
              {count > 0 && <span className="hm-dot">{count}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Helpers
function fmtDate(dateStr, opts = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) {
  return new Date(dateStr).toLocaleDateString("en-IN", opts);
}

Object.assign(window, {
  Icon, CategoryPill, Navbar, LeftRail, NewsCard, MCQ, HeatmapCalendar, fmtDate,
});
