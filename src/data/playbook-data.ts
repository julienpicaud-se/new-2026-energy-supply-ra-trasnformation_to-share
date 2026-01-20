// 2026 Product Roadmap Playbook Data

export const strategicPillars = [
  {
    id: "unified",
    title: "Unified",
    tagline: "One platform, no silos",
    promise: "One platform and one governed data foundation across carbon, ESG, supply chain, and risk, reducing duplication and deployment cost.",
    description: "Customers experience a single platform across carbon, ESG, energy, supply chain, and climate risk instead of disconnected tools. Data models, hierarchies, and permissions are defined once and reused in every product area, so work in one place strengthens the whole ecosystem.",
    whatLivesHere: [
      "Enterprise organization model, groups, and delegated admin",
      "Shared sustainability graph and semantic models that connect inventories, strategy, analytics, disclosures, and risk",
      "Cross-product navigation and integrations with RA classic, Zeigo, ERPs, and other systems",
      "Ingest and transform services that standardize core data into governed models",
    ],
    successMetrics: [
      "% customers using multiple products on a single org and data model",
      "Reduction in duplicate data feeds, re-created hierarchies, and shadow spreadsheets",
      "Reduction in onboarding and integration effort through standardized integration packs and AI-assisted mapping",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "proactive",
    title: "Proactive",
    tagline: "Trusted insights that drive decisions",
    promise: "Faster, better decisions through decision-ready, defensible insights that connect sustainability data to financial and operational outcomes.",
    description: "Users get clear answers they can act on and defend to auditors, finance, and executives, not just visualizations. Every metric or recommendation is backed by governed data, transparent calculations, and full lineage.",
    whatLivesHere: [
      "Inventory and strategy capabilities: hotspots, targets, scenarios, initiative impact, and financial views",
      "Analytics: data explorer, dashboards, benchmarking, anomaly detection, and explanations that show why trends and outliers matter",
      "Disclosure alignment so narrative and quantitative reporting stay tied to the same underlying inventory, strategy, and risk data",
    ],
    successMetrics: [
      "Time from updated data to key decisions such as initiative approval or budget shifts, including the share accelerated or supported by AI recommendations",
      "Adoption of analytics and strategy features, including AI-assisted exploration and insights",
      "Share of customers with targets, scenarios, and initiatives that cover most of their emissions footprint",
      "Measured OpEx savings captured and tracked through initiatives and reported back to finance",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "adaptive",
    title: "Adaptive",
    tagline: "Built for change with AI at the core",
    promise: "An AI-native and configurable platform that absorbs regulatory, organizational, and methodological change while continuously reducing manual effort.",
    description: "The platform can absorb new regulations, frameworks, scopes, risk methodologies, and org structures through configuration. AI is part of the core design so manual work is automated, guidance improves over time, and agentic workflows can take action with human control.",
    whatLivesHere: [
      "Configurable reference data and emission factor services that support new datasets and methodologies",
      "Flexible entity and hierarchy modeling that can represent acquisitions and alternative views",
      "AI and agentic capabilities such as SERA and product agents for onboarding, EF mapping, gap-filling, anomaly investigation, recommendations, and disclosure drafting",
      "AI quality system: evaluation harness, feedback loops, and traceability of AI outputs",
    ],
    successMetrics: [
      "Lead time to support new regulatory or framework requirements",
      "% of new use cases delivered via configuration patterns",
      "Share of key workflows completed with AI assistance and the time saved",
      "Adoption and acceptance rate of AI recommendations",
      "Reduction in time and cost to adopt new requirements and onboard new entities",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];

export const objectives = [
  {
    id: "O1",
    title: "Deliver decision-ready sustainability management for ECP customers",
    linkedPillar: "proactive",
    customerOutcome: "Customers can complete inventory, prioritize cost and carbon hotspots, create targets and scenarios, and run governance with defensible numbers.",
    businessValue: "Faster audit-ready baseline and decisions; lower reporting cost and faster savings identification.",
    keyResults: [
      { id: "KR1", title: "Median time to first audit-ready Scope 1-3 inventory", metric: "TBD", roiMetric: "Hours saved to baseline; consulting spend avoided" },
      { id: "KR2", title: "% customers approving at least one plan (target and scenario)", metric: "TBD", roiMetric: "OpEx saved identified and tracked; initiatives with NPV" },
      { id: "KR3", title: "% customers with recurring dashboard usage (active dashboards)", metric: "TBD", roiMetric: "Decisions accelerated; governance forums using dashboards" },
      { id: "KR4", title: "% audit questions answered with in-platform evidence and lineage", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR5", title: "% inventories meeting data quality threshold (completeness, variance, dedup)", metric: "TBD", roiMetric: "Time saved or cost saved" },
    ],
  },
  {
    id: "O2",
    title: "Make enterprise rollout repeatable across regions and business units",
    linkedPillar: "unified",
    customerOutcome: "Customers can deploy standard setups consistently using governed patterns, reducing onboarding effort and variability.",
    businessValue: "Lower onboarding cost and faster enterprise rollouts; fewer custom integrations and less operational overhead.",
    keyResults: [
      { id: "KR6", title: "Time to roll out a new BU/region to operational (data + views + governance)", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR7", title: "% reduction in manual data uploads and spreadsheet handoffs", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR8", title: "% reduction in duplicate data feeds across workflows", metric: "TBD", roiMetric: "Time saved or cost saved" },
    ],
  },
  {
    id: "O3",
    title: "Make AI a default accelerator in key journeys",
    linkedPillar: "adaptive",
    customerOutcome: "AI reduces manual work and improves decision speed across inventory, planning, analytics, and reporting support, with clear human control and traceability.",
    businessValue: "Lower manual effort across journeys; higher data quality; faster time-to-value with agentic workflows.",
    keyResults: [
      { id: "KR9", title: "% key workflows completed with AI assistance", metric: "TBD", roiMetric: "% workflows with AI assist; median time saved" },
      { id: "KR10", title: "Hours saved per reporting cycle per customer", metric: "TBD", roiMetric: "Time saved or cost saved" },
      { id: "KR11", title: "AI recommendation acceptance rate (suggestions applied by users)", metric: "TBD", roiMetric: "% workflows with AI assist; median time saved" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "One platform setup reused across workflows", pillar: "unified", outcome: "% customers running cross-product workflows without duplicating setup", objective: "O2", kr: "KR6" },
    { title: "Decision-grade dataset from ingest + transform", pillar: "unified", outcome: "Time to first decision-grade dataset", objective: "O1", kr: "KR1" },
    { title: "Audit-ready Scope 1-3 inventory in weeks", pillar: "proactive", outcome: "Time to first audit-ready Scope 1-3 inventory", objective: "O1", kr: "KR1" },
    { title: "Targets, baseline, and pathway comparison adopted", pillar: "proactive", outcome: "% customers approving at least one plan", objective: "O1", kr: "KR2" },
    { title: "Recurring governance usage via analytics views", pillar: "proactive", outcome: "% customers with recurring dashboards", objective: "O1", kr: "KR3" },
    { title: "Guided help reduces friction and speeds task completion", pillar: "adaptive", outcome: "% key workflows completed with AI assistance", objective: "O3", kr: "KR9" },
  ],
  next: [
    { title: "Defensible outputs with end-to-end lineage", pillar: "proactive", outcome: "% audit questions answered with evidence and lineage", objective: "O1", kr: "KR4" },
    { title: "Less rework per cycle with remembered mapping decisions", pillar: "adaptive", outcome: "Hours saved per reporting cycle per customer", objective: "O3", kr: "KR10" },
    { title: "Reduced manual uploads with priority connectors", pillar: "unified", outcome: "% reduction in manual data uploads", objective: "O2", kr: "KR7" },
    { title: "Reliable Scope 3 completion via gap-filling", pillar: "adaptive", outcome: "% customers reaching reportable Scope 3 completion", objective: "O1", kr: "KR1" },
    { title: "Budget-grade planning with approvals and financial views", pillar: "proactive", outcome: "Time from updated data to approved initiatives", objective: "O1", kr: "KR2" },
    { title: "AI-guided onboarding accelerates time to first value", pillar: "adaptive", outcome: "Time to first inventory completion with AI guidance", objective: "O3", kr: "KR9" },
  ],
  later: [
    { title: "Repeatable enterprise rollouts using integration packs and configuration recipes", pillar: "unified", outcome: "Time to roll out a new BU/region", objective: "O2", kr: "KR6" },
    { title: "Fast support for new datasets and methods without disruption", pillar: "adaptive", outcome: "Lead time to support a new requirement", objective: "O2", kr: "KR6" },
    { title: "Prescriptive planning recommendations adopted", pillar: "adaptive", outcome: "% customers adopting recommended actions", objective: "O3", kr: "KR11" },
    { title: "Always-on anomaly detection and explanations", pillar: "proactive", outcome: "Time to detect and explain material variance", objective: "O1", kr: "KR3" },
    { title: "Auditor-ready report packs produced faster", pillar: "proactive", outcome: "Time to produce an auditor-ready report pack", objective: "O1", kr: "KR1" },
    { title: "Baseline climate risk insights integrated into governance views", pillar: "proactive", outcome: "% customers reviewing climate risk insights quarterly", objective: "O1", kr: "KR3" },
  ],
};

export const domainInitiatives = [
  {
    domain: "Platform",
    initiatives: [
      "Trusted data foundation with governed store",
      "Dynamic org and entity model v1",
      "Ingest and transform core data pipelines",
      "EF library v1 and automated EF matching",
      "Agentic platform foundation",
      "End-to-end lineage v1",
      "Connector expansion for highest leverage sources",
      "Workflow and approvals enablement",
    ],
  },
  {
    domain: "Emissions Measurement",
    initiatives: [
      "Ingest and transform UX v1 (templates, validation, transformation preview)",
      "Scope 1-3 calculation engine (MLP coverage)",
      "Data quality toolkit v1",
      "EF matching UX and governance touchpoints",
      "Scope 3 gap-filling (prioritized slices)",
      "Mapping precedence UX and workflows",
      "Coverage expansion for prioritized datasets and methods",
      "Expanded emissions measurement to sustainability performance (broader activity data, reuse across domains)",
    ],
  },
  {
    domain: "Strategy",
    initiatives: [
      "Targets, BAU baseline, and scenarios v1",
      "Initiative library and financial analysis (capex, opex, NPV)",
      "Approvals expansion for targets, scenarios, and initiatives",
      "Prescriptive planning with AI recommendations",
      "Emissions carbon strategy and scenarios",
    ],
  },
  {
    domain: "Analytics",
    initiatives: [
      "Data explorer and dashboards v1 (share, export)",
      "Templates and reuse (standard governance views)",
      "Why this number (evidence and lineage)",
      "Proactive anomalies and root-cause explanations with SERA",
    ],
  },
  {
    domain: "Disclosures",
    initiatives: [
      "Disclosure workflow and reviewer collaboration",
      "Audit evidence and traceability",
      "Framework alignment and updates",
      "AI-assisted disclosure drafting",
    ],
  },
  {
    domain: "Supply Chain",
    initiatives: [
      "Reduce friction in supplier migrations",
      "AI auto-filler for suppliers (60% fields auto-filled)",
      "Zeigo + RA+ campaign integration",
      "ZCP integrations (50% data via integrations)",
      "AI pre-invitation analytics and prioritization",
      "RA+ emissions measurement (reduce duplicate uploads)",
      "AI-powered take-action page",
      "SERA integration across supplier journeys",
    ],
  },
  {
    domain: "SERA & Agentic AI",
    initiatives: [
      "SERA integration across workflows",
      "AI-guided onboarding",
      "Anomaly explanations and guided investigation",
      "AI acceleration support with acceptance tracking",
    ],
  },
  {
    domain: "Climate Risk",
    initiatives: [
      "Trusted data and auditability ingestion",
      "Self-serve risk insights dashboards",
      "Climate risk integrated with Compliance & Reporting",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Productivity & Assurance",
    description: "Fewer hours and less consulting spend to produce audit-ready baselines and disclosures",
    metrics: ["Hours saved per cycle", "Consulting spend avoided", "Assurance findings down"],
    icon: "Clock",
  },
  {
    lever: "Operational Cost Reduction",
    description: "Identify hotspots and prioritize initiatives that reduce energy, travel, materials, and supplier costs",
    metrics: ["OpEx saved", "Payback and NPV", "Footprint covered by initiatives"],
    icon: "TrendingDown",
  },
  {
    lever: "Capital Allocation",
    description: "Compare scenarios and initiatives by cost and carbon to invest in the highest ROI actions",
    metrics: ["Initiatives approved with NPV", "Budget reallocated", "Time to approval"],
    icon: "BarChart3",
  },
  {
    lever: "Risk & Resilience",
    description: "Avoid penalties and reduce disruption by staying ahead of regulations and climate risks",
    metrics: ["Time to comply with new requirements", "Risk exposure reduced", "Audit exceptions down"],
    icon: "Shield",
  },
];

export const aiScorecard = [
  { metric: "Assist Rate", target: "≥ 60%", description: "AI actually used in key workflows" },
  { metric: "Acceptance Rate", target: "≥ 70%", description: "Trust in AI outputs - users apply suggestions" },
  { metric: "Hallucination Rate", target: "< 1%", description: "Risk control - incorrect AI outputs" },
  { metric: "Time Saved", target: "≥ 25%", description: "Productivity gain vs. manual workflows" },
];

export const startStopMatrix = {
  delivery: {
    theme: "Platform Delivery",
    stop: "Bespoke, customer-specific workflows that do not scale",
    start: "Platform-first delivery using reusable configuration patterns",
  },
  data: {
    theme: "Data Foundation",
    stop: "Fragmented data models, spreadsheets, and manual reconciliation",
    start: "One governed sustainability data model with lineage and reuse",
  },
  product: {
    theme: "Product Strategy",
    stop: "Feature-first roadmap decisions",
    start: "Value-driven bets tied to cost levers and proof metrics",
  },
  ai: {
    theme: "AI Execution",
    stop: "AI shipped without adoption or trust",
    start: "AI orchestration with explicit trust, usage, and time-saved metrics",
  },
  cost: {
    theme: "Cost Impact",
    stop: "Sustainability treated as a reporting overhead",
    start: "Sustainability positioned as an operational cost-reduction lever",
  },
  gtm: {
    theme: "Go-to-Market",
    stop: "Selling isolated products or custom demos",
    start: "Selling a unified platform anchored on value drivers and journeys",
  },
  governance: {
    theme: "Governance",
    stop: "Reactive audits and post-hoc fixes",
    start: "Audit-ready governance built in and run continuously",
  },
  prioritization: {
    theme: "Prioritization",
    stop: "Static priorities and ad-hoc trade-offs",
    start: "RICE-based prioritization, re-scored quarterly against outcomes",
  },
};

export const northStarMetrics = [
  { metric: "Time to Baseline", target: "Weeks", description: "Time from first data to audit-ready Scope 1-3 inventory" },
  { metric: "Time to Plan", target: "Days", description: "Time to approved plan with clear cost and impact" },
  { metric: "Time to Governance View", target: "Hours", description: "Dashboard used in a recurring governance forum" },
];

export const valuePillars = [
  { 
    title: "Transformation", 
    icon: "Rocket", 
    description: "Automate ingestion, mapping, validation, and disclosure drafting so teams focus on action, not reporting" 
  },
  { 
    title: "Savings", 
    icon: "PiggyBank", 
    description: "Turn sustainability data into quantified cost levers across energy, travel, procurement, and materials" 
  },
  { 
    title: "Risk Reduction", 
    icon: "Shield", 
    description: "Built-in evidence, lineage, and governed calculations that stand up to audit and finance review" 
  },
  { 
    title: "Speed", 
    icon: "Zap", 
    description: "Faster baselines, quicker scenario comparison, and AI-supported approvals and budget shifts" 
  },
];

export const strategicContext = {
  summary: "Enterprises are operating in a constrained economic environment where sustainability investments must deliver clear financial returns alongside environmental impact. This roadmap positions our AI-native sustainability management platform as a repeatable engine for cost reduction, productivity gains, and risk control.",
  northStar: "Make sustainability a source of faster decisions, lower cost, and measurable savings. Powered by AI on one unified platform.",
};

export const supportingScorecard = [
  { metric: "Platform Unification", definition: "% customers running cross-product workflows without duplicating setup or data feeds" },
  { metric: "Inventory Speed", definition: "Median time to first audit-ready Scope 1-3 inventory" },
  { metric: "Decision Adoption", definition: "% customers approving at least one plan (target and scenario)" },
  { metric: "Analytics Usage", definition: "% customers with recurring analytics usage (active dashboards)" },
  { metric: "Adaptivity", definition: "Time to support a new requirement (dataset, method, or regulatory datapoint)" },
  { metric: "Effort Reduction", definition: "Support tickets per customer per month (down)" },
];

export const roiScorecard = [
  { metric: "Time Saved", definition: "Manual effort reduction", target: "8,000-10,000 hours" },
  { metric: "Cost Avoided", definition: "Audit & compliance rework", target: "$400k-$500k" },
  { metric: "Savings Identified", definition: "Energy, travel, procurement", target: "$1.2M-$1.5M" },
  { metric: "Savings Realized", definition: "Validated customer value", target: "$1.5M" },
];

export const executiveTakeaway = {
  summary: "The 12-month roadmap is designed to ensure sustainability management delivers measurable operational and financial value, especially in a constrained economic environment.",
  conclusion: "By unifying the platform, elevating insights into decisions, and embedding AI at the core of execution, the roadmap positions sustainability as a repeatable source of efficiency, savings, and risk reduction, not a compliance obligation.",
};

export const appendixPillars = [
  {
    pillar: "Unified",
    focus: [
      "Consolidate shared components, data models, and workflows across all RA+ products",
      "Reduce duplication across supplier, emissions, and reporting journeys",
      "Improve reliability, performance, and regional access to support enterprise-scale deployment",
    ],
    outcomes: [
      "Faster and more consistent rollout across regions and business units",
      "Reduced reporting effort and operational friction",
      "Lower risk from fragmented tools and inconsistent data",
    ],
    themes: [
      "Platform migrations and shared components",
      "Aligned emissions management workflows across RA+ Emissions Measurement and Supply Chain",
      "Performance, scalability, and access improvements",
      "Progressive rebranding and navigation consistency",
    ],
    valueProof: [
      "Reduction in support tickets and rework",
      "Shorter time to complete core workflows",
      "Fewer duplicate uploads and manual reconciliations",
    ],
  },
  {
    pillar: "Proactive",
    focus: [
      "Enable customers to move from measurement to defensible decisions and actions",
      "Prioritize insights that directly support cost reduction, procurement decisions, and governance",
      "Strengthen the link between sustainability metrics and financial outcomes",
    ],
    outcomes: [
      "Faster identification of savings opportunities",
      "Clear prioritization of high-impact suppliers, products, and initiatives",
      "Increased confidence with finance, auditors, and executive stakeholders",
    ],
    themes: [
      "AI-driven supplier prioritization",
      "Spend-based allocation and classification",
      "Integrated emissions measurement across supply chain and inventory",
      "PCF data exchange and light PCF estimation",
      "Scenario planning and take-action recommendations tied to cost and carbon",
    ],
    valueProof: [
      "Savings identified and tracked",
      "Reduced time to answer governance and procurement questions",
      "Decisions supported (targets approved, initiatives launched)",
    ],
  },
  {
    pillar: "Adaptive",
    focus: [
      "Embed AI directly into core workflows rather than positioning it as a separate layer",
      "Use AI to automate repetitive work, guide users, and adapt to changing regulations",
      "Instrument AI usage to ensure trust, reliability, and measurable impact",
    ],
    outcomes: [
      "Material reduction in manual reporting and follow-ups",
      "Faster completion of supplier and reporting campaigns",
      "Increased confidence in AI-assisted outputs and recommendations",
    ],
    themes: [
      "AI auto-filling for supplier data with confidence scoring",
      "AI-driven reminders, nudges, and personalized outreach",
      "SERA integration across supplier and reporting journeys",
      "AI-assisted support and enablement",
    ],
    valueProof: [
      "Assist rate and acceptance rate in key workflows",
      "Time saved per journey",
      "Reduction in manual chasing and support effort",
    ],
  },
];

export const roadmapSummary = {
  investmentPriorities: [
    {
      number: 1,
      text: "Strengthening the platform foundation to reduce fragmentation, friction, and operating cost",
    },
    {
      number: 2,
      text: "Shifting customers from data collection to decision-ready, value-creating sustainability management",
    },
    {
      number: 3,
      text: "Making AI the default accelerator across core workflows, with measurable productivity and cost impact",
    },
  ],
  pillars: [
    {
      id: "unified",
      name: "Pillar 1: Unified",
      tagline: "One platform, no silos",
      icon: "Layers",
      focus: [
        "Consolidate shared components, data models, and workflows across all RA+ products",
        "Reduce duplication across supplier, emissions, and reporting journeys",
        "Improve reliability, performance, and regional access for enterprise-scale deployment",
      ],
      outcomes: [
        "Faster and more consistent rollout across regions and business units",
        "Reduced reporting effort and operational friction",
        "Lower risk from fragmented tools and inconsistent data",
      ],
      themes: [
        "Platform migrations and shared components",
        "Aligned emissions workflows across RA+ products",
        "Performance, scalability, and access improvements",
        "Progressive rebranding and navigation consistency",
      ],
      valueProof: [
        "Reduction in support tickets and rework",
        "Shorter time to complete core workflows",
        "Fewer duplicate uploads and manual reconciliations",
      ],
    },
    {
      id: "proactive",
      name: "Pillar 2: Proactive",
      tagline: "Trusted insights that drive decisions",
      icon: "TrendingUp",
      focus: [
        "Enable customers to move from measurement to defensible decisions and actions",
        "Prioritize insights that directly support cost reduction, procurement decisions, and governance",
        "Strengthen the link between sustainability metrics and financial outcomes",
      ],
      outcomes: [
        "Faster identification of savings opportunities",
        "Clear prioritization of high-impact suppliers, products, and initiatives",
        "Increased confidence with finance, auditors, and executive stakeholders",
      ],
      themes: [
        "AI-driven supplier prioritization",
        "Spend-based allocation and classification",
        "Integrated emissions measurement across supply chain",
        "Scenario planning and take-action recommendations",
      ],
      valueProof: [
        "Savings identified and tracked",
        "Reduced time to answer governance and procurement questions",
        "Decisions supported (targets approved, initiatives launched)",
      ],
    },
    {
      id: "adaptive",
      name: "Pillar 3: Adaptive",
      tagline: "AI-native and built for change",
      icon: "Sparkles",
      focus: [
        "Embed AI directly into core workflows rather than positioning it as a separate layer",
        "Use AI to automate repetitive work, guide users, and adapt to changing regulations",
        "Instrument AI usage to ensure trust, reliability, and measurable impact",
      ],
      outcomes: [
        "Material reduction in manual reporting and follow-ups",
        "Faster completion of supplier and reporting campaigns",
        "Increased confidence in AI-assisted outputs and recommendations",
      ],
      themes: [
        "AI auto-filling for supplier data with confidence scoring",
        "AI-driven reminders, nudges, and personalized outreach",
        "SERA integration across supplier and reporting journeys",
        "AI-assisted support and enablement",
      ],
      valueProof: [
        "Assist rate and acceptance rate in key workflows",
        "Time saved per journey",
        "Reduction in manual chasing and support effort",
      ],
    },
  ],
};
