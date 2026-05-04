// Sample content for RBI Grade B Current Affairs Archive
// Categories with color coding
const CATEGORIES = {
  RBI:      { label: "RBI",      color: "#2C5F8D", bg: "#E8F0F7", ink: "#1A3F5C" },
  Banking:  { label: "Banking",  color: "#1F7A6C", bg: "#E4F1EE", ink: "#13524A" },
  Economy:  { label: "Economy",  color: "#2E7D4F", bg: "#E6F2EA", ink: "#1B5232" },
  Reports:  { label: "Reports",  color: "#6B4C9A", bg: "#EFEAF6", ink: "#46326B" },
  Schemes:  { label: "Schemes",  color: "#B8612A", bg: "#F7EBDD", ink: "#7A3F18" },
};

// Articles — realistic RBI Grade B topics
const ARTICLES = [
  {
    id: "auto-2026-05-04-tvk-surge-may-trigger-shake-up",
    date: "2026-05-04",
    category: "Economy",
    title: "TVK surge may trigger shake-up in DMK, AIADMK",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/tamil-nadu/tvk-surge-may-trigger-shake-up-in-dmk-aiadmk-experts/articleshow/130808689.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-bjp-heavyweights-register-wins",
    date: "2026-05-04",
    category: "Economy",
    title: "BJP heavyweights register wins in Bengal",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/west-bengal/bjp-heavyweights-register-wins-in-bengal-some-big-names-stumble-despite-saffron-surge/articleshow/130806896.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-vijay-s-signature-strategy-tha",
    date: "2026-05-04",
    category: "Economy",
    title: "Vijay's signature strategy that powered TVK tsunami",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/tamil-nadu/tamil-nadu-election-result-vijay-tvk-win-dmk-lose-strategy-cadre-engineering-vijays-signature-strategy-powered-tamilaga-vettri-kazhagam-tsunami/articleshow/130776767.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-vs-babu-former-mla-defeats-sta",
    date: "2026-05-04",
    category: "Economy",
    title: "VS Babu, former MLA defeats Stalin in Kolathur",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/tamil-nadu/babu-former-mla-defeats-stalin-in-kolathur/articleshow/130806368.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-who-could-be-bjp-s-cm-face-in",
    date: "2026-05-04",
    category: "Economy",
    title: "Who could be BJP’s CM face in West Bengal?",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/west-bengal/bengal-election-results-2026-who-could-be-bjps-cm-face-in-west-bengal/articleshow/130759443.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-reliance-cuts-exports-of-alkyl",
    date: "2026-05-04",
    category: "Economy",
    title: "Reliance cuts exports of alkylates, boosts LPG output",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/industry/energy/oil-gas/reliance-cuts-exports-of-alkylates-boosts-lpg-output/articleshow/130804806.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "auto-2026-05-04-a-bengali-founded-party-finall",
    date: "2026-05-04",
    category: "Economy",
    title: "A Bengali-founded party finally eyes Bengal win",
    summary: "",
    readTime: 3,
    concepts: [],
    source: "https://economictimes.indiatimes.com/news/elections/assembly-elections/west-bengal/west-bengal-election-result-bjp-win-twist-of-history-will-the-baharatiya-janata-party-founded-by-a-bengali-shyama-prasad-mookherjee-win-west-bengal-vote/articleshow/130763589.cms",
    body: [
      { kind: "p", text: "" },
    ],
    mcqs: [],
  },
  {
    id: "a01",
    date: "2026-05-04",
    category: "RBI",
    title: "MPC holds repo rate at 6.25%, signals neutral stance amid sticky core inflation",
    summary: "The Monetary Policy Committee voted 5–1 to maintain the policy repo rate at 6.25%, citing persistent core inflation despite headline CPI easing to 4.1% in April. Governor flagged transmission lags and global commodity volatility.",
    readTime: 6,
    concepts: ["Repo Rate", "MPC", "Core Inflation", "Monetary Transmission", "Neutral Stance"],
    body: [
      { kind: "h2", text: "What happened" },
      { kind: "p", text: "The Monetary Policy Committee (MPC) of the Reserve Bank of India concluded its bi-monthly review on Wednesday with a 5–1 vote to hold the policy repo rate at 6.25%. The Standing Deposit Facility (SDF) rate remains at 6.00% and the Marginal Standing Facility (MSF) at 6.50%. The committee also retained its stance as 'neutral' — its third consecutive pause since the December 2025 cut." },
      { kind: "h2", text: "Why it matters for Grade B" },
      { kind: "p", text: "Repo rate decisions are the single most-tested topic in the FM section. Examiners frequently link MPC votes to the inflation-targeting framework, the LAF corridor, and transmission to bank lending rates. A 5–1 split (with one external member voting for a cut) is a classic discussion-question setup." },
      { kind: "h2", text: "Key concepts to revise" },
      { kind: "ul", items: [
        "Inflation targeting band: 4% (+/- 2%), reviewed every 5 years under RBI Act 1934 (amended 2016)",
        "LAF corridor: SDF (floor) — Repo (policy) — MSF (ceiling), width 50 bps",
        "MPC composition: 6 members, 3 RBI + 3 external; Governor has casting vote",
        "Transmission channels: interest rate, credit, asset price, exchange rate, expectations",
      ] },
      { kind: "h2", text: "Quotable data points" },
      { kind: "p", text: "Headline CPI fell to 4.1% in April from 4.6% in March; core CPI sticky at 4.4%. WPI inflation at 1.8%. Real GDP growth projection retained at 7.0% for FY27. Forex reserves at $702.4 billion (April 26)." },
    ],
    mcqs: [
      {
        q: "By what majority did the MPC vote to hold the repo rate in its May 2026 review?",
        options: ["6–0", "5–1", "4–2", "3–3 with Governor's casting vote"],
        answer: 1,
        explain: "The MPC voted 5–1 — one external member dissented in favour of a 25 bps cut, citing softening core inflation in services."
      },
      {
        q: "Which of the following correctly defines the LAF corridor's lower bound?",
        options: ["Reverse Repo Rate", "Standing Deposit Facility (SDF)", "Bank Rate", "CRR"],
        answer: 1,
        explain: "Since 2022, the SDF has replaced the fixed-rate reverse repo as the floor of the LAF corridor. SDF is uncollateralised — banks park excess liquidity without RBI providing G-sec collateral."
      },
    ],
  },
  {
    id: "a02",
    date: "2026-05-04",
    category: "Banking",
    title: "Gross NPAs of scheduled commercial banks fall to 2.4% — multi-decade low",
    summary: "RBI's Financial Stability Report shows GNPA ratio of SCBs declined to 2.4% in March 2026, the lowest since 2011. Net NPA at 0.5%; PCR strengthens to 76.8%.",
    readTime: 5,
    concepts: ["GNPA", "NNPA", "Provisioning Coverage Ratio", "FSR", "Asset Quality"],
    body: [
      { kind: "h2", text: "Headline numbers" },
      { kind: "p", text: "The Reserve Bank's half-yearly Financial Stability Report (FSR), released today, pegs the gross non-performing asset (GNPA) ratio of scheduled commercial banks at 2.4% as of March-end 2026 — down from 2.8% in September 2025 and a sharp turnaround from the 11.5% peak of March 2018." },
      { kind: "h2", text: "Why the improvement" },
      { kind: "ul", items: [
        "Sustained credit growth (12.4% YoY) expanding the denominator",
        "Higher recoveries via IBC and NARCL transfers",
        "Strong write-offs supported by elevated PPOP",
        "Tighter underwriting post-FY20 stress cycle",
      ] },
      { kind: "h2", text: "What to watch" },
      { kind: "p", text: "FSR flagged early signs of stress in unsecured retail (personal loans + credit cards), where 90+ DPD has crept up 30 bps over six months. RBI's November 2024 risk weight increases on this segment appear to have moderated growth from 25% to 14% YoY." },
    ],
    mcqs: [
      {
        q: "What is the Provisioning Coverage Ratio (PCR) of SCBs as per the latest FSR?",
        options: ["68.2%", "72.5%", "76.8%", "81.0%"],
        answer: 2,
        explain: "PCR strengthened to 76.8% — calculated as provisions held against gross NPAs (excluding technical write-offs in the strict definition; including them in the broader RBI measure)."
      },
    ],
  },
  {
    id: "a03",
    date: "2026-05-04",
    category: "Economy",
    title: "India's Q4 GDP growth pegged at 7.2%; full-year FY26 likely 7.0%",
    summary: "NSO advance estimates show real GDP growth of 7.2% in Q4 FY26, led by manufacturing (8.1%) and construction (9.4%). Private consumption recovers to 6.8%.",
    readTime: 4,
    concepts: ["GDP", "GVA", "NSO", "Private Final Consumption Expenditure", "Capital Formation"],
    body: [
      { kind: "h2", text: "Topline" },
      { kind: "p", text: "The National Statistical Office's provisional estimates released this evening place real GDP growth for Q4 FY26 (Jan–Mar 2026) at 7.2% year-on-year, with full-year FY26 growth at 7.0% — making India the fastest-growing major economy for the fifth consecutive year." },
    ],
    mcqs: [
      {
        q: "Which sector posted the highest GVA growth in Q4 FY26?",
        options: ["Manufacturing", "Construction", "Financial services", "Agriculture"],
        answer: 1,
        explain: "Construction GVA grew 9.4% YoY, narrowly edging out manufacturing's 8.1%, reflecting strong infrastructure capex execution."
      },
    ],
  },
  {
    id: "a04",
    date: "2026-05-04",
    category: "Reports",
    title: "World Bank's Global Economic Prospects: India to grow 6.7% in 2026",
    summary: "World Bank's June GEP report retains India's 2026 growth forecast at 6.7%, calls it 'the bright spot' in an otherwise subdued global landscape (2.5% world growth).",
    readTime: 3,
    concepts: ["World Bank", "GEP", "Global Growth", "Emerging Markets"],
    body: [{ kind: "p", text: "World Bank Global Economic Prospects details..." }],
    mcqs: [
      {
        q: "The 'Global Economic Prospects' report is published by:",
        options: ["IMF", "World Bank", "WTO", "OECD"],
        answer: 1,
        explain: "GEP is a flagship World Bank publication, released twice a year (January and June). IMF publishes the WEO; OECD publishes the Economic Outlook."
      },
    ],
  },
  {
    id: "a05",
    date: "2026-05-04",
    category: "Schemes",
    title: "PM Vidyalaxmi expanded: collateral-free education loans up to ₹10 lakh",
    summary: "Cabinet approves expansion of PM Vidyalaxmi scheme — collateral-free, guarantor-free loans up to ₹10 lakh for higher education at 860 quality institutions.",
    readTime: 3,
    concepts: ["PM Vidyalaxmi", "Education Loans", "Credit Guarantee", "Higher Education"],
    body: [{ kind: "p", text: "Scheme details..." }],
    mcqs: [
      {
        q: "Under expanded PM Vidyalaxmi, the credit guarantee covers up to:",
        options: ["50% of outstanding default", "75% of outstanding default", "100% of outstanding default", "No guarantee, only interest subvention"],
        answer: 1,
        explain: "Government provides credit guarantee of up to 75% of the outstanding default amount — making banks comfortable lending without collateral or guarantor."
      },
    ],
  },
  {
    id: "a06",
    date: "2026-05-03",
    category: "RBI",
    title: "RBI introduces unified Digital Banking Units (DBU) framework 2.0",
    summary: "Revised DBU framework permits banks to offer wealth management, cross-border remittance, and offline retail CBDC at digital banking units.",
    readTime: 4,
    concepts: ["DBU", "CBDC", "Digital Banking", "Financial Inclusion"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a07",
    date: "2026-05-03",
    category: "Banking",
    title: "SBI raises ₹15,000 crore via Tier-2 bonds at 7.42%",
    summary: "State Bank of India raises ₹15,000 crore through 15-year Basel-III compliant Tier-2 bonds, 4x oversubscribed at coupon of 7.42%.",
    readTime: 3,
    concepts: ["Tier-2 Capital", "Basel III", "AT1 vs T2", "Capital Adequacy"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a08",
    date: "2026-05-02",
    category: "Economy",
    title: "April CPI inflation eases to 4.1%; food inflation moderates sharply",
    summary: "Headline CPI inflation at 4.1% in April 2026 vs 4.6% in March, driven by 220 bps drop in vegetable inflation. Core inflation sticky at 4.4%.",
    readTime: 4,
    concepts: ["CPI", "Core Inflation", "Food Inflation", "Base Effect"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a09",
    date: "2026-05-02",
    category: "Reports",
    title: "IMF World Economic Outlook update: global growth at 2.8% for 2026",
    summary: "IMF April WEO update revises global growth up by 10 bps to 2.8%; advanced economies at 1.6%, EMDEs at 4.2%. India retained at 6.8%.",
    readTime: 3,
    concepts: ["IMF", "WEO", "Global Growth", "EMDE"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a10",
    date: "2026-05-01",
    category: "RBI",
    title: "RBI eases ECB framework: aggregate cap raised to $1.5 billion per borrower",
    summary: "RBI increases the automatic-route ECB ceiling from $750m to $1.5bn per financial year per borrower, simplifies all-in-cost benchmarks.",
    readTime: 4,
    concepts: ["ECB", "External Commercial Borrowing", "Automatic Route", "All-in-Cost"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a11",
    date: "2026-05-01",
    category: "Schemes",
    title: "PMJDY crosses 55 crore accounts; deposit balance at ₹2.6 lakh crore",
    summary: "Pradhan Mantri Jan Dhan Yojana hits 55 crore beneficiaries on its 12th anniversary. 56% account holders are women; ₹2.6 lakh crore in deposits.",
    readTime: 3,
    concepts: ["PMJDY", "Financial Inclusion", "RuPay", "BSBDA"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "a12",
    date: "2026-04-30",
    category: "Banking",
    title: "HDFC Bank Q4 net profit rises 18% YoY to ₹17,612 crore",
    summary: "HDFC Bank reports Q4 FY26 net profit of ₹17,612 crore, up 18% YoY. NIM at 3.5%; GNPA improves to 1.2%.",
    readTime: 3,
    concepts: ["NIM", "Q4 Results", "GNPA", "Cost-to-Income"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
];

// Generate activity heatmap data — last 90 days
function generateHeatmap() {
  const out = {};
  const today = new Date('2026-05-04');
  for (let i = 0; i < 120; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    // Realistic distribution: 0 on Sundays, 3-12 on weekdays
    const dow = d.getDay();
    if (dow === 0) out[key] = 0;
    else out[key] = Math.floor(2 + Math.random() * 10);
  }
  // Today's actual count from articles
  const todayKey = '2026-05-04';
  out[todayKey] = ARTICLES.filter(a => a.date === todayKey).length;
  return out;
}

const HEATMAP = generateHeatmap();

// Trending concepts (sidebar)
const TRENDING_CONCEPTS = [
  { name: "Repo Rate", count: 12, category: "RBI" },
  { name: "Monetary Policy Committee", count: 9, category: "RBI" },
  { name: "GNPA / NNPA", count: 8, category: "Banking" },
  { name: "CPI Inflation", count: 7, category: "Economy" },
  { name: "Basel III", count: 6, category: "Banking" },
  { name: "PMJDY", count: 5, category: "Schemes" },
  { name: "FSR", count: 5, category: "Reports" },
  { name: "External Commercial Borrowings", count: 4, category: "RBI" },
];

window.CATEGORIES = CATEGORIES;
window.ARTICLES = ARTICLES;
window.HEATMAP = HEATMAP;
window.TRENDING_CONCEPTS = TRENDING_CONCEPTS;
