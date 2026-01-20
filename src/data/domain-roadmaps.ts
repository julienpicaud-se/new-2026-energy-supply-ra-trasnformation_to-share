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
    id: "platform",
    domain: "Platform",
    icon: "Server",
    description: "Shared foundation that multiplies value across every product area",
    overview: "Platform work is treated as shared foundation that multiplies value across every product area. This includes enterprise organization model, shared sustainability graph, cross-product navigation, and ingest/transform services that standardize core data into governed models.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Unified"],
        valueDriver: "Enterprise modeling",
        initiative: "Enterprise org model, groups, and delegated admin",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "% customers running cross-product workflows without duplicating setup",
        aiLeverage: "AI-assisted configuration",
        customerROI: "Lower onboarding cost"
      },
      {
        horizon: "Now",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Automation and integrations",
        initiative: "Ingest and transform UX v1 (templates, validation, transformation preview)",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Time to first decision-grade dataset",
        aiLeverage: "AI-assisted mapping",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "Calculation accuracy and coverage",
        initiative: "EF library v1 and automated EF matching",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "% activity records auto-matched with acceptable confidence",
        aiLeverage: "AI-assisted matching",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Adaptive", "Unified"],
        valueDriver: "AI acceleration",
        initiative: "Agentic platform foundation",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "% workflows enabled with safe AI actions",
        aiLeverage: "AI-assisted workflows",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Trusted data and auditability",
        initiative: "End-to-end lineage v1",
        objective: "O1",
        primaryKR: "KR4",
        proofMetric: "% audit questions answered with evidence and lineage",
        aiLeverage: "AI-assisted tracing",
        customerROI: "Lower audit cost"
      },
      {
        horizon: "Next",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Automation",
        initiative: "Connector expansion (highest leverage sources first)",
        objective: "O2",
        primaryKR: "KR7",
        proofMetric: "% reduction in manual uploads",
        aiLeverage: "AI-assisted integration",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Workflow and governance",
        initiative: "Workflow and approvals enablement (platform)",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Time from updated data to approved initiatives",
        aiLeverage: "AI-assisted approvals",
        customerROI: "Faster decision cycles"
      },
      {
        horizon: "Later",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Enterprise modeling",
        initiative: "Configuration packs and standardized integration packs",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Time to roll out a new BU/region to operational",
        aiLeverage: "AI-assisted guidance",
        customerROI: "Faster enterprise rollouts"
      },
      {
        horizon: "Later",
        pillars: ["Adaptive", "Unified"],
        valueDriver: "AI acceleration",
        initiative: "AI quality system (eval harness + feedback loop + model/prompt versioning)",
        objective: "O3",
        primaryKR: "KR11",
        proofMetric: "AI recommendation acceptance rate",
        aiLeverage: "AI-assisted guidance",
        customerROI: "Higher AI trust and adoption"
      }
    ]
  },
  {
    id: "emissions-measurement",
    domain: "Emissions Measurement",
    icon: "BarChart2",
    description: "Audit-ready Scope 1-3 inventory in weeks with governed calculations",
    overview: "Build trusted baselines fast with audit-ready traceability and less manual work. Ingest and transform core data with AI-assisted mapping and validation, then calculate emissions with governed methodologies and full lineage.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Automation and integrations",
        initiative: "Ingest and transform UX v1 (templates, validation, transformation preview)",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Time to first decision-grade dataset",
        aiLeverage: "AI-assisted mapping",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Calculation accuracy and coverage",
        initiative: "Scope 1-3 calculation engine (MLP coverage)",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Time to first audit-ready Scope 1-3 inventory",
        aiLeverage: "AI-assisted calculations",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Insightful"],
        valueDriver: "Data quality at scale",
        initiative: "Data quality toolkit v1",
        objective: "O1",
        primaryKR: "KR5",
        proofMetric: "% inventories meeting quality threshold",
        aiLeverage: "AI-assisted validation",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "Calculation accuracy and coverage",
        initiative: "EF matching UX and governance touchpoints",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "% activity records auto-matched with acceptable confidence",
        aiLeverage: "AI-assisted matching",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "Data quality at scale",
        initiative: "Scope 3 gap-filling (prioritized slices)",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "% customers reaching reportable Scope 3 completion",
        aiLeverage: "AI-assisted gap filling",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Adaptive", "Unified"],
        valueDriver: "Enterprise modeling flexibility",
        initiative: "Mapping precedence UX and workflows",
        objective: "O3",
        primaryKR: "KR10",
        proofMetric: "Hours saved per reporting cycle per customer",
        aiLeverage: "AI-assisted mapping",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Later",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "Calculation accuracy and coverage",
        initiative: "Coverage expansion for prioritized datasets and methods",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Lead time to support a new requirement",
        aiLeverage: "AI-assisted configuration",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Unified", "Insightful"],
        valueDriver: "Sustainability performance expansion",
        initiative: "Expanded emissions measurement to sustainability performance (broader activity data, reuse across domains)",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "% customers tracking sustainability metrics beyond carbon",
        aiLeverage: "AI-assisted data mapping",
        customerROI: "Lower sustainability ops cost"
      }
    ]
  },
  {
    id: "strategy",
    domain: "Strategy",
    icon: "Target",
    description: "Targets, scenarios, and initiative planning with financial analysis",
    overview: "Turn governed data into decisions: hotspots, targets, scenarios and dashboards that optimize cost and carbon. Enable customers to create targets, compare pathways, and approve initiatives with clear financial impact.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Insightful"],
        valueDriver: "Decisioning and planning",
        initiative: "Targets, BAU baseline, and scenarios v1",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "% customers approving at least one plan",
        aiLeverage: "AI-assisted guidance",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful"],
        valueDriver: "Decisioning and planning",
        initiative: "Initiative library and financial analysis (capex, opex, NPV)",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Time from updated data to approved initiatives",
        aiLeverage: "AI-assisted analysis",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Workflow and governance",
        initiative: "Approvals expansion for targets, scenarios, and initiatives",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Approval cycle time",
        aiLeverage: "AI-assisted approvals",
        customerROI: "Faster decision cycles"
      },
      {
        horizon: "Later",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "AI acceleration",
        initiative: "Prescriptive planning with AI recommendations",
        objective: "O3",
        primaryKR: "KR11",
        proofMetric: "AI recommendation acceptance rate",
        aiLeverage: "AI-driven recommendations",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Decisioning and planning",
        initiative: "Emissions carbon strategy and scenarios",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "% customers with active decarbonization scenarios",
        aiLeverage: "AI-assisted scenario modeling",
        customerROI: "Faster decision cycles"
      }
    ]
  },
  {
    id: "analytics",
    domain: "Analytics & Benchmarking",
    icon: "TrendingUp",
    description: "Self-serve insights with data explorer, dashboards, and benchmarking",
    overview: "Query builder with natural language allowing customers to create their own queries. Templates and reuse through standard governance views and Data Stories, allowing analytics objects and narrative text to be embedded into flexible reports.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Insightful"],
        valueDriver: "Self-serve insights",
        initiative: "Data explorer and dashboards v1 (share, export)",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "% customers with recurring governance usage",
        aiLeverage: "AI-assisted exploration",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Self-serve insights",
        initiative: "Templates and reuse (standard governance views)",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "% customers with recurring governance usage",
        aiLeverage: "AI-assisted templates",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Trusted data and auditability",
        initiative: "Why this number - drill-down explanations",
        objective: "O1",
        primaryKR: "KR4",
        proofMetric: "% audit questions answered",
        aiLeverage: "AI-assisted explanations",
        customerROI: "Lower audit cost"
      },
      {
        horizon: "Later",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Self-serve insights",
        initiative: "Proactive anomaly detection with SERA",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Time to detect and explain material variance",
        aiLeverage: "AI-driven detection",
        customerROI: "Lower sustainability ops cost"
      }
    ]
  },
  {
    id: "disclosures",
    domain: "Disclosures",
    icon: "FileText",
    description: "Auditor-ready report packs tied to governed data",
    overview: "Disclosure alignment ensures narrative and quantitative reporting stay tied to the same underlying inventory, strategy, and risk data. AI-assisted drafting reduces manual effort while maintaining full traceability.",
    initiatives: [
      {
        horizon: "Later",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Trusted data and auditability",
        initiative: "Disclosure report builder with data lineage",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Time to produce an auditor-ready report pack",
        aiLeverage: "AI-assisted drafting",
        customerROI: "Lower sustainability ops cost"
      }
    ]
  },
  {
    id: "supply-chain",
    domain: "Supply Chain",
    icon: "Link2",
    description: "Supplier engagement and Scope 3 data collection at scale",
    overview: "Reduce friction in supplier workflows, make supplier engagement repeatable, and increase data capture via integrations. AI auto-filler for suppliers reduces reporting effort through automation with confidence scoring.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Unified"],
        valueDriver: "Reduce friction in supplier workflows",
        initiative: "Platform migrations with improved UX",
        objective: "O2",
        primaryKR: "KR7",
        proofMetric: "Reduce support tickets by 30%; time-to complete key flows",
        aiLeverage: "AI-ready shared components",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "Reduce reporting effort through automation",
        initiative: "AI auto-filler for suppliers (RA+)",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Fields auto-filled with ≥70% acceptance; hours saved per campaign",
        aiLeverage: "Agent-assisted completion with confidence scoring",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Now",
        pillars: ["Unified"],
        valueDriver: "Make supplier engagement repeatable",
        initiative: "Zeigo + RA+ integration",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Reduce campaign setup time by 25%; supplier response rate",
        aiLeverage: "Shared data context across workflows",
        customerROI: "Faster supplier engagement"
      },
      {
        horizon: "Now",
        pillars: ["Unified", "Adaptive"],
        valueDriver: "Increase data capture via integrations",
        initiative: "ZCP integrations",
        objective: "O2",
        primaryKR: "KR7",
        proofMetric: "% data via integrations; data error rate",
        aiLeverage: "Connector-assisted mapping and AI QA",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Focus effort on highest-impact suppliers",
        initiative: "AI pre-invitation analytics (RA+)",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "+15% on-time supplier responses",
        aiLeverage: "AI prioritization and completion-risk prediction",
        customerROI: "Faster supplier responses"
      },
      {
        horizon: "Next",
        pillars: ["Unified"],
        valueDriver: "Remove duplicate Scope 3 workflows",
        initiative: "RA+ emissions measurement integration",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Reduce duplicate uploads by 30%; time to inventory update",
        aiLeverage: "Shared semantic model across supplier",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Later",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Convert insights into savings",
        initiative: "AI-powered take-action page (RA+)",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Identify and track $X savings per customer",
        aiLeverage: "Agentic recommendations tied to cost & carbon",
        customerROI: "Operational cost savings"
      },
      {
        horizon: "Later",
        pillars: ["Adaptive"],
        valueDriver: "Scale productivity",
        initiative: "SERA integration across supplier journeys",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "≥60% assist rate; time saved per workflow",
        aiLeverage: "Governed, context-aware in-product assistant",
        customerROI: "Lower sustainability ops cost"
      }
    ]
  },
  {
    id: "sera-agentic",
    domain: "SERA & Agentic AI",
    icon: "Bot",
    description: "AI-native workflows with human control and traceability",
    overview: "AI is part of the core design so manual work is automated, guidance improves over time, and agentic workflows can take action with human control. Includes SERA for onboarding, EF mapping, gap-filling, anomaly investigation, recommendations, and disclosure drafting.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Adaptive", "Unified"],
        valueDriver: "AI acceleration",
        initiative: "SERA assistant foundation",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "% workflows completed with AI assistance",
        aiLeverage: "AI-assisted guidance",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Next",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "AI acceleration",
        initiative: "AI-guided onboarding",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Time to first inventory completion with AI guidance",
        aiLeverage: "AI-assisted onboarding",
        customerROI: "Faster time-to-value"
      },
      {
        horizon: "Later",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Self-serve insights",
        initiative: "Anomaly explanations with AI",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Time to detect and explain material variance with AI guidance",
        aiLeverage: "AI-driven explanations",
        customerROI: "Lower sustainability ops cost"
      },
      {
        horizon: "Later",
        pillars: ["Adaptive", "Insightful"],
        valueDriver: "AI acceleration",
        initiative: "Planning support with AI recommendations",
        objective: "O3",
        primaryKR: "KR11",
        proofMetric: "AI recommendation acceptance rate",
        aiLeverage: "AI-driven recommendations",
        customerROI: "Lower sustainability ops cost"
      }
    ]
  },
  {
    id: "climate-risk",
    domain: "Climate Risk",
    icon: "Shield",
    description: "Climate risk baseline and dashboards tied to assets and business entities",
    overview: "Climate risk assessment connected to physical assets and business entities. Risk dashboards used in governance forums provide visibility into climate-related financial risks and opportunities.",
    initiatives: [
      {
        horizon: "Later",
        pillars: ["Insightful", "Unified"],
        valueDriver: "Trusted data and auditability",
        initiative: "Climate risk baseline ingestion",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "% customers reviewing climate risk insights quarterly",
        aiLeverage: "AI-assisted risk assessment",
        customerROI: "Lower risk exposure"
      },
      {
        horizon: "Later",
        pillars: ["Insightful", "Adaptive"],
        valueDriver: "Self-serve insights",
        initiative: "Climate risk dashboards",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "% customers using risk dashboards in governance forums tied to assets",
        aiLeverage: "AI-assisted insights",
        customerROI: "Lower risk exposure"
      },
      {
        horizon: "Next",
        pillars: ["Unified", "Insightful"],
        valueDriver: "Compliance integration",
        initiative: "Climate risk integrated with Compliance & Reporting",
        objective: "O1",
        primaryKR: "KR4",
        proofMetric: "% climate risk insights linked to disclosure outputs",
        aiLeverage: "AI-assisted compliance mapping",
        customerROI: "Lower compliance risk"
      }
    ]
  }
];

export const getDomainById = (id: string): DomainRoadmap | undefined => {
  return domainRoadmaps.find(domain => domain.id === id);
};
