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
    id: "ai-2026-05-04-portfolios-of-rbi-deputy-gov",
    date: "2026-05-04",
    category: "BankingSystems",
    title: "Portfolios of RBI deputy governor to be distributed after Rohit Jain takes charge",
    summary: "Rohit Jain has been appointed as the new Deputy Governor of the Reserve Bank of India, succeeding T Rabi Sankar. His term will last until May 2029, focusing on financial institutions' preparedness against cybersecurity threats.",
    readTime: 1,
    source: "https://timesofindia.indiatimes.com/business/india-business/portfolios-of-rbi-deputy-governor-to-be-distributed-after-rohit-jain-takes-charge/articleshow/130743271.cms",
    concepts: ["Deputy Governor", "RBI", "cybersecurity", "bank supervision"],
    body: [{"kind": "h2", "text": "What happened"}, {"kind": "p", "text": "Rohit Jain has been appointed as the new Deputy Governor of the Reserve Bank of India, filling the vacancy left by T Rabi Sankar. Jain, previously an executive director overseeing bank supervision, will serve until May 2029. His appointment comes as the RBI focuses on preparing financial institutions for emerging threats like cybersecurity."}, {"kind": "h2", "text": "Why it matters for Grade B"}, {"kind": "p", "text": "This appointment is relevant for the RBI Grade B exam as it relates to the governance structure of the RBI and its role in banking regulation. Understanding the responsibilities of the Deputy Governor, especially in the context of cybersecurity, is crucial for candidates."}, {"kind": "h2", "text": "Key points to remember"}, {"kind": "ul", "items": ["Rohit Jain appointed as Deputy Governor of RBI", "Term lasts until May 2029", "Focus on cybersecurity threats", "Previously an executive director overseeing bank supervision"]}, {"kind": "h2", "text": "Exam-ready data points"}, {"kind": "ul", "items": ["Appointment of Rohit Jain", "Term end date: May 2029", "Focus on cybersecurity in financial institutions"]}],
    mcqs: [{"q": "Who has been appointed as the new Deputy Governor of the Reserve Bank of India?", "options": ["T Rabi Sankar", "Rohit Jain", "Executive Director", "None of the above"], "answer": 1, "explain": "Rohit Jain has been appointed as the new Deputy Governor of the Reserve Bank of India, filling the vacancy left by T Rabi Sankar."}],
  },
  {
    id: "ai-2026-05-04-poll-results-earnings-to-dri",
    date: "2026-05-04",
    category: "CurrentAffairs",
    title: "Poll results, earnings to drive markets this week",
    summary: "Indian stock markets are expected to experience volatility due to state election results and high crude oil prices. Investors will focus on the implications for inflation, the rupee, and corporate earnings.",
    readTime: 1,
    source: "https://timesofindia.indiatimes.com/business/india-business/poll-results-earnings-to-drive-markets-this-week/articleshow/130743055.cms",
    concepts: ["inflation", "corporate earnings", "crude oil prices"],
    body: [{"kind": "h2", "text": "What happened"}, {"kind": "p", "text": "Indian stock markets are poised for a volatile week, influenced by state election results and elevated crude oil prices due to tensions in West Asia. Investors are expected to closely monitor the impact of these factors on inflation, the rupee, and corporate earnings. Additionally, key economic data and corporate announcements are anticipated to influence market movements."}, {"kind": "h2", "text": "Why it matters for Grade B"}, {"kind": "p", "text": "This news connects to the RBI Grade B syllabus under current affairs, particularly regarding the impact of political events and global economic factors on financial markets. Understanding these dynamics is crucial for assessing market stability and economic health."}, {"kind": "h2", "text": "Key points to remember"}, {"kind": "ul", "items": ["State election results can significantly influence market sentiment.", "Elevated crude oil prices may lead to increased inflation.", "Corporate earnings announcements are critical for stock market performance.", "The rupee's value can be affected by global economic conditions."]}, {"kind": "h2", "text": "Exam-ready data points"}, {"kind": "ul", "items": ["Impact of state elections on market volatility", "Current crude oil prices", "Inflation trends related to oil prices", "Corporate earnings reports schedule"]}],
    mcqs: [{"q": "What factors are expected to influence Indian stock markets this week?", "options": ["State election results and crude oil prices", "Monsoon predictions and GDP growth", "Interest rates and inflation", "Corporate tax changes and foreign investments"], "answer": 0, "explain": "The article states that Indian stock markets are poised for volatility due to state election results and elevated crude oil prices."}],
  },
  {
    id: "ai-2026-05-04-tata-trusts-to-review-nomine",
    date: "2026-05-04",
    category: "CurrentAffairs",
    title: "Tata Trusts to review nominee directors for Tata Sons on May 8",
    summary: "A meeting on May 8 by Tata Trusts may lead to changes in nominee directors on the Tata Sons board due to disagreements over a potential IPO. The situation is complicated by new RBI rules that could necessitate a listing and ongoing internal disputes within the trust.",
    readTime: 1,
    source: "https://timesofindia.indiatimes.com/business/india-business/tata-trusts-to-review-nominee-directors-for-tata-sons-on-may-8/articleshow/130742849.cms",
    concepts: ["IPO", "RBI rules", "nominee directors"],
    body: [{"kind": "h2", "text": "What happened"}, {"kind": "p", "text": "Tata Trusts is set to hold a significant meeting on May 8 to review the nominee directors on the Tata Sons board. The meeting is driven by disagreements regarding a potential IPO, with Noel Tata opposing it while Venu Srinivasan supports it. This situation is further complicated by new RBI rules that may require a listing and ongoing disputes within the trust."}, {"kind": "h2", "text": "Why it matters for Grade B"}, {"kind": "p", "text": "This news is relevant to the RBI Grade B exam as it touches on corporate governance and regulatory frameworks, particularly concerning IPOs and the implications of RBI rules on corporate structures."}, {"kind": "h2", "text": "Key points to remember"}, {"kind": "ul", "items": ["Tata Trusts meeting on May 8 to review nominee directors", "Disagreements over IPO between Noel Tata and Venu Srinivasan", "New RBI rules may force a listing", "Internal disputes within Tata Trusts"]}, {"kind": "h2", "text": "Exam-ready data points"}, {"kind": "ul", "items": ["Meeting date: May 8", "Key figures: Noel Tata, Venu Srinivasan"]}],
    mcqs: [{"q": "What is the main reason for the upcoming Tata Trusts meeting on May 8?", "options": ["To discuss a merger", "To review nominee directors", "To announce a new IPO", "To resolve internal disputes"], "answer": 1, "explain": "The meeting is primarily to review the nominee directors on the Tata Sons board."}],
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
    body: [
      { kind: "h2", text: "What is a Digital Banking Unit (DBU)?" },
      { kind: "p", text: "A Digital Banking Unit is a specialised fixed-point business unit of a scheduled commercial bank that provides digital banking products in self-service or assisted mode. RBI issued DBU guidelines in April 2022. On Independence Day 2022, PM Modi inaugurated 75 DBUs across 75 districts as part of India@75 celebrations." },
      { kind: "h2", text: "DBU Framework 2.0 — New Additions (May 2026)" },
      { kind: "p", text: "The revised framework expands DBU service scope. Banks may now offer: (1) Wealth management products — mutual funds, insurance, bonds via assisted digital mode; (2) Cross-border remittances — MTSS and FEMA-compliant outward remittances; (3) Offline retail CBDC transactions using NFC chips — for areas with intermittent connectivity." },
      { kind: "h2", text: "CBDC (e-Rupee) Integration" },
      { kind: "p", text: "The e-Rupee (e₹) is India's Central Bank Digital Currency. RBI launched the e₹-R (retail) pilot in December 2022. It operates on a token-based model. Key exam points: e₹ is a direct RBI liability (like banknotes), not a bank deposit; it does not earn interest; settlement is final. DBU 2.0 makes DBUs CBDC distribution touchpoints — extending offline e₹ access to areas with poor connectivity." },
      { kind: "h2", text: "Eligibility & Requirements" },
      { kind: "ul", items: [
        "Only domestic SCBs can open DBUs — RRBs, co-operative banks, LABs not eligible",
        "No prior RBI permission needed — self-certified compliance with DBU guidelines",
        "24x7 availability mandatory for core digital products",
        "Separate Digital Banking Segment required for regulatory reporting",
        "Minimum products: savings account, FD/RD, digital loans, UPI, netbanking enrolment",
      ] },
      { kind: "h2", text: "Grade B Exam Angle" },
      { kind: "p", text: "DBUs connect to Financial Inclusion + Technology in Banking. The India Stack link is key: Aadhaar (identity) + PMJDY (account) + UPI (payment) + CBDC (digital currency) + DBU (distribution point). Examiners test: who is eligible to open DBUs, minimum services, and the CBDC link. The 75 DBUs in 2022 and their phygital nature (physical location + digital transaction) are standard data points." },
    ],
    mcqs: [
      {
        q: "Digital Banking Units (DBUs) were inaugurated on a large scale in India on:",
        options: ["Republic Day 2022", "Independence Day 2022", "Financial Inclusion Day 2023", "RBI Foundation Day 2022"],
        answer: 1,
        explain: "PM Modi inaugurated 75 DBUs on Independence Day (August 15) 2022 in 75 districts. Guidelines were issued in April 2022."
      },
      {
        q: "e-Rupee (CBDC-Retail) is best described as:",
        options: ["A RBI liability earning interest like savings deposit", "A RBI liability not earning interest, with final real-time settlement", "A bank deposit backed by government securities", "A private stablecoin regulated by SEBI"],
        answer: 1,
        explain: "e₹ is a direct RBI liability like banknotes. It does not earn interest, settlement is final and real-time. Banks are distributors, not issuers."
      },
    ],
  },
  {
    id: "a07",
    date: "2026-05-03",
    category: "BankingSystems",
    title: "SBI raises ₹15,000 crore via Tier-2 bonds at 7.42%",
    summary: "State Bank of India raises ₹15,000 crore through 15-year Basel-III compliant Tier-2 bonds, 4x oversubscribed at coupon of 7.42%.",
    readTime: 3,
    concepts: ["Tier-2 Capital", "Basel III", "AT1 vs T2", "Capital Adequacy"],
    body: [
      { kind: "h2", text: "What Happened" },
      { kind: "p", text: "State Bank of India (SBI) raised ₹15,000 crore through 15-year Basel-III compliant Tier-2 bonds in May 2026. The issue was oversubscribed 4x with bids totalling ₹60,000 crore received from insurance companies, pension funds, and mutual funds. The coupon was fixed at 7.42% per annum. The bonds were listed on BSE and NSE." },
      { kind: "h2", text: "Basel III Capital Tiers — Exam Foundation" },
      { kind: "p", text: "Basel III (implemented in India from April 2013, fully phased in by March 2019) requires banks to hold capital against Risk-Weighted Assets (RWA). The hierarchy is: CET-1 (common equity) → AT-1 (perpetual bonds) → Tier-2 (dated subordinated bonds). Understanding SBI's Tier-2 issuance requires knowing all three layers." },
      { kind: "h2", text: "Capital Structure Under Basel III (India)" },
      { kind: "ul", items: [
        "CET-1 (Common Equity Tier-1): equity shares + retained earnings; minimum 5.5% of RWA",
        "AT-1 (Additional Tier-1): perpetual bonds with discretionary coupon; loss absorption trigger at CET-1 < 6.125%; minimum 1.5%",
        "Tier-1 Capital = CET-1 + AT-1; minimum 7% of RWA",
        "Tier-2 Capital: dated subordinated bonds (≥5 year maturity) + loan-loss provisions; minimum 2%",
        "Total CRAR minimum: 11.5% including 2.5% Capital Conservation Buffer (CCB)",
      ] },
      { kind: "h2", text: "AT-1 vs Tier-2 — Most-Tested Difference" },
      { kind: "p", text: "AT-1 bonds are perpetual (no maturity) with non-cumulative discretionary coupons. If CET-1 falls below 6.125% or viability is threatened, coupons can be skipped and principal written down or converted to equity (bail-in). Tier-2 bonds (like SBI's 15-year issue) have a defined maturity and fixed coupon, but rank subordinate to depositors and senior creditors in liquidation. Both are bail-in instruments under RBI's resolution framework." },
      { kind: "h2", text: "D-SIBs and Capital Surcharge" },
      { kind: "p", text: "SBI is a Domestic Systemically Important Bank (D-SIB) — classified in Bucket 3 of RBI's D-SIB framework, requiring an additional 0.45% CET-1 surcharge over the standard CRAR. Other D-SIBs: HDFC Bank (Bucket 1, 0.20% surcharge), ICICI Bank (Bucket 1, 0.20% surcharge). D-SIBs are 'too big to fail' institutions with higher capital, resolution, and disclosure requirements." },
    ],
    mcqs: [
      {
        q: "Under Basel III, the minimum Total Capital Adequacy Ratio (CRAR) for Indian banks including the Capital Conservation Buffer is:",
        options: ["9.0%", "10.5%", "11.5%", "12.0%"],
        answer: 2,
        explain: "India requires 11.5% CRAR: 9% minimum (RBI adds 0.5% over Basel's 8%) + 2.5% Capital Conservation Buffer (CCB). D-SIBs face an additional 0.20-0.80% CET-1 surcharge."
      },
      {
        q: "AT-1 bonds differ from Tier-2 bonds primarily because AT-1 bonds are:",
        options: ["Dated with fixed maturity and guaranteed coupon", "Perpetual with discretionary coupon and write-down/conversion trigger", "Senior secured debt eligible for deposit insurance", "Issued only by PSU banks under government mandate"],
        answer: 1,
        explain: "AT-1 bonds are perpetual (no maturity), coupons are discretionary (skippable), and contain a loss-absorption trigger — written down or converted to equity if CET-1 < 6.125%."
      },
    ],
  },
  {
    id: "a08",
    date: "2026-05-02",
    category: "CurrentAffairs",
    title: "April CPI inflation eases to 4.1%; food inflation moderates sharply",
    summary: "Headline CPI inflation at 4.1% in April 2026 vs 4.6% in March, driven by 220 bps drop in vegetable inflation. Core inflation sticky at 4.4%.",
    readTime: 4,
    concepts: ["CPI", "Core Inflation", "Food Inflation", "Base Effect"],
    body: [
      { kind: "h2", text: "April 2026 Headline Data" },
      { kind: "p", text: "India's CPI inflation for April 2026 came in at 4.1%, down from 4.6% in March 2026 (MoSPI data). This is the second consecutive month within RBI's 4% target. Core CPI (excluding food and fuel) remained sticky at 4.4% — marginally up from 4.3% in March — driven by services inflation in health, education, and personal care segments." },
      { kind: "h2", text: "Component-wise Breakdown" },
      { kind: "ul", items: [
        "Headline CPI: 4.1% (April) vs 4.6% (March) — 50 bps fall",
        "Food & Beverages (45.86% weight in CPI basket): 3.8% — down sharply from 5.1%",
        "Vegetables: 2.4% — plummeted from 7.2%; rabi harvest arrivals in market",
        "Pulses: 6.1% — still elevated due to structural supply constraints",
        "Fuel & Light (6.84% weight): -0.8% — deflation; LPG price cuts in March helped",
        "Core CPI: ~4.4% — sticky; services sector inflation persistent",
        "WPI inflation: 1.8% (April) — wholesale prices remain benign",
      ] },
      { kind: "h2", text: "Base Effect Explained" },
      { kind: "p", text: "The sharp fall in food inflation is partly a base effect. April 2025 had abnormally high vegetable prices due to heat-wave-related crop damage. With a high base from last year, even stable prices this April translate to lower YoY inflation. Aspirants must distinguish between structural disinflation (genuine price stability) and base-effect disinflation (mathematical artifact). RBI's monetary policy is more concerned with structural core inflation than base-effect headline moves." },
      { kind: "h2", text: "CPI Methodology — Grade B Must-Know" },
      { kind: "p", text: "CPI in India is compiled by MoSPI using 2012 as base year. It covers all-India urban and rural consumers. CPI(IW) — Industrial Workers — with base year 2016, is used for DA revisions for government employees. CPI(AL/RL) — Agricultural/Rural Labourers — is used for minimum wage determination. The RBI's inflation target uses 'CPI Combined' (urban + rural weighted average)." },
      { kind: "h2", text: "Implications for Monetary Policy" },
      { kind: "p", text: "With headline CPI at 4.1% — at the target midpoint — the MPC has some comfort. However, sticky core at 4.4% prevents an imminent rate cut. RBI projects headline CPI at 4.3% for FY27. A cut would require: (1) core CPI trending below 4.2%, (2) global commodity prices remaining benign, (3) monsoon outlook stable. Current policy stance is 'neutral' — data-dependent rate trajectory." },
    ],
    mcqs: [
      {
        q: "Which CPI series is used by the RBI for its inflation targeting framework?",
        options: ["CPI (Industrial Workers) — base 2016", "CPI (Agricultural Labourers)", "CPI (Combined — Urban + Rural) — base 2012", "WPI — Wholesale Price Index"],
        answer: 2,
        explain: "RBI uses CPI (Combined) with base year 2012 for its 4% (+/- 2%) inflation targeting mandate. CPI(IW) is for DA revision; CPI(AL/RL) for minimum wages."
      },
      {
        q: "'Base effect' in inflation statistics refers to:",
        options: ["The floor of the LAF corridor", "The impact of abnormal price levels in the comparable period last year on current YoY inflation", "The CPI base year used for index construction", "The anchor effect of inflation expectations"],
        answer: 1,
        explain: "Base effect is the statistical distortion in YoY inflation caused by unusually high or low prices in the same month last year. High base last April (heat-wave vegetables) makes current YoY inflation appear lower."
      },
    ],
  },
  {
    id: "a09",
    date: "2026-05-02",
    category: "NationalInstitutions",
    title: "IMF World Economic Outlook update: global growth at 2.8% for 2026",
    summary: "IMF April WEO update revises global growth up by 10 bps to 2.8%; advanced economies at 1.6%, EMDEs at 4.2%. India retained at 6.8%.",
    readTime: 3,
    concepts: ["IMF", "WEO", "Global Growth", "EMDE"],
    body: [
      { kind: "h2", text: "IMF WEO April 2026 — Key Numbers" },
      { kind: "p", text: "The IMF released its April 2026 World Economic Outlook (WEO) Update, revising global growth up by 10 basis points to 2.8% for 2026. Advanced Economies are projected at 1.6%; Emerging Market and Developing Economies (EMDEs) at 4.2%. India's forecast is retained at 6.8% for FY27 — the fastest-growing major economy." },
      { kind: "h2", text: "Country & Region Breakdown" },
      { kind: "ul", items: [
        "Global: 2.8% (up 10 bps from Jan 2026 WEO)",
        "India: 6.8% FY27 — fastest growing G20 economy",
        "China: 4.6% — exports support but property sector drag persists",
        "USA: 1.8% — still-elevated rates slowing housing and capex",
        "Euro Area: 1.2% — weak German industry, energy adjustment ongoing",
        "Japan: 0.7% — demographic headwinds, weak domestic demand",
        "ASEAN-5: 4.5%",
      ] },
      { kind: "h2", text: "IMF vs World Bank — Bretton Woods Twins" },
      { kind: "p", text: "Both the IMF and World Bank were created at the Bretton Woods Conference (1944), headquartered in Washington DC. Key distinction: IMF is a monetary institution — exchange rates, balance of payments, short-term stabilisation. World Bank is a development institution — long-term project lending, poverty reduction. IMF publications: WEO + GFSR (Global Financial Stability Report) + Fiscal Monitor. World Bank: WDR (World Development Report) + GEP (Global Economic Prospects)." },
      { kind: "h2", text: "WEO Publication Schedule" },
      { kind: "ul", items: [
        "Full WEO: April and October (detailed country analysis)",
        "WEO Update: January and July (shorter revision note)",
        "GFSR and Fiscal Monitor published alongside April/October WEO",
        "India's fiscal year (April-March) differs from IMF's calendar year — check which period applies",
      ] },
      { kind: "h2", text: "IMF's Concerns for India" },
      { kind: "p", text: "While retaining the 6.8% forecast, IMF flagged: (1) global spillover risks from US monetary policy tightening affecting capital flows to India; (2) rupee volatility from oil import costs; (3) need for fiscal consolidation post-election cycle spending. IMF's Article IV consultation report for India provides granular sovereign risk assessment — frequently cited in Grade B descriptive papers." },
    ],
    mcqs: [
      {
        q: "The IMF's World Economic Outlook (WEO) is published:",
        options: ["Once a year in April", "Twice a year (April & October) with updates in January & July", "Quarterly", "Only when global recession risks exceed 25%"],
        answer: 1,
        explain: "Full WEO: April and October. WEO Updates: January and July. Fiscal Monitor and GFSR also published biannually alongside WEO in April and October."
      },
      {
        q: "Which of the following correctly distinguishes the IMF from the World Bank?",
        options: ["IMF provides long-term development loans; World Bank provides BOP stabilisation", "IMF focuses on monetary/BOP stability; World Bank on development lending and poverty reduction", "IMF is a UN agency for developed nations; World Bank for developing nations", "IMF is headquartered in New York; World Bank in Washington DC"],
        answer: 1,
        explain: "IMF = monetary institution (BOP, exchange rate, short-term stabilisation). World Bank = development institution (project loans, poverty). Both headquartered in Washington DC, created at Bretton Woods 1944."
      },
    ],
  },
  {
    id: "a10",
    date: "2026-05-01",
    category: "FinancialSystems",
    title: "RBI eases ECB framework: aggregate cap raised to $1.5 billion per borrower",
    summary: "RBI increases the automatic-route ECB ceiling from $750m to $1.5bn per financial year per borrower, simplifies all-in-cost benchmarks.",
    readTime: 4,
    concepts: ["ECB", "External Commercial Borrowing", "Automatic Route", "All-in-Cost"],
    body: [
      { kind: "h2", text: "What Changed in ECB Framework" },
      { kind: "p", text: "The Reserve Bank of India revised its External Commercial Borrowings (ECB) framework in May 2026, raising the automatic-route borrowing ceiling from $750 million to $1.5 billion per financial year per eligible borrower. This is the first major ECB revision since 2019. All-in-cost (AIC) benchmarks were simplified and fully transitioned to Term SOFR (phasing out remaining LIBOR-linked provisions after LIBOR's June 2023 discontinuation)." },
      { kind: "h2", text: "What is an ECB?" },
      { kind: "p", text: "ECBs are commercial loans raised by Indian entities from foreign lenders — international banks, capital markets, multilateral financial institutions, and export credit agencies. Governed by RBI's ECB Master Direction under FEMA 1999. ECBs allow Indian entities to diversify funding and access forex capital, typically at lower rates than domestic borrowing, while exposing them to currency risk." },
      { kind: "h2", text: "ECB Routes and Tracks" },
      { kind: "ul", items: [
        "Automatic Route: no prior RBI approval; file Form ECB for LRN post-disbursement; now capped at $1.5bn/FY",
        "Approval Route: prior RBI approval needed; for ineligible entities or above-cap amounts",
        "Track I: Medium-term FCY ECBs — min avg maturity 3 years; manufacturing, infrastructure",
        "Track II: Long-term FCY ECBs — min avg maturity 10 years; broader end-use eligibility",
        "Track III: INR-denominated ECBs (Masala Bonds) — currency risk borne by lender",
      ] },
      { kind: "h2", text: "All-in-Cost (AIC) Ceiling" },
      { kind: "p", text: "AIC is the total cost to the borrower — interest + fees + charges. RBI prescribes maximum AIC to prevent excessively costly offshore borrowing. Under the revised framework, AIC is benchmarked to Term SOFR + credit spread. For example, Track I ECBs with 3-5 year maturity: AIC ≤ Term SOFR + 350 bps. The shift to SOFR aligns India with the global benchmark transition — LIBOR was discontinued in June 2023." },
      { kind: "h2", text: "Macroeconomic Link — Why This Matters" },
      { kind: "p", text: "Raising the automatic-route ceiling signals RBI's comfort with corporate external debt and intent to attract forex inflows supporting the current account deficit (CAD). India's CAD for FY26 was ~1.6% of GDP. ECBs are a key component of the capital account — alongside FDI and FPI. Exam connects ECB policy to exchange rate management: increased ECB inflows → dollar supply → rupee appreciation pressure → forex reserve build-up." },
    ],
    mcqs: [
      {
        q: "ECBs in India are governed by which legislation?",
        options: ["RBI Act 1934", "Banking Regulation Act 1949", "Foreign Exchange Management Act (FEMA) 1999", "SEBI Act 1992"],
        answer: 2,
        explain: "ECBs are capital account transactions governed under FEMA 1999. RBI issues ECB Master Direction under FEMA. FEMA replaced FERA (Foreign Exchange Regulation Act) in 1999."
      },
      {
        q: "Which benchmark replaced USD LIBOR for ECB all-in-cost calculations in India?",
        options: ["MIBOR", "EONIA", "Term SOFR", "EURIBOR"],
        answer: 2,
        explain: "Term SOFR (Secured Overnight Financing Rate) replaced USD LIBOR as the global dollar benchmark after LIBOR's discontinuation in June 2023. RBI updated ECB AIC benchmarks accordingly."
      },
    ],
  },
  {
    id: "a11",
    date: "2026-05-01",
    category: "CurrentAffairs",
    title: "PMJDY crosses 55 crore accounts; deposit balance at ₹2.6 lakh crore",
    summary: "Pradhan Mantri Jan Dhan Yojana hits 55 crore beneficiaries on its 12th anniversary. 56% account holders are women; ₹2.6 lakh crore in deposits.",
    readTime: 3,
    concepts: ["PMJDY", "Financial Inclusion", "RuPay", "BSBDA"],
    body: [
      { kind: "h2", text: "Milestone Numbers (May 2026)" },
      { kind: "p", text: "Pradhan Mantri Jan Dhan Yojana (PMJDY), launched on August 28, 2014, crossed 55 crore (550 million) beneficiary accounts. Total deposits stand at ₹2.6 lakh crore. 56% of account holders are women. Over 34 crore RuPay debit cards issued. 67% of accounts are in rural and semi-urban areas." },
      { kind: "h2", text: "PMJDY Key Features — Complete Reference" },
      { kind: "ul", items: [
        "Account type: Basic Savings Bank Deposit Account (BSBDA) — zero balance, no minimum",
        "Overdraft: ₹10,000 (revised from ₹5,000 in 2018); available after 6 months; one per household; only earning adult",
        "RuPay Debit Card: free of cost; ₹2 lakh accidental death/disability insurance cover",
        "Life insurance: ₹30,000 for accounts opened before January 31, 2015",
        "DBT backbone: LPG subsidy, MGNREGA wages, PM-KISAN, scholarships transferred directly",
        "Aadhaar seeding: mandatory for DBT; eliminates ghost/duplicate beneficiaries",
      ] },
      { kind: "h2", text: "BSBDA vs Regular Savings Account" },
      { kind: "p", text: "A BSBDA is the RBI-mandated no-frills account under Section 10 of BR Act. No minimum balance required. Limited to 4 withdrawals per month (any mode). Banks cannot charge maintenance fees or non-maintenance penalty. Any Indian resident (including minors ≥10 years supervised by guardian) can open one. A person cannot hold both a BSBDA and a regular savings account simultaneously — must convert or close one within 30 days." },
      { kind: "h2", text: "Financial Inclusion Architecture" },
      { kind: "p", text: "PMJDY is the foundation layer of India's financial inclusion stack. The three pillars: Banking (PMJDY) → Credit (MUDRA, SHG-Bank Linkage, CGFMU) → Insurance & Pension (PMJJBY, PMSBY, APY). India Stack: Aadhaar (identity) + PMJDY (account) + UPI (payment) + DigiLocker (documents) + CBDC (digital currency). PMJDY accounts also serve as gateway to: PM Jeevan Jyoti Bima Yojana (PMJJBY), PM Suraksha Bima Yojana (PMSBY), and Atal Pension Yojana (APY)." },
      { kind: "h2", text: "Grade B Exam Traps" },
      { kind: "p", text: "Common exam mistakes: (1) Launch date — August 28, 2014 (announced Aug 15 from Red Fort, operationally launched Aug 28); (2) Overdraft is ₹10,000 not ₹5,000 (revised 2018); (3) Accident cover is ₹2 lakh from RuPay card (not ₹1 lakh); (4) 56% women account holders — financial inclusion and gender equity angle; (5) BSBDA allows only 4 withdrawals/month — a frequently tested operational detail." },
    ],
    mcqs: [
      {
        q: "PMJDY was launched on:",
        options: ["26 January 2014", "28 August 2014", "15 August 2013", "1 April 2015"],
        answer: 1,
        explain: "PMJDY was launched on August 28, 2014 (announced from Red Fort on August 15, 2014). It set a Guinness World Record — 1.8 crore accounts opened in a single day on launch date."
      },
      {
        q: "The maximum overdraft facility under PMJDY (post-2018 revision) is:",
        options: ["₹5,000", "₹7,500", "₹10,000", "₹15,000"],
        answer: 2,
        explain: "The overdraft limit was doubled from ₹5,000 to ₹10,000 in 2018. Available to one earning adult per household after the account has been active for 6 months with satisfactory conduct."
      },
    ],
  },
  {
    id: "a12",
    date: "2026-04-30",
    category: "BankingSystems",
    title: "HDFC Bank Q4 net profit rises 18% YoY to ₹17,612 crore",
    summary: "HDFC Bank reports Q4 FY26 net profit of ₹17,612 crore, up 18% YoY. NIM at 3.5%; GNPA improves to 1.2%.",
    readTime: 3,
    concepts: ["NIM", "Q4 Results", "GNPA", "Cost-to-Income"],
    body: [
      { kind: "h2", text: "Q4 FY26 Results Snapshot" },
      { kind: "p", text: "HDFC Bank reported a net profit of ₹17,612 crore for Q4 FY26, up 18% Year-on-Year. Net Interest Income (NII) grew 10% YoY to ₹31,960 crore. Net Interest Margin (NIM) was 3.5% — stable sequentially but compressed from 3.7% in Q4 FY25, reflecting competitive deposit pricing. Gross NPA improved to 1.2% (from 1.4% a year ago) and Net NPA to 0.4%, indicating strong asset quality recovery post the HDFC-HDFC Bank merger cycle." },
      { kind: "h2", text: "Key Metrics — Quick Reference" },
      { kind: "ul", items: [
        "Net Profit: ₹17,612 crore | +18% YoY",
        "Net Interest Income (NII): ₹31,960 crore | +10% YoY",
        "Net Interest Margin (NIM): 3.5% (down from 3.7% in Q4 FY25)",
        "GNPA ratio: 1.2% (improved from 1.4% YoY)",
        "Net NPA ratio: 0.4% (improved from 0.6% YoY)",
        "Capital Adequacy Ratio (CRAR): 18.8% (vs 11.5% minimum)",
        "Return on Assets (RoA): 1.9% | Return on Equity (RoE): 16.2%",
      ] },
      { kind: "h2", text: "Understanding NIM — Net Interest Margin" },
      { kind: "p", text: "NIM = (Interest Income − Interest Expense) / Average Earning Assets. It measures how profitably a bank deploys its interest-earning assets. A NIM of 3.5% means the bank earns ₹3.50 for every ₹100 of earning assets after paying depositors. NIM compression occurs when deposit rates rise faster than lending rates — as happened in FY26 when competition for deposits intensified. For Grade B: higher NIM = better spread income, but excessively high NIM can signal risk concentration." },
      { kind: "h2", text: "Understanding GNPA, Net NPA & PCR" },
      { kind: "p", text: "Gross NPA = total value of non-performing loans (overdue > 90 days) before provisioning. Net NPA = GNPA minus provisions already set aside. Provisioning Coverage Ratio (PCR) = Provisions / GNPA × 100. HDFC Bank's PCR is ~75% — for every ₹100 of bad loans, ₹75 is already provisioned. High PCR reflects conservative risk management. RBI's SARFAESI Act 2002 and Debt Recovery Tribunals (DRTs) are the key NPA recovery mechanisms." },
      { kind: "h2", text: "NPA Classification (Must-Know for Grade B)" },
      { kind: "ul", items: [
        "Standard Asset: performing; 0.25-0.40% countercyclical provision",
        "Sub-standard NPA: overdue > 90 days, up to 12 months; 15% provision",
        "Doubtful NPA: sub-standard for > 12 months; 25-100% provision (by age cohort)",
        "Loss Asset: irrecoverable; 100% provision or written off",
      ] },
    ],
    mcqs: [
      {
        q: "Net Interest Margin (NIM) is calculated as:",
        options: ["Net profit / Total assets", "(Interest income - Interest expense) / Average earning assets", "Net NPA / Gross NPA × 100", "Operating profit / Net interest income"],
        answer: 1,
        explain: "NIM = (Interest Income - Interest Expense) / Average Earning Assets. It measures the net spread a bank earns on its interest-bearing portfolio — the core profitability metric for commercial banks."
      },
      {
        q: "Provisioning Coverage Ratio (PCR) is computed as:",
        options: ["Net NPA / Gross NPA", "Provisions for NPAs / Gross NPA × 100", "Capital / Risk-weighted assets", "Gross NPA / Total advances × 100"],
        answer: 1,
        explain: "PCR = (Provisions held for NPAs / Gross NPA) × 100. PCR of 75% means 75% of gross NPAs are covered by provisions. RBI's guidance for D-SIBs is minimum 70% PCR."
      },
    ],
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
