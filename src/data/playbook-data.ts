// Energy & Supply Transformation with RA+ Playbook Data

export const strategicPillars = [
  {
    id: "data-foundation",
    title: "Data Foundation",
    tagline: "Unified, global energy data platform",
    promise: "A central layer that ingests as-received interval, invoice, offer, tariff, contract data and enables automation at scale.",
    description: "Build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter/account/site keys (MPAN first, expanding to EAN/POD, etc.), and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules.",
    whatLivesHere: [
      "Centralized raw data lake with immutable storage",
      "Contract & portfolio single source of truth",
      "Identity mappings across markets (meter↔account↔site)",
      "Tariff/regulatory ingestion model (ACT integration)",
      "Schema registry for data governance",
    ],
    successMetrics: [
      "% of interval data available at D+1",
      "Time to onboard new market/region",
      "Data reconciliation accuracy across sources",
      "Reduction in manual data collection effort",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "automation",
    title: "Automation",
    tagline: "Do more with less data",
    promise: "Generate pseudo-bills, budgets, forecasts, and validation results with minimal human intervention using interval + contract + tariff data.",
    description: "Shift from reactive manual processing to proactive automation. If we have interval + contract, we can compute pseudo bills, budgets, forecasts, and validations without waiting for invoices. Clients enrich data where needed (occupancy/production).",
    whatLivesHere: [
      "Pseudo-bill generation at D+1 (end of month)",
      "Automated invoice validation when invoices arrive",
      "Real-time budgets and reforecasts",
      "Automated sourcing workflows (Codex vision)",
      "Dynamic risk insights and forecasts down to site level",
    ],
    successMetrics: [
      "Invoice validation backlog reduction (target: 50%+)",
      "Budget cycle time reduction (target: <2 weeks)",
      "Touches per bill reduction (target: 40%)",
      "% of Managed Services automated (target: 90%+)",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "platform-scale",
    title: "Platform Scale",
    tagline: "Beyond Schneider",
    promise: "Once functional, RA+ can become a consultant platform: sell Managed Services capabilities as SaaS to third-party consultants globally.",
    description: "The platform can absorb new regulations, retailers, and market structures through configuration. Our differentiator remains data + risk expertise and a truly global footprint of regulatory content and identity mapping.",
    whatLivesHere: [
      "Connector ecosystem for retailers and aggregators",
      "LOA / authorization workflow digitization",
      "Client self-serve portal for data enrichment",
      "Third-party consultant SaaS capabilities",
      "Global regulatory content and identity mapping",
    ],
    successMetrics: [
      "Number of markets supported",
      "Time to add new retailer connector",
      "Client self-serve adoption rate",
      "Third-party consultant revenue (future)",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];

export const objectives = [
  {
    id: "O1",
    title: "Reduce invoice validation backlog and manual effort",
    linkedPillar: "automation",
    customerOutcome: "Clients receive validated invoices faster with fewer errors and reduced manual intervention.",
    businessValue: "Cut invoice validation errors significantly; reduce manual tolerance checks; clear backlog.",
    keyResults: [
      { id: "KR1", title: "Invoice validation backlog reduction", metric: "50%+", roiMetric: "Hours saved; error rate reduction" },
      { id: "KR2", title: "Touches per bill reduction", metric: "40%", roiMetric: "FTE savings; cost reduction" },
      { id: "KR3", title: "Pseudo-bill accuracy vs actual invoice", metric: ">95%", roiMetric: "Dispute accuracy improvement" },
    ],
  },
  {
    id: "O2",
    title: "Accelerate budget creation and reforecasting",
    linkedPillar: "data-foundation",
    customerOutcome: "Budget cycles complete in days instead of weeks, with real-time reforecast capability.",
    businessValue: "Faster client delivery; reduced consulting effort; improved forecast accuracy.",
    keyResults: [
      { id: "KR4", title: "Budget cycle time reduction", metric: "<2 weeks", roiMetric: "Time to delivery" },
      { id: "KR5", title: "Tariff data completeness for future years", metric: ">90%", roiMetric: "Budget accuracy" },
      { id: "KR6", title: "Real-time reforecast capability", metric: "Enabled", roiMetric: "Client satisfaction" },
    ],
  },
  {
    id: "O3",
    title: "Establish unified data platform for global operations",
    linkedPillar: "data-foundation",
    customerOutcome: "Single source of truth for energy data across all markets, reducing data conflicts and reconciliation effort.",
    businessValue: "Lower operational overhead; reduced headcount dependency; scalable operations.",
    keyResults: [
      { id: "KR7", title: "Markets with unified identity mapping", metric: "UK + US + 2 EU", roiMetric: "Operational scalability" },
      { id: "KR8", title: "Reduction in duplicate data feeds", metric: "60%+", roiMetric: "Data management cost" },
      { id: "KR9", title: "Portfolio data single ownership", metric: "Established", roiMetric: "Data quality improvement" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "Complete offer PRDs", pillar: "data-foundation", outcome: "Clear requirements for offer ingestion and normalization", objective: "O3", kr: "KR7" },
    { title: "Frame end-to-end journey", pillar: "automation", outcome: "Documented data flow from ingestion to service delivery", objective: "O1", kr: "KR1" },
    { title: "Define target data model", pillar: "data-foundation", outcome: "Schema for interval, contract, tariff, portfolio data", objective: "O3", kr: "KR7" },
    { title: "Identity mapping approach", pillar: "data-foundation", outcome: "Strategy for meter↔account↔site resolution globally", objective: "O3", kr: "KR7" },
    { title: "Connector strategy design", pillar: "platform-scale", outcome: "Retailer + aggregator + Deepki-like model evaluation", objective: "O3", kr: "KR8" },
    { title: "LOA/authorization workflow", pillar: "platform-scale", outcome: "Digital LOA issuance and renewal with audit trail", objective: "O3", kr: "KR7" },
    { title: "Budget management MVP", pillar: "automation", outcome: "Pilot real-time budget generation and reforecast for initial portfolio", objective: "O2", kr: "KR4" },
  ],
  next: [
    { title: "Centralized raw data lake", pillar: "data-foundation", outcome: "Immutable as-received data storage operational", objective: "O3", kr: "KR8" },
    { title: "Contract & portfolio single source of truth", pillar: "data-foundation", outcome: "One authoritative system for contract data", objective: "O3", kr: "KR9" },
    { title: "Tariff/regulatory ingestion model", pillar: "data-foundation", outcome: "Proactive tariff data collection vs reactive", objective: "O2", kr: "KR5" },
    { title: "Pseudo-bill MVP (UK or US)", pillar: "automation", outcome: "Generate pseudo-bills at D+1 for pilot market", objective: "O1", kr: "KR3" },
    { title: "Adaptive invoice variance & triage", pillar: "automation", outcome: "Automated anomaly detection and prioritization", objective: "O1", kr: "KR1" },
    { title: "No-mutation-at-entry policy", pillar: "data-foundation", outcome: "Raw data preserved; transformations downstream only", objective: "O3", kr: "KR8" },
  ],
  later: [
    { title: "Expand connectors & retailer integrations", pillar: "platform-scale", outcome: "Automated data collection from major retailers", objective: "O3", kr: "KR7" },
    { title: "Normalize offers (Codex 2.0)", pillar: "automation", outcome: "Automated sourcing workflow from offer ingestion", objective: "O1", kr: "KR2" },
    { title: "Improve forecasting (region → site)", pillar: "automation", outcome: "Site-level dynamic risk insights and forecasts", objective: "O2", kr: "KR6" },
    { title: "Integrate into RA+ modules", pillar: "automation", outcome: "Budget, Forecast, Sourcing powered by unified data", objective: "O2", kr: "KR4" },
    { title: "Near-real-time load insights", pillar: "platform-scale", outcome: "Enable demand response, efficiency, microgrid optimization", objective: "O1", kr: "KR2" },
    { title: "Third-party consultant platform", pillar: "platform-scale", outcome: "RA+ as SaaS for external consultants", objective: "O3", kr: "KR7" },
  ],
};

export const domainInitiatives = [
  {
    domain: "Data Ingestion",
    initiatives: [
      "IDM enhancement for global scraping",
      "Retailer connector ecosystem",
      "Aggregator partnerships (Deepki model)",
      "LOA digitization and management",
      "As-received data lake implementation",
      "No-mutation-at-entry enforcement",
    ],
  },
  {
    domain: "Identity & Governance",
    initiatives: [
      "Global identity registry (MPAN → EAN/POD)",
      "Meter↔account↔site mapping automation",
      "Portfolio single ownership establishment",
      "Schema registry and data governance",
      "Contract data consolidation",
      "Regulatory content service with proactive management",
    ],
  },
  {
    domain: "Invoice Automation",
    initiatives: [
      "Pseudo-bill generation engine",
      "Automated invoice validation",
      "Variance detection and triage",
      "Tolerance check automation",
      "Dispute accuracy improvement",
      "IDP/Blair agent enhancement",
    ],
  },
  {
    domain: "Budgeting & Forecasting",
    initiatives: [
      "Real-time budget generation",
      "Tariff data completeness improvement",
      "Weather integration for forecasting",
      "Site-level forecast capability",
      "Reforecast automation",
      "Financial view integration",
    ],
  },
  {
    domain: "Sourcing & Risk",
    initiatives: [
      "Offer ingestion and normalization (Codex 2.0)",
      "Automated sourcing workflows",
      "Dynamic risk insights",
      "PPA advisory automation",
      "Market price integration",
      "Accruals automation",
    ],
  },
  {
    domain: "Client Experience",
    initiatives: [
      "Client self-serve portal",
      "Occupancy/production data capture",
      "ERP/BMS API integration",
      "Real-time data transparency",
      "Client context enrichment",
      "Demand response enablement",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Operational Cost Reduction",
    description: "Reduce manual data collection effort across managed services",
    metrics: ["FTE reduction", "Hours saved per cycle", "Cost per invoice processed"],
    icon: "TrendingDown",
  },
  {
    lever: "Cycle Time Acceleration",
    description: "Cut budget creation from ~8 weeks to <2 weeks; enable real-time reforecasting",
    metrics: ["Budget cycle days", "Time to first forecast", "Reforecast frequency"],
    icon: "Clock",
  },
  {
    lever: "Quality & Accuracy",
    description: "Improve dispute accuracy, reduce validation errors, and eliminate data conflicts",
    metrics: ["Dispute win rate", "Validation error rate", "Data reconciliation accuracy"],
    icon: "Shield",
  },
  {
    lever: "Scale & Reach",
    description: "Enable global operations without linear headcount growth; platform for third-party consultants",
    metrics: ["Markets supported", "Revenue per FTE", "Third-party platform revenue"],
    icon: "BarChart3",
  },
];

export const aiScorecard = [
  { metric: "Automation Rate", target: "90%+", description: "Managed Services operations automated" },
  { metric: "Pseudo-Bill Accuracy", target: ">95%", description: "Match rate vs actual retailer invoices" },
  { metric: "Data Availability", target: "D+1", description: "Interval data available next day" },
  { metric: "Identity Resolution", target: ">98%", description: "Meter↔account↔site mapping accuracy" },
];

export const startStopMatrix = {
  data: {
    theme: "Data Collection",
    stop: "Manual data collection, reconciliation, and reformatting across fragmented sources",
    start: "Unified data platform with automated ingestion and identity resolution",
  },
  processing: {
    theme: "Invoice Processing",
    stop: "Reactive invoice validation with 160,000 issue backlog",
    start: "Proactive pseudo-bill generation at D+1 with automated validation",
  },
  budgeting: {
    theme: "Budgeting",
    stop: "8-week budget cycles driven by incomplete tariff data",
    start: "Real-time budgets and reforecasts with proactive tariff management",
  },
  ownership: {
    theme: "Data Ownership",
    stop: "Portfolio data maintained inconsistently by multiple teams",
    start: "Single ownership with governed data models and clear accountability",
  },
  responsibility: {
    theme: "Client Responsibility",
    stop: "Team fixes everything for the client (interval gaps, portfolio issues)",
    start: "Give clients tools and data to resolve with us collaboratively",
  },
  ingestion: {
    theme: "Data Ingestion",
    stop: "Mutating invoice data at entry, losing original context",
    start: "Immutable raw data with downstream transformations and lineage",
  },
  identity: {
    theme: "Identity Management",
    stop: "Manual meter↔account↔site reconciliation outside UK",
    start: "Global identity registry with automated resolution",
  },
  connectors: {
    theme: "Retailer Integration",
    stop: "IDM scraping that fails outside UK and gets blocked",
    start: "Connector ecosystem with aggregator partnerships",
  },
};

export const northStarMetrics = [
  { metric: "Backlog Reduction", target: "50%+", description: "Invoice validation queue cleared" },
  { metric: "Budget Cycle", target: "<2 weeks", description: "From ~8 weeks to under 2 weeks" },
  { metric: "Automation", target: "90%+", description: "Managed Services operations automated" },
];

export const valuePillars = [
  { 
    title: "Cost Reduction", 
    icon: "TrendingDown", 
    description: "Reduce operational cost and headcount through automation of manual data collection and processing" 
  },
  { 
    title: "Speed", 
    icon: "Zap", 
    description: "Cut budget cycles from 8 weeks to under 2 weeks; enable D+1 pseudo-bill generation" 
  },
  { 
    title: "Accuracy", 
    icon: "Target", 
    description: "Improve dispute accuracy and reduce validation errors through unified data and identity resolution" 
  },
  { 
    title: "Scale", 
    icon: "Rocket", 
    description: "Enable global operations without linear headcount growth; platform for third-party consultants" 
  },
];

export const strategicContext = {
  summary: "Managed Services carries high operational cost because core services depend heavily on manual data collection, reconciliation, and reformatting across thousands of fragmented data sources worldwide. Most process inefficiency comes from data heterogeneity, not functional complexity.",
  northStar: "Build a unified, global energy data platform that enables 90%+ automation of Managed Services, cutting budget cycles to under 2 weeks and reducing the invoice validation backlog by 50%+.",
};

export const supportingScorecard = [
  { metric: "Interval Data Availability", definition: "% of meters with interval data at D+1" },
  { metric: "Identity Resolution", definition: "% of meters with accurate account/site mapping" },
  { metric: "Tariff Completeness", definition: "% of future tariffs available for budgeting" },
  { metric: "Connector Coverage", definition: "% of retailers with automated data ingestion" },
  { metric: "Client Self-Serve", definition: "% of context data provided by clients directly" },
  { metric: "Portfolio Accuracy", definition: "% of portfolio data without conflicts or gaps" },
];

export const roiScorecard = [
  { metric: "FTE Reduction", definition: "Operational headcount savings", target: "30-40%" },
  { metric: "Backlog Cleared", definition: "Invoice validation issues resolved", target: "80,000+" },
  { metric: "Cycle Time", definition: "Budget creation acceleration", target: "75% faster" },
  { metric: "Error Reduction", definition: "Validation and dispute errors", target: "50% fewer" },
];

export const executiveTakeaway = {
  summary: "Within two quarters of MVP, we expect to reduce the invoice validation backlog by 50%+, lower touches per bill by 40%, and cut the budget cycle to <2 weeks for pilot portfolios.",
  conclusion: "Once the data foundation is solved, 90%+ of Managed Services can be automated. RA+ can then power not only our services but also third-party consultants globally—a step-change in TAM similar to how Octopus commercialized Kraken for utilities.",
};

export const appendixPillars = [
  {
    pillar: "Data Foundation",
    focus: [
      "Build unified energy data platform with as-received data lake",
      "Establish identity registry for global meter/account/site mapping",
      "Create schema registry and data governance framework",
      "Implement no-mutation-at-entry policy for data integrity",
    ],
    outcomes: [
      "Single source of truth for energy data across all markets",
      "Reduced data reconciliation effort and conflicts",
      "Faster onboarding of new markets and retailers",
      "Improved data quality and auditability",
    ],
    themes: [
      "Centralized raw data lake implementation",
      "Identity registry (MPAN → EAN/POD expansion)",
      "Contract & portfolio consolidation",
      "Regulatory content service with ACT integration",
    ],
    valueProof: [
      "Reduction in manual data collection hours",
      "Data reconciliation accuracy improvement",
      "Time to onboard new market/region",
    ],
  },
  {
    pillar: "Automation",
    focus: [
      "Generate pseudo-bills at D+1 to validate against invoices",
      "Automate invoice validation and variance detection",
      "Enable real-time budgeting and reforecasting",
      "Implement automated sourcing workflows (Codex 2.0)",
    ],
    outcomes: [
      "50%+ reduction in invoice validation backlog",
      "40% fewer touches per bill",
      "Budget cycles reduced from 8 weeks to <2 weeks",
      "Near-elimination of manual tolerance checks",
    ],
    themes: [
      "Pseudo-bill generation engine",
      "Automated invoice validation and triage",
      "Real-time budget and reforecast capability",
      "Offer normalization and sourcing automation",
    ],
    valueProof: [
      "Invoice validation backlog reduction",
      "Budget cycle time improvement",
      "FTE savings in operational roles",
    ],
  },
  {
    pillar: "Platform Scale",
    focus: [
      "Build connector ecosystem for retailers and aggregators",
      "Digitize LOA/authorization workflows globally",
      "Enable client self-serve for data enrichment",
      "Create platform for third-party consultant SaaS",
    ],
    outcomes: [
      "Global operations without linear headcount growth",
      "Faster retailer integration and market expansion",
      "Improved client experience and data transparency",
      "New revenue stream from third-party platform",
    ],
    themes: [
      "Retailer connector expansion",
      "Aggregator partnerships (Deepki model)",
      "Client portal for occupancy/production data",
      "Third-party consultant platform capabilities",
    ],
    valueProof: [
      "Number of markets supported",
      "Revenue per FTE improvement",
      "Client satisfaction scores",
    ],
  },
];

export const roadmapSummary = {
  investmentPriorities: [
    {
      number: 1,
      text: "Establish data foundation: centralized data lake, identity registry, and governance framework",
    },
    {
      number: 2,
      text: "Enable automation: pseudo-bill generation, automated validation, and real-time budgeting",
    },
    {
      number: 3,
      text: "Scale the platform: connector ecosystem, client self-serve, and third-party capabilities",
    },
  ],
  pillars: [
    {
      id: "data-foundation",
      name: "Pillar 1: Data Foundation",
      tagline: "Unified, global energy data platform",
      icon: "Layers",
      focus: [
        "Build unified energy data platform with as-received data lake",
        "Establish identity registry for global meter/account/site mapping",
        "Create schema registry and data governance framework",
      ],
      outcomes: [
        "Single source of truth for energy data across all markets",
        "Reduced data reconciliation effort and conflicts",
        "Faster onboarding of new markets and retailers",
      ],
      themes: [
        "Centralized raw data lake",
        "Identity registry expansion",
        "Contract & portfolio consolidation",
        "Regulatory content service",
      ],
      valueProof: [
        "Reduction in manual data collection hours",
        "Data reconciliation accuracy improvement",
        "Time to onboard new market/region",
      ],
    },
    {
      id: "automation",
      name: "Pillar 2: Automation",
      tagline: "Do more with less data",
      icon: "TrendingUp",
      focus: [
        "Generate pseudo-bills at D+1 to validate against invoices",
        "Automate invoice validation and variance detection",
        "Enable real-time budgeting and reforecasting",
      ],
      outcomes: [
        "50%+ reduction in invoice validation backlog",
        "40% fewer touches per bill",
        "Budget cycles reduced from 8 weeks to <2 weeks",
      ],
      themes: [
        "Pseudo-bill generation engine",
        "Automated invoice validation",
        "Real-time budgeting",
        "Sourcing automation (Codex 2.0)",
      ],
      valueProof: [
        "Invoice validation backlog reduction",
        "Budget cycle time improvement",
        "FTE savings in operational roles",
      ],
    },
    {
      id: "platform-scale",
      name: "Pillar 3: Platform Scale",
      tagline: "Beyond Schneider",
      icon: "Sparkles",
      focus: [
        "Build connector ecosystem for retailers and aggregators",
        "Digitize LOA/authorization workflows globally",
        "Enable client self-serve for data enrichment",
      ],
      outcomes: [
        "Global operations without linear headcount growth",
        "Faster retailer integration and market expansion",
        "New revenue stream from third-party platform",
      ],
      themes: [
        "Retailer connector expansion",
        "Aggregator partnerships",
        "Client self-serve portal",
        "Third-party platform",
      ],
      valueProof: [
        "Number of markets supported",
        "Revenue per FTE improvement",
        "Client satisfaction scores",
      ],
    },
  ],
};

export const keyChallenges = [
  {
    id: "data-fragmentation",
    title: "Data Fragmentation",
    issues: [
      "Offers, invoices, and interval data arrive in thousands of formats",
      "Contract, portfolio, regulatory, and account data scattered across ACT, CBMS, RA Classic, RA+, spreadsheets, retailer sites, and internal teams",
      "Data often conflicts or is incomplete",
    ],
  },
  {
    id: "ingestion-limitations",
    title: "Ingestion Limitations",
    issues: [
      "IDM scrapes retailer portals (works in UK through MPAN; fails elsewhere)",
      "Retailers may block scraping (e.g., Belgium)",
      "Market data often arrives D+15, not D+1",
      "No unified master data: meter↔account↔site identity cannot be reliably resolved outside the UK",
    ],
  },
  {
    id: "operational-bottlenecks",
    title: "Operational Bottlenecks",
    issues: [
      "Invoice validation queue is ~160,000 issues, impossible to clear manually",
      "Budget creation takes ~8 weeks, driven by incomplete or missing data (e.g., tariffs for future years)",
      "Portfolio data is maintained inconsistently by multiple teams (CM, Risk, Sourcing, Data)",
    ],
  },
  {
    id: "over-responsibility",
    title: "Over-Responsibility",
    issues: [
      "Team tries to fix everything on behalf of the client (interval data gaps, portfolio inconsistencies, context missing)",
      "Creates high cost and poor accuracy",
      "Results in reinvented work across business lines",
    ],
  },
];

export const dataNeeded = [
  { name: "Interval Data", description: "Half-hourly / hourly consumption data" },
  { name: "Contract Data", description: "Terms, rates, and conditions" },
  { name: "Commodity Rates", description: "Current and forward pricing" },
  { name: "Non-Commodity Elements", description: "Network charges, capacity" },
  { name: "Taxes + Riders", description: "Regulatory charges and levies" },
  { name: "Tariffs & Regulatory Data", description: "ACT today, future rates" },
  { name: "Portfolio Data", description: "Sites, meters, accounts mapping" },
  { name: "Forecast Data", description: "Load and price projections" },
];

export const optionalClientContext = [
  { name: "Occupancy", description: "Building occupancy patterns" },
  { name: "Production", description: "Manufacturing/operational data" },
];

export const existingTools = [
  { name: "IDM", description: "Scraping-based interval collection", limitation: "Works in UK; fails elsewhere" },
  { name: "ACT", description: "Tariff & regulatory calculator", limitation: "Manual maintenance" },
  { name: "CBMS", description: "Managed Services operations", limitation: "Fragmented workflows" },
  { name: "RA Classic", description: "Budget calculation (digitized interface)", limitation: "Legacy integration" },
  { name: "IDP / Blair Agent", description: "Invoice capture from PDFs/images", limitation: "Accuracy varies" },
  { name: "Variance Check Agent", description: "Gas, NA variance detection", limitation: "~15-20% accuracy improvement only" },
];

export const marketConstraints = [
  "Retailers are not obligated to share interval or invoices quickly",
  "Interval data availability varies widely by country",
  "Market identifiers like MPAN (UK) don't exist in many regions",
  "Tariffs and regulatory data are numerous, volatile, and maintained manually",
  "LOA / authorization flows must be digitized for global data access",
  "May need to replicate or partner with connector ecosystems like Deepki",
];

export const executiveNarrative = {
  whatsHappening: "Our managed services business carries significant operating cost and manual effort because we lack a single, authoritative way to ingest, standardize, and use the data that powers every offer: budgeting, invoice validation, sourcing, risk management, accruals, and PPA advisory. Teams spend outsized time reconciling interval, contract, invoice, tariff, and offer data across thousands of formats and retailer portals. The result: long budget cycles (~8 weeks), a ballooning invoice validation queue (~160k issues), and duplicated portfolio work across multiple teams.",
  trueProblem: "The challenge is not the service logic; it's the data foundation. When interval and contract data are available and mapped to sites/accounts, we can compute what a bill should be and automate downstream workflows. Where we fail is identity (meter↔account↔site mapping outside the UK), reactive regulatory content, market delays (D+15), and fragmented ingestion that sometimes mutates invoices on entry—undermining trust.",
  northStar: "We will build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter/account/site keys (MPAN first, expanding to EAN/POD, etc.), a regulatory content service with proactive completeness management, and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules. Clients can securely contribute occupancy/production (or connect ERP/BMS) to enhance accuracy.",
  pragmaticWay: "We'll 'do more with less': start with Interval + Contract + Tariffs to generate pseudo-bills at D+1 (end of month), then reconcile with the retailer's invoice when it arrives. This avoids the D+15 market dependency and eliminates today's brittle tolerance checks. Adding weather (easy) and optional occupancy/production (via portal or API) dramatically reduces false positives. We will also stop mutating invoice data at entry—transformations will only happen downstream, with lineage.",
  economicImpact: [
    "Reduce the invoice validation backlog by 50%+ and lower touches per bill by 40%",
    "Cut the budget cycle to <2 weeks for pilot portfolios, with further reduction to <1 week as coverage expands",
    "Improve dispute accuracy, enable earlier detection of anomalies, and unlock near-real-time actions for Efficiency/Microgrid",
  ],
  strategicUpside: "Once the platform is operating reliably, RA+ can power not only our services but also third-party consultants globally—a step-change in TAM similar to how Octopus commercialized Kraken for utilities. Our differentiator remains data + risk expertise and a truly global footprint of regulatory content and identity mapping.",
  risks: [
    { risk: "Connector coverage & LOA complexity", mitigation: "Partner where it's faster; digitize LOA issuance/renewals with audit trail; prioritize UK/US + 1–2 EU markets first" },
    { risk: "Identity mapping outside the UK", mitigation: "Build the registry with progressive coverage; select pilots where identifiers are achievable" },
    { risk: "Change management", mitigation: "Establish single ownership for portfolio/contract truth; codify 'no mutation at entry'" },
    { risk: "Client context (occupancy/production)", mitigation: "Provide both lightweight portal capture and enterprise APIs into SAP/BMS" },
  ],
  needsNow: [
    "Approve staffing: 2–3 SMEs full-time + 1 senior architect (via Dan)",
    "Approve schema v0.9, identity approach, no-mutation policy, and connector/LOA strategy",
    "Select pilot cohort (e.g., Accor in UK/US) and schedule a one-day workshop (with Jeff Floyd, Tim, Alice, Jessica, Josh, Robbie)",
  ],
};

export const timeline = {
  q1: {
    title: "Q3: Plan & Foundations",
    items: [
      "Architecture design",
      "Schema definition",
      "Identity approach",
      "Connector strategy",
      "LOA workflow design",
      "KPIs baseline",
    ],
  },
  q2: {
    title: "Q4: MVP Live",
    items: [
      "Pseudo-bill v1",
      "Adaptive invoice triage",
      "Regulatory service v1",
      "Client mini-portal",
    ],
  },
  h2: {
    title: "H2: Scale",
    items: [
      "Scale connectors",
      "Normalize offers",
      "Accelerate budgets",
      "Enhance forecasts",
      "Wire to microgrid/efficiency",
    ],
  },
};
