import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Globe2,
  Target,
  Crosshair,
  TrendingUp,
  DollarSign,
  Layers,
  Building2,
  Sparkles,
  Network,
  Lock,
  FileSpreadsheet,
  Leaf,
  Activity,
  Calculator,
  BookOpen,
} from "lucide-react";

type MarketLayer = {
  id: string;
  label: string;
  value: string;
  scope: string;
  description: string;
  icon: React.ElementType;
  accent: string;
};

const marketLayers: MarketLayer[] = [
  {
    id: "tam",
    label: "TAM",
    value: "~$6.3B",
    scope: "Enterprise Energy Procurement & Utility Bill Management Software",
    description:
      "Synthesized software-only market model isolating utility invoice data ingestion, financial bill auditing, and operational energy analytics. Excludes building automation hardware, smart thermostats, and physical grid components.",
    icon: Globe2,
    accent: "from-primary/20 to-transparent",
  },
  {
    id: "sam",
    label: "SAM",
    value: "~$3.8B",
    scope: "B2B Enterprise Bill Audit & Sourcing Software",
    description:
      "Mid-market to large industrial, manufacturing, corporate, and public sector organizations in deregulated US and Western European markets that use software to ingest bills, run tenders, and execute energy supply contracts.",
    icon: Target,
    accent: "from-primary/30 to-transparent",
  },
  {
    id: "som",
    label: "SOM (3 to 5 yr)",
    value: "$150M to $250M ARR",
    scope: "Target actionable market share",
    description:
      "Near-term capture available to a modern SaaS or tech-enabled vendor achieving 4 to 6 percent penetration across the key deregulated corridors in North America and Western Europe.",
    icon: Crosshair,
    accent: "from-primary/40 to-transparent",
  },
];

type SubSegment = {
  id: string;
  label: string;
  value: string;
  description: string;
  sources: string;
  triangulation: string;
  icon: React.ElementType;
};

const subSegments: SubSegment[] = [
  {
    id: "bill-audit",
    label: "Financial-Grade Bill Auditing & Accounting",
    value: "~$2.8B",
    description:
      "Pure utility invoice software engines that ingest bills, run AP automation, GL coding, chargebacks, and tenant recharging. Maps to platforms like EnergyCAP.",
    sources: "Grand View Research: BEMS Software Market; Verdantix Real Estate & Built Environment Management Software Index.",
    triangulation:
      "Verdantix values the global built-environment software market at $8.2B. Utility Data Capture, Invoice Processing, and Tenant Utility Billing Recharging comprise roughly 34% of total software spend: 34% of $8.2B ≈ $2.78B.",
    icon: FileSpreadsheet,
  },
  {
    id: "esg-carbon",
    label: "ESG & Carbon-Integrated Data Suites",
    value: "~$1.5B",
    description:
      "Scope 2 emissions data streams, utility carbon logging, and environmental invoice indexing. The exact domain targeted by IBM Envizi and mandatory disclosure frameworks like CSRD.",
    sources: "Verdantix: Market Size and Forecast: ESG Reporting Software.",
    triangulation:
      "Verdantix values the global ESG reporting software market at $1.3B baseline, tracking at 26% CAGR. After filtering out pure social sustainability, health and safety, and corporate governance, the energy-specific carbon expenditure sits at ~$1.5B.",
    icon: Leaf,
  },
  {
    id: "interval-analytics",
    label: "Real-Time Interval Data Analytics",
    value: "~$2.0B",
    description:
      "Continuous 15-minute smart meter interval monitoring, automated anomaly detection, and virtual asset load tracking. The domain of AI-native platforms like Spacewell Energy and Enersee.",
    sources: "Precedence Research: Global EMS Software Segment Split; Verdantix: Industrial Data Management Software Intelligence.",
    triangulation:
      "Precedence Research isolates the software-only component of industrial and commercial energy management. Verdantix confirms rapid adoption of AI-driven real-time analytics for wholesale grid volatility. The strict software slice for interval monitoring and anomaly detection accounts for ~$2.0B globally.",
    icon: Activity,
  },
];

const revenueStreams = [
  {
    title: "SaaS Core License",
    pill: "Recurring",
    mix: "Per-meter / per-account / month",
    yield: "$25 to $150 per utility connection point per month",
    description:
      "Highly predictable software access fees. A client with 500 active facility meters generates $150K to $900K ARR in pure license revenue.",
    icon: Building2,
  },
  {
    title: "Transactional Brokerage Fees",
    pill: "Volume",
    mix: "Take-rate on energy transacted",
    yield: "$0.0005 to $0.0025 per kWh or therm",
    description:
      "Linear scaling with client energy consumption. High-volume industrial usage drives immediate cash generation upon contract execution.",
    icon: Layers,
  },
  {
    title: "Value-Share Hedges",
    pill: "Performance",
    mix: "Margin on verified savings",
    yield: "10 to 20% of savings vs wholesale market averages",
    description:
      "High-margin upside captured during periods of pricing volatility and seasonal grid stress, aligning incentives with client outcomes.",
    icon: Sparkles,
  },
];

const valueDrivers = [
  {
    title: "Data Network Effects",
    description:
      "Every utility invoice ingested and every supplier bid received enriches the platform. Over time the system predicts pricing spikes and offers anonymous peer benchmarks, lifting retention.",
    icon: Network,
  },
  {
    title: "Low-Churn Infrastructure",
    description:
      "Switching invoice and procurement systems requires tedious manual data migration and renegotiated supplier integrations. Net revenue retention in this vertical typically runs 110 to 120%.",
    icon: Lock,
  },
  {
    title: "Operating Leverage",
    description:
      "Transactional and accounting workflows scale on a predictable, repeatable cost base, compounding margin as portfolio and meter count expand.",
    icon: TrendingUp,
  },
];

export const MarketOpportunitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="market-opportunity"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Market Opportunity
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Pure-Play Energy Procurement & Invoice Management Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            2026 projections for the software layer where RA+ competes: bill ingestion, tendering,
            and supply execution across deregulated US and Western European markets.
          </p>
        </div>

        {/* TAM / SAM / SOM */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {marketLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <Card
                key={layer.id}
                className={`relative overflow-hidden border-primary/30 bg-gradient-to-br ${layer.accent}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary text-[11px] uppercase tracking-wider">
                      {layer.label}
                    </Badge>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{layer.value}</div>
                  <div className="text-sm font-semibold text-primary mb-3">{layer.scope}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Potential */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Revenue Potential & Business Model
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              A focused transactional and accounting model unlocks predictable, repeatable revenue
              with high operating leverage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream) => {
              const Icon = stream.icon;
              return (
                <Card
                  key={stream.title}
                  className="glass-card border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary text-[10px] uppercase tracking-wider w-fit mb-3">
                      {stream.pill}
                    </Badge>
                    <h4 className="text-base font-bold text-foreground mb-1">{stream.title}</h4>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">{stream.mix}</div>
                    <div className="text-sm font-semibold text-primary mb-3">{stream.yield}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stream.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Operational value drivers */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Operational Value Drivers
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Structural advantages that compound retention, margin, and pricing power over time.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {valueDrivers.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <DollarSign className="w-3.5 h-3.5 text-primary" />
            <span>Net revenue retention benchmark: 110 to 120% in pure-play energy software.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
