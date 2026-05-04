// RBI Grade B General Awareness — 6 syllabus categories
const CATEGORIES = {
  CurrentAffairs:       { label: "Current Affairs",      color: "#D4A04A", bg: "#F3E5C2", ink: "#5C4116" },
  FinancialSystems:     { label: "Indian Financial Systems", color: "#2C5F8D", bg: "#E8F0F7", ink: "#1A3F5C" },
  BankingSystems:       { label: "Indian Banking Systems",  color: "#1F7A6C", bg: "#E4F1EE", ink: "#13524A" },
  MonetaryPlans:        { label: "Monetary Plans",         color: "#2E7D4F", bg: "#E6F2EA", ink: "#1B5232" },
  NationalInstitutions: { label: "National Institutions",  color: "#6B4C9A", bg: "#EFEAF6", ink: "#46326B" },
  BankingTerms:         { label: "Banking Terms",          color: "#B8612A", bg: "#F7EBDD", ink: "#7A3F18" },
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
    category: "MonetaryPlans",
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
    category: "BankingSystems",
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
    category: "CurrentAffairs",
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
    category: "NationalInstitutions",
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
    category: "CurrentAffairs",
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
    category: "FinancialSystems",
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
    category: "BankingSystems",
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
    category: "CurrentAffairs",
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
    category: "NationalInstitutions",
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
    category: "FinancialSystems",
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
    category: "CurrentAffairs",
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
    category: "BankingSystems",
    title: "HDFC Bank Q4 net profit rises 18% YoY to ₹17,612 crore",
    summary: "HDFC Bank reports Q4 FY26 net profit of ₹17,612 crore, up 18% YoY. NIM at 3.5%; GNPA improves to 1.2%.",
    readTime: 3,
    concepts: ["NIM", "Q4 Results", "GNPA", "Cost-to-Income"],
    body: [{ kind: "p", text: "..." }],
    mcqs: [],
  },
  {
    id: "bt01",
    date: "2026-05-04",
    category: "BankingTerms",
    title: "Key Banking Terms: CRR, SLR, SDF, MSF, Bank Rate — explained",
    summary: "A concise reference for Grade B aspirants covering the most-tested RBI instrument rates — Cash Reserve Ratio, Statutory Liquidity Ratio, Standing Deposit Facility, Marginal Standing Facility, and Bank Rate.",
    readTime: 7,
    concepts: ["CRR", "SLR", "SDF", "MSF", "Bank Rate", "LAF", "NDTL"],
    body: [
      { kind: "h2", text: "Cash Reserve Ratio (CRR)" },
      { kind: "p", text: "CRR is the minimum percentage of a bank's Net Demand and Time Liabilities (NDTL) that must be held as cash with the RBI. Currently 4%. No interest is paid on CRR balances. RBI uses it as a monetary tool — raising CRR drains liquidity; cutting it injects liquidity." },
      { kind: "h2", text: "Statutory Liquidity Ratio (SLR)" },
      { kind: "p", text: "SLR is the minimum percentage of NDTL a bank must maintain in specified liquid assets — approved government securities (G-secs, T-bills, SDLs). Currently 18%. Banks holding SLR securities earn sovereign yields, unlike CRR." },
      { kind: "h2", text: "Standing Deposit Facility (SDF)" },
      { kind: "p", text: "Introduced in April 2022 as the LAF corridor's floor, replacing the fixed-rate reverse repo. Banks park excess liquidity with RBI at the SDF rate (currently 6.00%) without receiving any collateral — making it an uncollateralised absorption window. Key exam point: SDF absorbs liquidity without depleting RBI's stock of G-secs." },
      { kind: "h2", text: "Marginal Standing Facility (MSF)" },
      { kind: "p", text: "MSF is the emergency borrowing window above the repo rate — currently 6.50% (Repo + 25 bps). Banks can borrow overnight against excess SLR holdings. It forms the ceiling of the LAF corridor." },
      { kind: "h2", text: "Bank Rate" },
      { kind: "p", text: "The rate at which RBI lends long-term funds to banks (without collateral). Currently aligned to MSF at 6.50%. Used as the benchmark for penalties on shortfall in CRR/SLR maintenance." },
      { kind: "h2", text: "LAF Corridor Summary" },
      { kind: "ul", items: [
        "Floor: SDF Rate — 6.00% (absorption, uncollateralised)",
        "Policy Rate: Repo Rate — 6.25% (collateralised overnight lending)",
        "Ceiling: MSF Rate — 6.50% (emergency window, SLR collateral)",
        "Corridor width: 50 bps (SDF to MSF)",
      ] },
    ],
    mcqs: [
      {
        q: "Which of the following is NOT an interest-earning instrument for banks?",
        options: ["SLR securities", "CRR balance with RBI", "G-secs held in HTM", "SDL bonds"],
        answer: 1,
        explain: "RBI pays no interest on CRR balances. SLR instruments (G-secs, SDLs) earn coupon income."
      },
      {
        q: "The SDF rate is always:",
        options: ["25 bps above Repo Rate", "Equal to Repo Rate", "25 bps below Repo Rate", "Equal to Reverse Repo Rate"],
        answer: 2,
        explain: "SDF = Repo Rate − 25 bps. It forms the floor of the LAF corridor at 6.00% when Repo is 6.25%."
      },
    ],
  },
  {
    id: "bt02",
    date: "2026-05-03",
    category: "BankingTerms",
    title: "Priority Sector Lending (PSL): targets, sub-targets and adjusted net bank credit",
    summary: "PSL mandates banks to lend 40% of ANBC to priority sectors — agriculture, MSMEs, education, housing and weaker sections. Non-compliance attracts RIDF/SEDF contribution.",
    readTime: 5,
    concepts: ["PSL", "ANBC", "RIDF", "Agriculture Sub-target", "MSMEs", "Weaker Sections"],
    body: [
      { kind: "h2", text: "What is Priority Sector Lending?" },
      { kind: "p", text: "PSL is the RBI directive requiring banks to channel a minimum portion of credit to sectors deemed developmentally important. The master direction targets are set as a % of Adjusted Net Bank Credit (ANBC) or Credit Equivalent of Off-Balance Sheet Exposures (CEOBE), whichever is higher." },
      { kind: "h2", text: "Key PSL Targets" },
      { kind: "ul", items: [
        "Overall PSL: 40% of ANBC for domestic commercial banks",
        "Agriculture: 18% (of which 10% to small & marginal farmers)",
        "Micro enterprises: 7.5%",
        "Advances to weaker sections: 12%",
        "Foreign banks (>20 branches): 40% with sub-targets; (<20 branches): 40% with relaxed sub-targets",
      ] },
      { kind: "h2", text: "Shortfall & RIDF" },
      { kind: "p", text: "Banks failing to meet PSL targets must deposit the shortfall amount in funds like the Rural Infrastructure Development Fund (RIDF) maintained with NABARD, or similar funds (SEDF, MSME fund). These deposits earn below-market interest — effectively a penalty." },
    ],
    mcqs: [
      {
        q: "What is the overall PSL target for domestic scheduled commercial banks as a % of ANBC?",
        options: ["32%", "36%", "40%", "45%"],
        answer: 2,
        explain: "Domestic SCBs must lend 40% of ANBC (or CEOBE, whichever is higher) to priority sectors under RBI's master direction."
      },
      {
        q: "Banks failing to meet PSL targets deposit the shortfall in:",
        options: ["NDF maintained with RBI", "RIDF maintained with NABARD", "SIDBI special fund", "RBI Priority Sector Fund"],
        answer: 1,
        explain: "Shortfalls are deposited in RIDF (for agriculture shortfall) or SEDF/MSME-SIDBI fund, maintained with NABARD/SIDBI at below-market rates."
      },
    ],
  },
  {
    id: "fs01",
    date: "2026-05-02",
    category: "FinancialSystems",
    title: "Indian Financial System: structure, regulators and their mandates",
    summary: "Overview of India's financial system — four key segments (banking, securities markets, insurance, pension), their regulators (RBI, SEBI, IRDAI, PFRDA) and the overarching FSDC.",
    readTime: 8,
    concepts: ["RBI", "SEBI", "IRDAI", "PFRDA", "FSDC", "NaBFID", "NABARD", "NHB", "SIDBI"],
    body: [
      { kind: "h2", text: "Four pillars of India's financial system" },
      { kind: "ul", items: [
        "Banking & Payments — regulated by RBI (Banking Regulation Act 1949, RBI Act 1934)",
        "Securities Markets — regulated by SEBI (SEBI Act 1992)",
        "Insurance — regulated by IRDAI (Insurance Act 1938; IRDAI Act 1999)",
        "Pension — regulated by PFRDA (PFRDA Act 2013)",
      ] },
      { kind: "h2", text: "Financial Stability and Development Council (FSDC)" },
      { kind: "p", text: "FSDC is the apex inter-regulatory coordination body chaired by the Finance Minister. Members include governors/chairpersons of RBI, SEBI, IRDAI, PFRDA, FMC (now merged into SEBI). It is a non-statutory body set up in 2010." },
      { kind: "h2", text: "Development Finance Institutions (DFIs)" },
      { kind: "ul", items: [
        "NABARD: apex for agriculture & rural credit; supervises RRBs and cooperative banks",
        "SIDBI: apex for MSME financing and development",
        "NHB: apex for housing finance; regulates HFCs",
        "NaBFID: new infrastructure DFI set up under NaBFID Act 2021; ₹20,000 cr paid-up capital",
        "EXIM Bank: foreign trade financing",
      ] },
    ],
    mcqs: [
      {
        q: "FSDC is chaired by:",
        options: ["RBI Governor", "Finance Minister", "SEBI Chairman", "Cabinet Secretary"],
        answer: 1,
        explain: "FSDC is chaired by the Finance Minister of India. It coordinates macroprudential regulation across all financial sector regulators."
      },
      {
        q: "Which act established the National Bank for Financing Infrastructure and Development (NaBFID)?",
        options: ["NABARD Act 1981", "NaBFID Act 2021", "RBI Act 1934 (amended)", "Development Banks Act 2020"],
        answer: 1,
        explain: "NaBFID was established under the National Bank for Financing Infrastructure and Development Act, 2021 as India's principal DFI for long-term infrastructure financing."
      },
    ],
  },
  {
    id: "ni01",
    date: "2026-05-01",
    category: "NationalInstitutions",
    title: "NABARD, SIDBI, NHB, EXIM Bank — mandates, ownership & key numbers",
    summary: "Quick-reference guide to India's national financial institutions: their parent acts, ownership structure, primary mandate and key FY26 data points for Grade B preparation.",
    readTime: 6,
    concepts: ["NABARD", "SIDBI", "NHB", "EXIM Bank", "MUDRA", "NaBFID"],
    body: [
      { kind: "h2", text: "NABARD" },
      { kind: "p", text: "National Bank for Agriculture and Rural Development. Established: 12 July 1982 under NABARD Act 1981. Owned by: Government of India (99%) and RBI (1%). Key roles: refinance to cooperative banks and RRBs, RIDF management, supervision of cooperative banks, development support for rural infrastructure. FY26 refinance outstanding: ~₹6.8 lakh crore." },
      { kind: "h2", text: "SIDBI" },
      { kind: "p", text: "Small Industries Development Bank of India. Est: April 1990, SIDBI Act 1989. Principal financial institution for MSME sector. Manages MUDRA refinance, Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE). Total assets: ~₹4.2 lakh crore FY26." },
      { kind: "h2", text: "NHB (National Housing Bank)" },
      { kind: "p", text: "Est: 1988, NHB Act 1987. Originally a wholly-owned RBI subsidiary; 100% ownership transferred to GoI in 2019. Regulates and supervises Housing Finance Companies (HFCs). Operates refinance facilities for affordable housing." },
      { kind: "h2", text: "EXIM Bank" },
      { kind: "p", text: "Export-Import Bank of India. Est: 1982, Export-Import Bank Act 1981. 100% GoI-owned. Finances, facilitates and promotes India's foreign trade. Provides Buyers' Credit, Lines of Credit to foreign govts, Overseas Investment Finance." },
    ],
    mcqs: [
      {
        q: "What percentage of NABARD is owned by the Government of India?",
        options: ["51%", "75%", "99%", "100%"],
        answer: 2,
        explain: "Government of India holds 99% of NABARD; RBI holds the remaining 1% since August 2010 when RBI's stake was reduced from 72.5%."
      },
      {
        q: "Ownership of National Housing Bank (NHB) was transferred from RBI to the Government of India in:",
        options: ["2015", "2017", "2019", "2021"],
        answer: 2,
        explain: "RBI transferred its entire 100% stake in NHB to the Government of India in 2019, making NHB a wholly government-owned entity."
      },
    ],
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
  { name: "Repo Rate", count: 12, category: "MonetaryPlans" },
  { name: "Monetary Policy Committee", count: 9, category: "MonetaryPlans" },
  { name: "GNPA / NNPA", count: 8, category: "BankingSystems" },
  { name: "CPI Inflation", count: 7, category: "CurrentAffairs" },
  { name: "Basel III", count: 6, category: "BankingSystems" },
  { name: "PMJDY", count: 5, category: "CurrentAffairs" },
  { name: "FSR", count: 5, category: "NationalInstitutions" },
  { name: "External Commercial Borrowings", count: 4, category: "FinancialSystems" },
  { name: "LAF Corridor / SDF", count: 4, category: "MonetaryPlans" },
  { name: "Capital Adequacy (CRAR)", count: 3, category: "BankingTerms" },
];

window.CATEGORIES = CATEGORIES;
window.ARTICLES = ARTICLES;
window.HEATMAP = HEATMAP;
window.TRENDING_CONCEPTS = TRENDING_CONCEPTS;
