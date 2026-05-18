// Energy & Supply Transformation with RA+ Playbook Data

export const strategicPillars = [
  {
    id: "data-foundation",
    title: "Data Foundation",
    tagline: "Unified, global energy data platform",
    subTheme: "Unified",
    subThemeDescription: "One trusted, governed view of energy data across markets, meters, and contracts.",
    promise: "A central layer that ingests as-received interval, invoice, offer, tariff, contract data and enables automation at scale.",
    description: "Build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter/account/site keys (MPAN first, expanding to EAN/POD, etc.), and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules.",
    whatLivesHere: [
      "Centralized raw data lake with immutable storage",
      "Contract & portfolio single source of truth",
      "Identity mappings across markets (meter↔account↔site)",
      "Tariff ingestion model (ACT integration)",
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
    subTheme: "Proactive",
    subThemeDescription: "Compute pseudo-bills, budgets, forecasts, and validations ahead of invoices, not after.",
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
    subTheme: "Adaptive",
    subThemeDescription: "Absorbs new markets, retailers, and market structures through configuration — not rebuilds.",
    promise: "Once functional, RA+ can become a consultant platform: sell Managed Services capabilities as SaaS to third-party consultants globally.",
    description: "The platform can absorb new markets, retailers, and market structures through configuration. Our differentiator remains data + risk expertise and a truly global footprint and identity mapping.",
    whatLivesHere: [
      "Connector ecosystem for retailers and aggregators",
      "LOA / authorization workflow digitization",
      "Client self-serve portal for data enrichment",
      "Third-party consultant SaaS capabilities",
      "Global footprint and identity mapping",
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
      { id: "KR2", title: "Touches per bill reduction", metric: "40%", roiMetric: "Productivity gains; cost reduction" },
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
    { title: "Budget management MVP (pilot portfolio)", pillar: "data-foundation", outcome: "First real-time budget vs actuals view live for a pilot portfolio with <2-week refresh cycle", objective: "O2", kr: "KR4" },
    { title: "Complete offer PRDs", pillar: "data-foundation", outcome: "Clear requirements for offer ingestion and normalization", objective: "O3", kr: "KR7" },
    { title: "Define target data model", pillar: "data-foundation", outcome: "Schema for interval, contract, tariff, portfolio data", objective: "O3", kr: "KR7" },
    { title: "Identity mapping approach", pillar: "data-foundation", outcome: "Strategy for meter↔account↔site resolution globally", objective: "O3", kr: "KR7" },
    { title: "Frame end-to-end journey", pillar: "automation", outcome: "Documented data flow from ingestion to service delivery", objective: "O1", kr: "KR1" },
    { title: "Invoice triage rules baseline", pillar: "automation", outcome: "First automated tolerance and exception rules running on pilot accounts", objective: "O1", kr: "KR1" },
    { title: "Connector strategy design", pillar: "platform-scale", outcome: "Retailer + aggregator + Deepki-like model evaluation", objective: "O3", kr: "KR8" },
    { title: "LOA/authorization workflow", pillar: "platform-scale", outcome: "Digital LOA issuance and renewal with audit trail", objective: "O3", kr: "KR7" },
  ],
  next: [
    { title: "Centralized raw data lake", pillar: "data-foundation", outcome: "Immutable as-received data storage operational", objective: "O3", kr: "KR8" },
    { title: "Contract & portfolio single source of truth", pillar: "data-foundation", outcome: "One authoritative system for contract data", objective: "O3", kr: "KR9" },
    { title: "Tariff ingestion model", pillar: "data-foundation", outcome: "Proactive tariff data collection vs reactive", objective: "O2", kr: "KR5" },
    { title: "No-mutation-at-entry policy", pillar: "data-foundation", outcome: "Raw data preserved; transformations downstream only", objective: "O3", kr: "KR8" },
    { title: "Pseudo-bill MVP (UK or US)", pillar: "automation", outcome: "Generate pseudo-bills at D+1 for pilot market", objective: "O1", kr: "KR3" },
    { title: "Adaptive invoice variance & triage", pillar: "automation", outcome: "Automated anomaly detection and prioritization", objective: "O1", kr: "KR1" },
    { title: "Budget management v1 (multi-portfolio)", pillar: "automation", outcome: "Real-time budget and reforecast generalized across portfolios", objective: "O2", kr: "KR4" },
    { title: "First retailer connectors live", pillar: "platform-scale", outcome: "Automated ingestion from priority UK & US retailers", objective: "O3", kr: "KR8" },
    { title: "Client mini-portal for enrichment", pillar: "platform-scale", outcome: "Lightweight portal for occupancy/production data capture", objective: "O3", kr: "KR7" },
  ],
  later: [
    { title: "Global identity registry expansion", pillar: "data-foundation", outcome: "Identity coverage extended beyond UK/US to priority EU markets", objective: "O3", kr: "KR7" },
    { title: "Tariff content service", pillar: "data-foundation", outcome: "Continuous, machine-readable tariff updates feeding budgets and validation", objective: "O2", kr: "KR5" },
    { title: "Normalize offers (Codex 2.0)", pillar: "automation", outcome: "Automated sourcing workflow from offer ingestion", objective: "O1", kr: "KR2" },
    { title: "Improve forecasting (region → site)", pillar: "automation", outcome: "Site-level dynamic risk insights and forecasts", objective: "O2", kr: "KR6" },
    { title: "Integrate into RA+ modules", pillar: "automation", outcome: "Budget, Forecast, Sourcing powered by unified data", objective: "O2", kr: "KR4" },
    { title: "Expand connectors & retailer integrations", pillar: "platform-scale", outcome: "Automated data collection from major retailers globally", objective: "O3", kr: "KR7" },
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
      "Tariff content service with proactive management",
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
    metrics: ["Productivity gains", "Hours saved per cycle", "Cost per invoice processed"],
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
    metrics: ["Markets supported", "Productivity per analyst", "Third-party platform revenue"],
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
  { metric: "Productivity Gains", definition: "Operational productivity improvement", target: "30-40%" },
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
      "Tariff content service with ACT integration",
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
      "Productivity gains in operational roles",
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
      "Productivity per analyst improvement",
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
        "Tariff content service",
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
        "Productivity gains in operational roles",
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
        "Productivity per analyst improvement",
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
      "Contract, portfolio, tariff, and account data scattered across ACT, CBMS, RA Classic, RA+, spreadsheets, retailer sites, and internal teams",
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
  { name: "Taxes + Riders", description: "Charges and levies" },
  { name: "Tariffs Data", description: "ACT today, future rates" },
  { name: "Portfolio Data", description: "Sites, meters, accounts mapping" },
  { name: "Forecast Data", description: "Load and price projections" },
];

export const optionalClientContext = [
  { name: "Occupancy", description: "Building occupancy patterns" },
  { name: "Production", description: "Manufacturing/operational data" },
];

export const existingTools = [
  { name: "IDM", description: "Scraping-based interval collection", limitation: "Works in UK; fails elsewhere" },
  { name: "ACT", description: "Tariff calculator", limitation: "Manual maintenance" },
  { name: "CBMS", description: "Managed Services operations", limitation: "Fragmented workflows" },
  { name: "RA Classic", description: "Budget calculation (digitized interface)", limitation: "Legacy integration" },
  { name: "IDP / Blair Agent", description: "Invoice capture from PDFs/images", limitation: "Accuracy varies" },
  { name: "Variance Check Agent", description: "Gas, NA variance detection", limitation: "~15-20% accuracy improvement only" },
];

export const marketConstraints = [
  "Retailers are not obligated to share interval or invoices quickly",
  "Interval data availability varies widely by country",
  "Market identifiers like MPAN (UK) don't exist in many regions",
  "Tariff data is numerous, volatile, and maintained manually",
  "LOA / authorization flows must be digitized for global data access",
  "May need to replicate or partner with connector ecosystems like Deepki",
];

export const executiveNarrative = {
  whatsHappening: "Clients are navigating the most challenging energy landscape in a generation: surging demand, constrained grids, geopolitical price shocks, decarbonization mandates, and rising expectations for AI-driven optimization. At the same time, our managed services business carries significant operating cost because we lack a single, authoritative way to ingest, standardize, and use the data that powers every offer—budgeting, invoice validation, sourcing, risk management, accruals, and PPA advisory. Teams spend outsized time reconciling interval, contract, invoice, tariff, and offer data across thousands of formats and retailer portals. The result: long budget cycles (~8 weeks), a long invoice validation queue, and duplicated portfolio work across multiple teams.",
  trueProblem: "The challenge is not the service logic; it's the data foundation. Clients want integrated answers across decarbonization, cost, and resilience—but our ability to deliver at speed and scale is throttled by data fragmentation. When interval and contract data are available and cleanly mapped to sites/accounts, we can compute what a bill should be and automate downstream workflows. Where we struggle is identity mapping and fragmented ingestion—and both directly erode trust in the invoice validation queue. Without a reliable meter↔account↔site registry, invoices can't be matched to the right contract or consumption baseline, so legitimate charges look like exceptions and real anomalies get buried in noise. Fragmented ingestion compounds the issue: the same invoice may arrive through different portals, formats, or feeds with inconsistent fields, creating duplicates, gaps, and silent overwrites that corrupt the queue on entry. Add market delays (D+15) and analysts end up re-checking data they should be able to trust by default—turning validation into manual reconciliation rather than true exception management.",
  northStar: "Make RA+ the single, trusted source of energy truth for our clients and our teams. One place where every meter, site, contract, and invoice ties together cleanly—so budgets, sourcing decisions, invoice checks, and risk answers come out fast, consistent, and easy to defend. Clients get clearer answers on cost, decarbonization, and resilience; our experts spend their time on judgment and advice instead of chasing and reconciling data.",
  pragmaticWay: "We'll 'do more with less': start with Interval + Contract + Tariffs to generate pseudo-bills at D+1 (end of month), then reconcile with the retailer's invoice when it arrives. This avoids the D+15 market dependency and eliminates today's brittle tolerance checks. Adding weather (easy) and optional occupancy/production (via portal or API) dramatically reduces false positives. We will also stop mutating invoice data at entry—transformations will only happen downstream, with lineage.",
  economicImpact: [
    "Reduce the invoice validation backlog by 50%+ and lower touches per bill by 40%",
    "Cut the budget cycle to <2 weeks for pilot portfolios, with further reduction to <1 week as coverage expands",
    "Improve dispute accuracy, enable earlier detection of anomalies, and unlock near-real-time actions for Efficiency/Microgrid",
  ],
  strategicUpside: "Once the platform is operating reliably, RA+ powers not only our services but also third-party consultants globally—a step-change in TAM similar to how Octopus commercialized Kraken for utilities. Combined with our experts-plus-software model, integrated offer across utility bill management, procurement, risk, and decarbonization execution, and a truly global footprint and identity mapping, we widen the gap on competitors who lead with consultancy alone or software alone.",
  risks: [
    { risk: "Connector coverage & LOA complexity", mitigation: "Partner where it's faster; digitize LOA issuance/renewals with audit trail; prioritize UK/US + 1–2 EU markets first" },
    { risk: "Identity mapping outside the UK", mitigation: "Build the registry with progressive coverage; select pilots where identifiers are achievable" },
    { risk: "Change management", mitigation: "Establish single ownership for portfolio/contract truth; codify 'no mutation at entry'" },
    { risk: "Client context (occupancy/production)", mitigation: "Provide both lightweight portal capture and enterprise APIs into SAP/BMS" },
  ],
  needsNow: [
    "Launch the first governance call to anchor the strategy",
    "Set ambitions for 2026 and define short and mid-term roadmap",
    "Schedule a couple of days workshop with cross-functional leads from data ops, risk, sourcing, and analytics",
  ],
};

export const timeline = {
  q1: {
    title: "Q4: Plan & Foundations",
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
    title: "Q1 2027: MVP Live",
    items: [
      "Pseudo-bill v1",
      "Adaptive invoice triage",
      "Tariff service v1",
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

export const marketDynamics = {
  intro: "Clients face the most challenging energy landscape in a generation. These pressures define where managed services and the platform must deliver.",
  forces: [
    {
      id: "demand-grid",
      title: "Demand Surge & Grid Strain",
      description: "Global electricity demand is surging while grids and transmission are constrained, creating procurement complexity and reliability risk for every region.",
      icon: "Zap",
    },
    {
      id: "price-volatility",
      title: "Price Volatility & Supply Shocks",
      description: "Geopolitical events and commodity swings are pushing energy budgets under immediate pressure. Capacity and peak-demand charges are now dominant cost drivers.",
      icon: "TrendingUp",
    },
    {
      id: "portfolio-procurement",
      title: "Integrated Portfolio Procurement",
      description: "Sophisticated buyers want physical supply, PPAs, EACs, budgets, and bill management viewed together over time and scenario-tested against market risk.",
      icon: "Layers",
    },
    {
      id: "digitization",
      title: "Digitization & AI Expectations",
      description: "Clients now expect AI-driven load optimization, automated tendering, SaaS portfolio management, real-time scenario analysis, and automated invoice intake.",
      icon: "Sparkles",
    },
    {
      id: "decarbonization",
      title: "Decarbonization Mandates",
      description: "Scope 2 commitments, clean electricity targets, and tax credit opportunities are accelerating demand for execution—matching every kWh to a verified low-carbon source, not just advisory.",
      icon: "Leaf",
    },
    {
      id: "resilience",
      title: "Resilience & Continuity",
      description: "Energy resilience is no longer optional. Clients need supply risk modeling, continuity planning, and on-site generation strategies to absorb shocks.",
      icon: "Shield",
    },
  ],
};

export const competitiveLandscape = {
  intro: "Serious players exist across the value chain. Our differentiator is experts supported by software—pairing global advisory depth with automation and AI at scale.",
  positioning: "Not just a consultancy. Not just a platform. A unified offer that combines deep advisory, global delivery, and a data + automation platform that compounds value with every client.",
  competitors: [
    {
      name: "Energy Impact",
      scope: "Global",
      strength: "Full utility bill management lifecycle for 14,500+ customers, including payments and workflow execution.",
    },
    {
      name: "NUS Consulting",
      scope: "Global",
      strength: "90 years of multi-geography energy expertise across 19 offices and complex market environments.",
    },
    {
      name: "Trio (Edison Energy)",
      scope: "Global",
      strength: "Locked-in enterprise relationships with comprehensive software and advisory.",
    },
    {
      name: "South Pole",
      scope: "Renewables",
      strength: "Dominant position in corporate sustainability programs and decarbonization advisory.",
    },
    {
      name: "Ameresco",
      scope: "Regional",
      strength: "Comprehensive supply management and utility bill processing across North America.",
    },
  ],
  differentiators: [
    "Experts + software + AI working together as collaborative intelligence",
    "Truly global footprint with regional market depth and local language coverage",
    "Integrated offer across utility bill management, procurement, risk, and decarbonization execution",
    "Industrialized data operations: 20B+ data points per year, 1,500+ unique custom integrations",
    "Largest energy buyer in the world—unmatched supplier intelligence and negotiating leverage",
  ],
};

export const clientTriggers = [
  {
    id: "decarb",
    trigger: "We need to meet our carbon commitments",
    response: "Renewable energy procurement (PPAs, VPPAs, EACs), tax credit transfers, and supply chain decarbonization programs.",
    icon: "Leaf",
  },
  {
    id: "cost",
    trigger: "Energy costs are rising faster than expected",
    response: "Risk-managed procurement strategies with layered hedging, market intelligence, forecasting, and utility bill management for visibility and control.",
    icon: "TrendingDown",
  },
  {
    id: "resilience",
    trigger: "We are worried about supply resilience",
    response: "Energy supply consulting assessments, supply risk modeling, continuity plans, and on-site generation and backup strategies.",
    icon: "Shield",
  },
];

// Integrated service catalog — the COE's full service surface
export const serviceCatalog = {
  intro:
    "An integrated set of service lines delivered as one practice — clients enter at one door and unlock the full surface as their needs evolve.",
  services: [
    {
      id: "advisory",
      title: "Strategic Energy Advisory",
      tagline: "Set the strategy, prove the business case",
      description:
        "Decarbonization roadmaps, net-zero strategy, scenario modeling, target setting, and board-level reporting tied to financial outcomes.",
      offerings: [
        "Decarbonization & net-zero roadmaps",
        "Scope 1/2/3 baseline & target setting",
        "Climate risk & scenario analysis",
        "Board-ready disclosures (CSRD, SEC, CDP)",
      ],
      icon: "Compass",
    },
    {
      id: "sourcing",
      title: "Sourcing & Procurement",
      tagline: "Buy energy smarter, hedge with intent",
      description:
        "Risk-managed procurement across retail supply, PPAs, VPPAs, EACs, and tax credit transfers — globally orchestrated, locally executed.",
      offerings: [
        "Retail supply sourcing & contracting",
        "PPA / VPPA structuring & negotiation",
        "EAC & RECs portfolio strategy",
        "Tax credit transfers & monetization",
      ],
      icon: "ShoppingCart",
    },
    {
      id: "managed-services",
      title: "Managed Services",
      tagline: "Run the day-to-day, free the client to lead",
      description:
        "Utility bill management, invoice validation, budgeting, accruals, and reporting — automated where possible, expert-handled where it matters.",
      offerings: [
        "Utility bill management & validation",
        "Budgeting, forecasting & accruals",
        "Tariff monitoring",
        "Portfolio reporting & analytics",
      ],
      icon: "Settings",
    },
    {
      id: "sustainability",
      title: "Sustainability Programs",
      tagline: "Operationalize the commitment",
      description:
        "Supply chain decarbonization, efficiency programs, renewable execution, and sustainability data infrastructure that holds up under audit.",
      offerings: [
        "Supply chain & Scope 3 programs",
        "Energy efficiency & retrofits",
        "On-site & off-site renewables execution",
        "Sustainability data & assurance readiness",
      ],
      icon: "Leaf",
    },
    {
      id: "resilience",
      title: "Resilience & On-Site",
      tagline: "Keep the lights on, on your terms",
      description:
        "Supply risk modeling, continuity planning, microgrids, on-site generation, storage, and demand response to harden operations.",
      offerings: [
        "Supply risk & continuity assessments",
        "Microgrid & on-site generation design",
        "Battery storage & demand response",
        "Backup strategy & critical-load planning",
      ],
      icon: "Shield",
    },
    {
      id: "data-tech",
      title: "Data & Technology",
      tagline: "The platform under everything",
      description:
        "RA+ unified data platform, agentic AI assistants, and connectors that make every other service faster, cheaper, and more accurate.",
      offerings: [
        "RA+ platform & analytics",
        "Agentic AI (Vera, Blair, Codex)",
        "Retailer & aggregator connectors",
        "Identity registry & data governance",
      ],
      icon: "Database",
    },
  ],
};

// Operating model — experts supported by software / collaborative intelligence
export const operatingModel = {
  intro:
    "We are not a software vendor and we are not a pure consultancy. We are experts supported by software — humans on point for judgment, software on point for scale.",
  layers: [
    {
      id: "expertise",
      title: "Expert Practitioners",
      role: "Judgment, strategy, client relationships",
      description:
        "Senior advisors, traders, sustainability strategists, and managed-services leads who own the outcome and the conversation.",
      icon: "Users",
    },
    {
      id: "agents",
      title: "Agentic AI Assistants",
      role: "Co-pilots that compress hours into seconds",
      description:
        "Vera (advisory), Blair (invoice intelligence), Codex (sourcing) — purpose-built agents that draft, validate, and explain so experts focus on decisions.",
      icon: "Bot",
    },
    {
      id: "automation",
      title: "Automation Engine",
      role: "Lights-out execution at scale",
      description:
        "Pseudo-bills, validations, budgets, forecasts, and reporting generated automatically from interval, contract, and tariff data.",
      icon: "Zap",
    },
    {
      id: "platform",
      title: "Unified Data Platform",
      role: "One source of truth, globally",
      description:
        "RA+ ingests as-received data, resolves identity across markets, and exposes APIs that power every service line and every agent.",
      icon: "Database",
    },
  ],
  principles: [
    "Software absorbs the repeatable work; experts own the judgment calls",
    "Every service line shares the same data spine — no swivel-chair handoffs",
    "Agents are accountable to humans; humans are accountable to clients",
    "Automation targets 90%+ of managed-services touches over the horizon",
  ],
};

// Engagement plays — how clients enter and expand
export const engagementPlays = {
  intro:
    "Clients rarely buy the full practice on day one. They enter through a sharp, urgent problem — and expand as we earn the right to do more.",
  stages: [
    {
      id: "entry",
      stage: "Entry",
      title: "Land on a sharp pain",
      examples: [
        "Utility bill chaos across hundreds of sites",
        "Net-zero commitment with no credible path",
        "PPA decision pending, no in-house expertise",
        "Energy budget blew up; CFO wants answers",
      ],
      typicalServices: ["Managed Services", "Strategic Advisory", "Sourcing"],
      icon: "DoorOpen",
    },
    {
      id: "prove",
      stage: "Prove",
      title: "Deliver visible wins in 90 days",
      examples: [
        "Validated bills with recovered overcharges",
        "Decarb roadmap signed off by the board",
        "PPA executed at favorable terms",
        "Real-time budget vs actuals dashboard live",
      ],
      typicalServices: ["RA+ deployment", "Vera/Blair onboarding", "Quick-win audits"],
      icon: "Target",
    },
    {
      id: "expand",
      stage: "Expand",
      title: "Connect adjacent services",
      examples: [
        "Add sourcing to existing managed services",
        "Layer sustainability reporting onto bill management",
        "Bring resilience planning into procurement scope",
        "Roll out from one region to global portfolio",
      ],
      typicalServices: ["Sustainability Programs", "Resilience", "Multi-region rollout"],
      icon: "Network",
    },
    {
      id: "embed",
      stage: "Embed",
      title: "Become the energy operating system",
      examples: [
        "Multi-year managed services contract",
        "Embedded advisory at exec/board level",
        "RA+ as the client's system of record for energy",
        "Joint roadmap for decarb + cost + resilience",
      ],
      typicalServices: ["Full COE engagement", "Strategic partnership", "Platform-as-service"],
      icon: "Anchor",
    },
  ],
};

// Energy & Supply Transformation: Managed Services Classic vs RA+
export const energySupplyTransformation = {
  intro:
    "Today's Managed Services depend on manual workflows, fragmented data sources, and bespoke tooling per client. RA+ collapses those workflows into a single agentic platform where Sera operates the service. This is the shift from people-driven managed services to platform-driven Energy & Supply operations.",
  classic: {
    title: "Managed Services Today",
    tagline: "People-driven, fragmented",
    points: [
      "Analysts manually collect, reconcile, and reformat data across hundreds of sources",
      "Bespoke spreadsheets and tools per client, no shared spine",
      "Bill validation, sourcing, and sustainability reporting run as separate workstreams",
      "Insights surface only at monthly or quarterly cadence",
      "Service quality scales linearly with effort, not with platform leverage",
    ],
  },
  raPlus: {
    title: "Energy & Supply on RA+",
    tagline: "Platform-driven, agentic",
    points: [
      "One unified data model across bills, meters, contracts, and emissions",
      "Sera automates ingestion, validation, anomaly detection, and reporting",
      "Sourcing, sustainability, resilience, and bill management share the same spine",
      "Near-real-time signals replace monthly reconciliations",
      "Service capacity scales with the platform, not with effort",
    ],
  },
  thesis:
    "Every cost pressure in Managed Services stems from manual, fragmented workflows. RA+ replaces those workflows with a shared agentic platform, freeing experts to focus on advisory and outcomes.",
  bureauAnchor: {
    title: "What Managed Services Delivers Today",
    subtitle: "Global Energy & Supply operations across thousands of client sites",
    lines: [
      {
        layer: "Foundation",
        name: "Data Operations & Bill Management",
        detail:
          "Ingestion, validation, and reconciliation across utility bills, meters, and contracts. Highest manual effort, highest automation upside.",
      },
      {
        layer: "Accelerator",
        name: "Sourcing & Supply Strategy",
        detail:
          "Procurement execution, contract management, and market intelligence. RA+ turns playbooks into reusable agentic flows.",
      },
      {
        layer: "Feedback Loop",
        name: "Sustainability & Performance Reporting",
        detail:
          "Audit-grade reporting that closes the loop between sourcing, consumption, and decarbonization outcomes.",
      },
    ],
    soWhat:
      "RA+ digitizes all three layers. Data Operations becomes a platform capability. Sourcing playbooks become agentic flows. Reporting becomes native to the platform. Managed Services capacity shifts from manual reconciliation to higher-value advisory.",
  },
  productScope: {
    intro:
      "RA+ organizes Energy & Supply capabilities into two complementary scopes. This playbook covers the Managed Services automation scope. Advisory & strategic engagements remain a distinct discipline that consumes the same platform.",
    products: [
      {
        name: "Managed Services Automation",
        tag: "This Playbook",
        summary:
          "The daily-run service. Bill validation, data operations, sourcing execution, sustainability reporting, and operational anomaly response — all delivered through RA+ and Sera.",
        capabilities: [
          "Automated bill ingestion, validation, and dispute workflows",
          "Unified data quality, gap detection, and audit trails",
          "Sourcing execution playbooks operated via Sera",
          "Sustainability and emissions reporting native to RA+",
          "Anomaly detection across consumption, cost, and contracts",
          "Self-serve onboarding for new sites and utilities",
        ],
      },
      {
        name: "Advisory & Strategic Engagements",
        tag: "Adjacent",
        summary:
          "The expert-led scope. Decarbonization strategy, resilience planning, and complex sourcing strategy delivered by COE experts using RA+ as the substrate.",
        capabilities: [
          "Decarbonization roadmaps and Scope 2 strategy",
          "Resilience and risk-management planning",
          "Complex multi-region sourcing strategy",
          "Executive advisory and board-level reporting",
        ],
      },
    ],
    boundary:
      "These scopes are operationally distinct but technically unified. RA+ ensures advisory experts and managed services teams work from the same data spine, with the same agentic capabilities.",
  },
};
