// Page components
const { useState: useStateP, useMemo: useMemoP, useEffect: useEffectP, useRef: useRefP } = React;

// ============ HOMEPAGE ============
function HomePage({ setRoute, search, bookmarks, toggleBookmark, revised, toggleRevised, filter, setFilter }) {
  const today = "2026-05-04";
  const todays = ARTICLES.filter(a => a.date === today);
  const week = ARTICLES.filter(a => {
    const d = new Date(a.date);
    return d >= new Date("2026-04-28") && d <= new Date("2026-05-04");
  });

  const filtered = useMemoP(() => {
    let list = ARTICLES;
    if (filter) list = list.filter(a => a.category === filter);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.concepts.some(c => c.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, search]);

  const byDate = useMemoP(() => {
    const groups = {};
    filtered.forEach(a => {
      if (!groups[a.date]) groups[a.date] = [];
      groups[a.date].push(a);
    });
    return Object.entries(groups).sort(([a],[b]) => b.localeCompare(a));
  }, [filtered]);

  const open = (a) => setRoute({ page: "daily", date: a.date, articleId: a.id });

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-meta">
          <span className="hero-date">{fmtDate(today)}</span>
          <span className="hero-sep">·</span>
          <span className="hero-stat">{todays.length} new today</span>
          <span className="hero-sep">·</span>
          <span className="hero-stat">{week.length} this week</span>
        </div>
        <h1 className="hero-title">
          Today's brief, prepared for the <em>RBI Grade B</em> aspirant.
        </h1>
        <p className="hero-sub">
          Curated daily — repo decisions, financial-stability data, schemes, and reports — with concept tags and inline MCQs for fast revision.
        </p>
        <div className="hero-quick">
          <button className="quick-pill primary" onClick={() => setRoute({ page: "daily", date: today })}>
            <Icon.ArrowR width="14" height="14" />
            <span>Read today's brief</span>
          </button>
          <button className="quick-pill" onClick={() => setRoute({ page: "archive" })}>
            <Icon.Calendar width="14" height="14" />
            <span>This week</span>
          </button>
          <button className="quick-pill" onClick={() => setRoute({ page: "revise" })}>
            <Icon.Book width="14" height="14" />
            <span>Monthly revision</span>
          </button>
        </div>
      </section>

      {/* TODAY HIGHLIGHTS */}
      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="section-title">Today's highlights</h2>
            <p className="section-sub">{fmtDate(today, { weekday: "long", day: "numeric", month: "long" })}</p>
          </div>
          <button className="link-btn" onClick={() => setRoute({ page: "daily", date: today })}>
            Open full brief <Icon.ArrowR width="12" height="12" />
          </button>
        </div>

        <div className="highlight-grid">
          {todays[0] && (
            <article className="feature-card" onClick={() => open(todays[0])}>
              <div className="feature-side">
                <CategoryPill category={todays[0].category} />
                <span className="feature-rank">Lead story</span>
              </div>
              <h3 className="feature-title">{todays[0].title}</h3>
              <p className="feature-summary">{todays[0].summary}</p>
              <div className="feature-foot">
                <span><Icon.Clock width="12" height="12" /> {todays[0].readTime} min read</span>
                <span>{todays[0].concepts.length} concepts</span>
                <span>{todays[0].mcqs.length} MCQs</span>
              </div>
            </article>
          )}
          <div className="highlight-stack">
            {todays.slice(1, 5).map(a => (
              <NewsCard key={a.id} article={a} onOpen={open}
                bookmarks={bookmarks} toggleBookmark={toggleBookmark}
                revised={revised} toggleRevised={toggleRevised} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">{filter ? `Filed under ${CATEGORIES[filter].label}` : "All current affairs"}</h2>
          <div className="filter-chips">
            <button className={`chip ${!filter ? "active" : ""}`} onClick={() => setFilter(null)}>All</button>
            {Object.keys(CATEGORIES).map(cat => (
              <button key={cat}
                className={`chip ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(filter === cat ? null : cat)}
                style={filter === cat ? { borderColor: CATEGORIES[cat].color, color: CATEGORIES[cat].ink, background: CATEGORIES[cat].bg } : {}}>
                <span className="chip-dot" style={{ background: CATEGORIES[cat].color }} />
                {CATEGORIES[cat].label}
              </button>
            ))}
          </div>
        </div>

        <div className="feed">
          {byDate.map(([date, items]) => (
            <div key={date} className="feed-group">
              <div className="feed-date">
                <span className="feed-date-num">{new Date(date).getDate()}</span>
                <span className="feed-date-mon">{new Date(date).toLocaleDateString("en-IN", { month: "short" })}</span>
                <span className="feed-date-dow">{new Date(date).toLocaleDateString("en-IN", { weekday: "long" })}</span>
              </div>
              <div className="feed-items">
                {items.map(a => (
                  <NewsCard key={a.id} article={a} onOpen={open}
                    bookmarks={bookmarks} toggleBookmark={toggleBookmark}
                    revised={revised} toggleRevised={toggleRevised} />
                ))}
              </div>
            </div>
          ))}
          {byDate.length === 0 && (
            <div className="empty">No articles match your filter.</div>
          )}
        </div>
      </section>
    </div>
  );
}

// ============ ARCHIVE PAGE ============
function ArchivePage({ setRoute, bookmarks, toggleBookmark, revised, toggleRevised }) {
  const [search, setSearch] = useStateP("");
  const [catFilter, setCatFilter] = useStateP(null);

  // All unique dates sorted newest first
  const byDate = useMemoP(() => {
    let list = ARTICLES;
    if (catFilter) list = list.filter(a => a.category === catFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        (a.concepts || []).some(c => c.toLowerCase().includes(q))
      );
    }
    const groups = {};
    list.forEach(a => {
      if (!groups[a.date]) groups[a.date] = [];
      groups[a.date].push(a);
    });
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, [catFilter, search]);

  const totalArticles = byDate.reduce((n, [, items]) => n + items.length, 0);

  return (
    <div className="archive-page">
      <div className="page-header">
        <div>
          <div className="kicker">Archive</div>
          <h1 className="page-title">All bulletins</h1>
          <p className="page-sub">{totalArticles} article{totalArticles !== 1 ? "s" : ""} across {byDate.length} day{byDate.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* search + category filter bar */}
      <div className="archive-toolbar">
        <div className="archive-search-wrap">
          <Icon.Search width="14" height="14" className="archive-search-icon" />
          <input
            className="archive-search"
            type="text"
            placeholder="Search titles, summaries, concepts…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="archive-clear" onClick={() => setSearch("")}>
              <Icon.X width="12" height="12" />
            </button>
          )}
        </div>
        <div className="filter-chips">
          <button className={`chip ${!catFilter ? "active" : ""}`} onClick={() => setCatFilter(null)}>All</button>
          {Object.keys(CATEGORIES).map(cat => (
            <button key={cat}
              className={`chip ${catFilter === cat ? "active" : ""}`}
              onClick={() => setCatFilter(catFilter === cat ? null : cat)}
              style={catFilter === cat ? { borderColor: CATEGORIES[cat].color, color: CATEGORIES[cat].ink, background: CATEGORIES[cat].bg } : {}}>
              <span className="chip-dot" style={{ background: CATEGORIES[cat].color }} />
              {CATEGORIES[cat].label}
            </button>
          ))}
        </div>
      </div>

      {/* date-grouped line list */}
      {byDate.length === 0 ? (
        <div className="empty">No articles match your search.</div>
      ) : (
        <div className="archive-timeline">
          {byDate.map(([date, items]) => {
            const d = new Date(date + "T00:00:00");
            const dayNum  = d.getDate();
            const dayMon  = d.toLocaleDateString("en-IN", { month: "short" });
            const dayWeek = d.toLocaleDateString("en-IN", { weekday: "long" });
            return (
              <div key={date} className="atl-group">
                {/* date label row */}
                <div className="atl-date-row">
                  <div className="atl-date-badge">
                    <span className="atl-day-num">{dayNum}</span>
                    <span className="atl-day-mon">{dayMon}</span>
                  </div>
                  <div className="atl-date-info">
                    <span className="atl-weekday">{dayWeek}</span>
                    <span className="atl-count">{items.length} article{items.length !== 1 ? "s" : ""}</span>
                  </div>
                  <button className="link-btn slim atl-brief-btn"
                    onClick={() => setRoute({ page: "daily", date })}>
                    Open brief <Icon.ArrowR width="11" height="11" />
                  </button>
                </div>

                {/* article lines */}
                <div className="atl-lines">
                  {items.map((a, idx) => {
                    const c = CATEGORIES[a.category];
                    const isR = revised.has(a.id);
                    const isB = bookmarks.has(a.id);
                    return (
                      <button key={a.id}
                        className={`atl-line ${isR ? "is-revised" : ""}`}
                        onClick={() => setRoute({ page: "daily", date: a.date, articleId: a.id })}>
                        <span className="atl-line-num">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="atl-line-rule" style={{ background: c.color }} />
                        <span className="atl-line-cat" style={{ color: c.ink, background: c.bg }}>
                          {c.label}
                        </span>
                        <span className="atl-line-title">{a.title}</span>
                        <span className="atl-line-meta">
                          <span><Icon.Clock width="11" height="11" /> {a.readTime}m</span>
                          {(a.mcqs || []).length > 0 && <span>{a.mcqs.length} MCQ</span>}
                          {isB && <Icon.BookmarkFill width="11" height="11" style={{ color: "var(--accent)" }} />}
                          {isR && <Icon.Check width="11" height="11" style={{ color: "var(--green)" }} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============ DAILY PAGE ============
function DailyPage({ route, setRoute, bookmarks, toggleBookmark, revised, toggleRevised }) {
  const date = route.date || "2026-05-04";
  const articles = ARTICLES.filter(a => a.date === date);
  const [activeId, setActiveId] = useStateP(route.articleId || (articles[0] && articles[0].id));
  const active = articles.find(a => a.id === activeId) || articles[0];
  const articleRef = useRefP(null);
  const [progress, setProgress] = useStateP(0);

  // scroll to top when article changes
  useEffectP(() => {
    if (articleRef.current) articleRef.current.scrollTop = 0;
    setProgress(0);
  }, [activeId]);

  const onScroll = (e) => {
    const el = e.target;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
  };

  if (!active) {
    return <div className="empty-page">No articles on this date. <button className="link-btn" onClick={() => setRoute({ page: "archive" })}>Pick another date</button></div>;
  }

  const c = CATEGORIES[active.category];
  const isB = bookmarks.has(active.id);
  const isR = revised.has(active.id);

  // related
  const related = ARTICLES
    .filter(a => a.id !== active.id && (a.category === active.category || a.concepts.some(con => active.concepts.includes(con))))
    .slice(0, 4);

  return (
    <div className="daily-page">
      {/* progress bar */}
      <div className="read-progress" style={{ width: `${progress}%`, background: c.color }} />

      <div className="daily-grid">
        {/* LEFT: TOC of today */}
        <aside className="daily-toc">
          <div className="toc-head">
            <button className="link-btn slim" onClick={() => setRoute({ page: "archive" })}>
              <Icon.ChevL width="12" height="12" /> Archive
            </button>
            <div className="toc-date">{fmtDate(date, { day: "numeric", month: "long" })}</div>
            <div className="toc-day">{fmtDate(date, { weekday: "long" })}</div>
          </div>
          <div className="toc-label">Today's bulletin · {articles.length}</div>
          <div className="toc-list">
            {articles.map((a, i) => (
              <button key={a.id}
                className={`toc-item ${a.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(a.id)}>
                <span className="toc-num">{String(i+1).padStart(2,"0")}</span>
                <span className="toc-rule" style={{ background: CATEGORIES[a.category].color }} />
                <span className="toc-content">
                  <span className="toc-cat" style={{ color: CATEGORIES[a.category].ink }}>
                    {CATEGORIES[a.category].label}
                  </span>
                  <span className="toc-title">{a.title}</span>
                </span>
                {revised.has(a.id) && <Icon.Check width="11" height="11" className="toc-check" />}
              </button>
            ))}
          </div>
        </aside>

        {/* CENTER: article */}
        <main className="daily-article" ref={articleRef} onScroll={onScroll}>
          <div className="article-inner">
            <div className="article-meta-top">
              <CategoryPill category={active.category} />
              <span className="dot-sep">·</span>
              <span><Icon.Clock width="11" height="11" /> {active.readTime} min</span>
              <span className="dot-sep">·</span>
              <span>{active.mcqs.length} MCQs</span>
            </div>

            <h1 className="article-title">{active.title}</h1>
            <p className="article-lede">{active.summary}</p>

            <div className="article-actions">
              <button className={`act-btn ${isB ? "active" : ""}`} onClick={() => toggleBookmark(active.id)}>
                {isB ? <Icon.BookmarkFill width="13" height="13" /> : <Icon.Bookmark width="13" height="13" />}
                {isB ? "Saved" : "Save"}
              </button>
              <button className={`act-btn primary ${isR ? "active" : ""}`} onClick={() => toggleRevised(active.id)}>
                <Icon.Check width="13" height="13" />
                {isR ? "Revised" : "Mark revised"}
              </button>
            </div>

            <div className="article-body">
              {active.body.map((b, i) => {
                if (b.kind === "h2") return <h2 key={i}>{b.text}</h2>;
                if (b.kind === "p") return <p key={i}>{b.text}</p>;
                if (b.kind === "ul") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
                return null;
              })}
            </div>

            {active.mcqs.length > 0 && (
              <section className="article-mcqs">
                <div className="mcqs-head">
                  <h2>Self-test</h2>
                  <p>{active.mcqs.length} questions · click any option for instant feedback</p>
                </div>
                {active.mcqs.map((m, i) => <MCQ key={i} mcq={m} idx={i} />)}
              </section>
            )}

            {/* footer nav */}
            <div className="article-footer-nav">
              <button className="footer-nav-btn"
                disabled={articles.indexOf(active) === 0}
                onClick={() => {
                  const i = articles.indexOf(active);
                  if (i > 0) setActiveId(articles[i-1].id);
                }}>
                <Icon.ChevL width="14" height="14" />
                <div>
                  <div className="fn-label">Previous</div>
                  <div className="fn-title">{articles[articles.indexOf(active) - 1]?.title || "—"}</div>
                </div>
              </button>
              <button className="footer-nav-btn right"
                disabled={articles.indexOf(active) === articles.length - 1}
                onClick={() => {
                  const i = articles.indexOf(active);
                  if (i < articles.length - 1) setActiveId(articles[i+1].id);
                }}>
                <div>
                  <div className="fn-label">Next</div>
                  <div className="fn-title">{articles[articles.indexOf(active) + 1]?.title || "—"}</div>
                </div>
                <Icon.ChevR width="14" height="14" />
              </button>
            </div>
          </div>
        </main>

        {/* RIGHT: sticky sidebar */}
        <aside className="daily-side">
          <div className="side-card">
            <div className="side-label">Concepts in this brief</div>
            <div className="side-concepts">
              {active.concepts.map(con => (
                <span key={con} className="side-concept">{con}</span>
              ))}
            </div>
          </div>

          <div className="side-card">
            <div className="side-label">Trending this week</div>
            {TRENDING_CONCEPTS.slice(0, 6).map(t => (
              <div key={t.name} className="trend-row">
                <span className="trend-dot" style={{ background: CATEGORIES[t.category].color }} />
                <span className="trend-name">{t.name}</span>
                <span className="trend-count">{t.count}</span>
              </div>
            ))}
          </div>

          {related.length > 0 && (
            <div className="side-card">
              <div className="side-label">Related</div>
              {related.map(a => (
                <button key={a.id} className="related-row"
                  onClick={() => setRoute({ page: "daily", date: a.date, articleId: a.id })}>
                  <span className="related-rule" style={{ background: CATEGORIES[a.category].color }} />
                  <span>
                    <span className="related-cat">{CATEGORIES[a.category].label}</span>
                    <span className="related-title">{a.title}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

// ============ REVISION PAGE ============
function RevisionPage({ setRoute, bookmarks, toggleBookmark, revised, toggleRevised }) {
  const [view, setView] = useStateP("week"); // week | month
  const start = view === "week" ? new Date("2026-04-28") : new Date("2026-04-04");
  const end = new Date("2026-05-04");
  const items = ARTICLES.filter(a => {
    const d = new Date(a.date);
    return d >= start && d <= end;
  });

  const byCategory = useMemoP(() => {
    const g = {};
    items.forEach(a => {
      if (!g[a.category]) g[a.category] = [];
      g[a.category].push(a);
    });
    return g;
  }, [items]);

  const allMcqs = useMemoP(() => {
    return items.flatMap(a => a.mcqs.map(m => ({ ...m, articleTitle: a.title, articleId: a.id, category: a.category })));
  }, [items]);

  const revisedCount = items.filter(a => revised.has(a.id)).length;
  const pct = items.length ? Math.round((revisedCount / items.length) * 100) : 0;

  return (
    <div className="revision-page">
      <div className="page-header">
        <div>
          <div className="kicker">Revision</div>
          <h1 className="page-title">{view === "week" ? "Weekly" : "Monthly"} revision sheet</h1>
          <p className="page-sub">
            {fmtDate(start.toISOString().slice(0,10), { day: "numeric", month: "short" })} — {fmtDate(end.toISOString().slice(0,10), { day: "numeric", month: "short" })} · {items.length} bulletins · {allMcqs.length} MCQs
          </p>
        </div>
        <div className="seg">
          <button className={view === "week" ? "active" : ""} onClick={() => setView("week")}>Week</button>
          <button className={view === "month" ? "active" : ""} onClick={() => setView("month")}>Month</button>
        </div>
      </div>

      {/* progress strip */}
      <div className="rev-progress">
        <div className="rev-progress-track">
          <div className="rev-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="rev-progress-label">
          <span><strong>{revisedCount}</strong> of {items.length} revised</span>
          <span>{pct}%</span>
        </div>
      </div>

      <div className="rev-grid">
        {/* LEFT: bullet summary by category */}
        <section className="rev-summary">
          <div className="rev-section-title">Bullet summary</div>
          {Object.keys(CATEGORIES).map(cat => {
            const list = byCategory[cat] || [];
            if (!list.length) return null;
            const c = CATEGORIES[cat];
            return (
              <div key={cat} className="rev-cat-block">
                <div className="rev-cat-head">
                  <span className="rev-cat-rule" style={{ background: c.color }} />
                  <span className="rev-cat-name" style={{ color: c.ink }}>{c.label}</span>
                  <span className="rev-cat-count">{list.length}</span>
                </div>
                <ul className="rev-bullets">
                  {list.map(a => (
                    <li key={a.id}>
                      <button className="rev-bullet"
                        onClick={() => setRoute({ page: "daily", date: a.date, articleId: a.id })}>
                        <span className="rev-bullet-date">{new Date(a.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
                        <span className="rev-bullet-title">{a.title}</span>
                        {revised.has(a.id) && <Icon.Check width="12" height="12" className="rev-bullet-check" />}
                      </button>
                      <div className="rev-bullet-summary">{a.summary}</div>
                      <div className="rev-bullet-concepts">
                        {a.concepts.map(con => <span key={con} className="rev-concept">{con}</span>)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        {/* RIGHT: MCQ practice */}
        <aside className="rev-mcqs">
          <div className="rev-mcqs-sticky">
            <div className="rev-section-title">Practice MCQs</div>
            <p className="rev-mcqs-sub">Mixed from {items.length} bulletins</p>
            <div className="rev-mcq-stack">
              {allMcqs.slice(0, 6).map((m, i) => (
                <div key={i} className="rev-mcq-card">
                  <div className="rev-mcq-source" style={{ color: CATEGORIES[m.category].ink }}>
                    {CATEGORIES[m.category].label} · {m.articleTitle.slice(0, 60)}…
                  </div>
                  <MCQ mcq={m} idx={i} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ============ BOOKMARKS PAGE ============
function BookmarksPage({ setRoute, bookmarks, toggleBookmark, revised, toggleRevised }) {
  const items = ARTICLES.filter(a => bookmarks.has(a.id));
  return (
    <div className="bookmarks-page">
      <div className="page-header">
        <div>
          <div className="kicker">Saved</div>
          <h1 className="page-title">Your bookmarks</h1>
          <p className="page-sub">{items.length} saved articles</p>
        </div>
      </div>
      {items.length === 0 ? (
        <div className="empty">Nothing saved yet. Tap the bookmark icon on any card.</div>
      ) : (
        <div className="day-list">
          {items.map(a => (
            <NewsCard key={a.id} article={a}
              onOpen={() => setRoute({ page: "daily", date: a.date, articleId: a.id })}
              bookmarks={bookmarks} toggleBookmark={toggleBookmark}
              revised={revised} toggleRevised={toggleRevised} />
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { HomePage, ArchivePage, DailyPage, RevisionPage, BookmarksPage });
