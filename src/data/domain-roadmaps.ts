export const getDomainById = (id: string) => {
  return domainRoadmaps.find(domain => domain.id === id);
};

export interface DomainInitiative {
  horizon: "Now" | "Next" | "Later";
  pillars: string[];
  valueDriver: string;
  initiative: string;
  objective: string;
  primaryKR: string;
  proofMetric: string;
  aiLeverage: string;
  customerROI: string;
}

export interface DomainRoadmap {
  id: string;
  domain: string;
  icon: string;
  description: string;
  overview: string;
  initiatives: DomainInitiative[];
}

export const domainRoadmaps: DomainRoadmap[] = [
  {
    id: "data-ingestion",
    domain: "Data Ingestion",
    icon: "Download",
    description: "Automated data collection from retailers, markets, and aggregators",
    overview: "Build a robust connector ecosystem that can ingest interval, invoice, offer, and tariff data from retailers, market entities, and aggregator partners worldwide. Implement LOA digitization for global data access authorization.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Data collection automation",
        initiative: "Define connector strategy (retailer + aggregator + Deepki-like models)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Strategy document approved",
        aiLeverage: "Pattern analysis for connector prioritization",
        customerROI: "Reduced manual data collection"
      },
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Authorization management",
        initiative: "LOA/authorization workflow digitization",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Digital LOA issuance live for UK/US",
        aiLeverage: "Automated renewal reminders",
        customerROI: "Faster market access"
      },
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Data integrity",
        initiative: "As-received data lake implementation (no mutation at entry)",
        objective: "O3",
        primaryKR: "KR8",
        proofMetric: "Raw data preserved with lineage",
        aiLeverage: "Automated data classification",
        customerROI: "Audit trail and trust"
      },
      {
        horizon: "Next",
        pillars: ["Platform Scale"],
        valueDriver: "Market coverage",
        initiative: "UK retailer connector expansion",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Top 10 UK retailers connected",
        aiLeverage: "Format detection and mapping",
        customerROI: "Reduced manual uploads"
      },
      {
        horizon: "Next",
        pillars: ["Platform Scale"],
        valueDriver: "Market coverage",
        initiative: "US utility connector development",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Top 5 US utilities connected",
        aiLeverage: "Schema inference",
        customerROI: "Faster US onboarding"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Partnership ecosystem",
        initiative: "Aggregator partnerships (Deepki model evaluation)",
        objective: "O3",
        primaryKR: "KR8",
        proofMetric: "1+ aggregator partner live",
        aiLeverage: "Data quality scoring",
        customerROI: "Accelerated EU coverage"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Global scale",
        initiative: "EU market connector expansion (EAN/POD regions)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "3+ EU markets connected",
        aiLeverage: "Cross-market format mapping",
        customerROI: "Global operations support"
      }
    ]
  },
  {
    id: "identity-governance",
    domain: "Identity & Governance",
    icon: "Key",
    description: "Global identity registry and data governance framework",
    overview: "Establish a single source of truth for meter↔account↔site identity across all markets. Create a schema registry and governance framework that ensures data quality, ownership clarity, and auditability.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Identity resolution",
        initiative: "Define identity mapping approach (MPAN first)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Identity strategy document approved",
        aiLeverage: "Pattern matching for identity hints",
        customerROI: "Reduced reconciliation effort"
      },
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Data ownership",
        initiative: "Establish portfolio single ownership",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Single owner per portfolio assigned",
        aiLeverage: "Conflict detection",
        customerROI: "Clear accountability"
      },
      {
        horizon: "Now",
        pillars: ["Data Foundation"],
        valueDriver: "Data governance",
        initiative: "Target data model definition (schema v0.9)",
        objective: "O3",
        primaryKR: "KR8",
        proofMetric: "Schema approved by architecture",
        aiLeverage: "Schema validation automation",
        customerROI: "Consistent data structure"
      },
      {
        horizon: "Next",
        pillars: ["Data Foundation"],
        valueDriver: "Identity resolution",
        initiative: "UK identity registry MVP (MPAN-based)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: ">98% MPAN resolution accuracy",
        aiLeverage: "Fuzzy matching for edge cases",
        customerROI: "Automated reconciliation"
      },
      {
        horizon: "Next",
        pillars: ["Data Foundation"],
        valueDriver: "Contract consolidation",
        initiative: "Contract data single source of truth",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Contract data migrated from 5+ sources",
        aiLeverage: "Duplicate detection",
        customerROI: "Reduced data conflicts"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Global identity",
        initiative: "EAN/POD identity expansion (EU markets)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "3+ EU markets with identity resolution",
        aiLeverage: "Cross-market identity inference",
        customerROI: "Global operations support"
      },
      {
        horizon: "Later",
        pillars: ["Data Foundation"],
        valueDriver: "Regulatory completeness",
        initiative: "Regulatory content service with proactive management",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: ">90% tariff coverage for budgeting",
        aiLeverage: "Change detection and alerting",
        customerROI: "Faster budgets"
      }
    ]
  },
  {
    id: "invoice-automation",
    domain: "Invoice Automation",
    icon: "FileCheck",
    description: "Pseudo-bill generation and automated invoice validation",
    overview: "Generate pseudo-bills at D+1 using interval + contract + tariff data, then automatically validate against retailer invoices when they arrive. Reduce the 160,000 issue backlog through intelligent triage and automated tolerance checks.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Automation"],
        valueDriver: "Journey mapping",
        initiative: "Frame end-to-end invoice validation journey",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Journey documented and approved",
        aiLeverage: "Process mining insights",
        customerROI: "Clear automation roadmap"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Proactive validation",
        initiative: "Pseudo-bill MVP for UK market",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: ">95% accuracy vs actual invoices",
        aiLeverage: "Anomaly pre-detection",
        customerROI: "Earlier issue identification"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Backlog reduction",
        initiative: "Adaptive invoice variance detection and triage",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "50% backlog reduction in pilot",
        aiLeverage: "Priority scoring for issues",
        customerROI: "Focus on high-value issues"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Efficiency",
        initiative: "Automated tolerance check elimination",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "80% reduction in manual tolerance checks",
        aiLeverage: "Rule-based automation",
        customerROI: "Reduced manual effort"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Scale",
        initiative: "Pseudo-bill expansion to US market",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "US pseudo-bill accuracy >95%",
        aiLeverage: "Cross-market learning",
        customerROI: "US operations efficiency"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Accuracy",
        initiative: "Dispute accuracy improvement system",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Dispute win rate +20%",
        aiLeverage: "Evidence compilation",
        customerROI: "Higher dispute success"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Document processing",
        initiative: "IDP/Blair agent enhancement for invoice capture",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: ">90% extraction accuracy",
        aiLeverage: "Deep learning OCR",
        customerROI: "Faster invoice processing"
      }
    ]
  },
  {
    id: "budgeting-forecasting",
    domain: "Budgeting & Forecasting",
    icon: "TrendingUp",
    description: "Real-time budgets and site-level forecasting",
    overview: "Cut budget creation from ~8 weeks to under 2 weeks by automating tariff ingestion and enabling real-time reforecasting. Improve forecast accuracy with weather integration and site-level granularity.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Automation"],
        valueDriver: "Tariff completeness",
        initiative: "Tariff data completeness audit and gap analysis",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Gap analysis complete for UK/US",
        aiLeverage: "Pattern detection for missing data",
        customerROI: "Clear improvement roadmap"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Speed",
        initiative: "Real-time budget generation for pilot portfolios",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Budget cycle <2 weeks for pilot",
        aiLeverage: "Automated calculation pipelines",
        customerROI: "Faster client delivery"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Flexibility",
        initiative: "Reforecast automation capability",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "On-demand reforecast enabled",
        aiLeverage: "Incremental calculation",
        customerROI: "Responsive planning"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Accuracy",
        initiative: "Weather integration for load forecasting",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Forecast accuracy +15%",
        aiLeverage: "Weather-load correlation",
        customerROI: "Better predictions"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Granularity",
        initiative: "Site-level forecast capability",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Site-level forecasts available",
        aiLeverage: "Disaggregation modeling",
        customerROI: "Detailed planning"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Integration",
        initiative: "Budget/Forecast integration into RA+ modules",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Full module integration live",
        aiLeverage: "Cross-module data flow",
        customerROI: "Unified experience"
      }
    ]
  },
  {
    id: "sourcing-risk",
    domain: "Sourcing & Risk",
    icon: "ShieldCheck",
    description: "Automated sourcing workflows and dynamic risk insights",
    overview: "Revive the Codex vision with automated offer ingestion and normalization. Enable dynamic risk insights down to site level and automate PPA advisory workflows.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Automation"],
        valueDriver: "Requirements clarity",
        initiative: "Complete offer PRDs (Kevin)",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "PRD approved by stakeholders",
        aiLeverage: "Requirement analysis",
        customerROI: "Clear product direction"
      },
      {
        horizon: "Next",
        pillars: ["Automation"],
        valueDriver: "Offer processing",
        initiative: "Offer ingestion and normalization MVP",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Offers normalized from 5+ formats",
        aiLeverage: "Format detection and mapping",
        customerROI: "Faster offer comparison"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Workflow automation",
        initiative: "Automated sourcing workflows (Codex 2.0)",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "End-to-end sourcing automation",
        aiLeverage: "Decision support",
        customerROI: "Reduced sourcing effort"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Risk visibility",
        initiative: "Dynamic risk insights at site level",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Site-level risk dashboards live",
        aiLeverage: "Risk pattern detection",
        customerROI: "Proactive risk management"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "PPA support",
        initiative: "PPA advisory automation",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "PPA analysis time -50%",
        aiLeverage: "Contract analysis",
        customerROI: "Faster PPA decisions"
      },
      {
        horizon: "Later",
        pillars: ["Automation"],
        valueDriver: "Financial accuracy",
        initiative: "Accruals automation",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Accruals generated automatically",
        aiLeverage: "Calculation automation",
        customerROI: "Reduced month-end effort"
      }
    ]
  },
  {
    id: "client-experience",
    domain: "Client Experience",
    icon: "Users",
    description: "Self-serve portal and client data enrichment",
    overview: "Shift from 'we fix everything for the client' to 'we give clients the tools and data to resolve with us.' Enable client self-serve for occupancy/production data and provide real-time data transparency.",
    initiatives: [
      {
        horizon: "Next",
        pillars: ["Platform Scale"],
        valueDriver: "Client empowerment",
        initiative: "Client mini-portal for data review",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Portal live for pilot clients",
        aiLeverage: "Guided data review",
        customerROI: "Transparency and trust"
      },
      {
        horizon: "Next",
        pillars: ["Platform Scale"],
        valueDriver: "Context enrichment",
        initiative: "Occupancy/production data capture portal",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "5+ clients providing context data",
        aiLeverage: "Data validation",
        customerROI: "Improved accuracy"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Enterprise integration",
        initiative: "ERP/BMS API integration for client context",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "SAP/BMS integration live",
        aiLeverage: "Data transformation",
        customerROI: "Automated context data"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Real-time insights",
        initiative: "Near-real-time load insights for demand response",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Real-time dashboards live",
        aiLeverage: "Pattern detection",
        customerROI: "Demand response savings"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Efficiency optimization",
        initiative: "Microgrid optimization integration",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Microgrid module integrated",
        aiLeverage: "Optimization algorithms",
        customerROI: "Energy cost reduction"
      },
      {
        horizon: "Later",
        pillars: ["Platform Scale"],
        valueDriver: "Platform expansion",
        initiative: "Third-party consultant SaaS platform",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Platform ready for external consultants",
        aiLeverage: "Multi-tenant capabilities",
        customerROI: "New revenue stream"
      }
    ]
  }
];
