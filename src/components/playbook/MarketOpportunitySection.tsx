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

        {/* TAM Breakdown */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              TAM Breakdown: How the ~$6.3B Is Synthesized
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              Extracted and consolidated from Verdantix, Grand View Research, and Precedence Research.
              Large research firms often look at broader umbrellas; this model isolates the exact software
              budgets spent on utility invoice ingestion, financial auditing, and operational analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {subSegments.map((seg) => {
              const Icon = seg.icon;
              return (
                <Card
                  key={seg.id}
                  className="glass-card border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary text-[10px] uppercase tracking-wider">
                        {seg.value}
                      </Badge>
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">{seg.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{seg.description}</p>
                    <div className="mt-auto space-y-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                          Core Sources
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-snug">{seg.sources}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-0.5">
                          Triangulation
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-snug">{seg.triangulation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">Core Data Integrity Summary</h4>
                  <p className="text-xs text-muted-foreground">Stacking the three distinct software budget profiles</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-card/60 rounded-lg p-4 border border-border/40">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Sub-Segment 1</p>
                  <p className="text-sm font-semibold text-foreground mb-1">Utility Bill Auditing & Invoicing Software</p>
                  <p className="text-lg font-bold text-primary">$2.8 Billion</p>
                </div>
                <div className="bg-card/60 rounded-lg p-4 border border-border/40">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Sub-Segment 2</p>
                  <p className="text-sm font-semibold text-foreground mb-1">Utility Carbon & ESG Data Platforms</p>
                  <p className="text-lg font-bold text-primary">$1.5 Billion</p>
                </div>
                <div className="bg-card/60 rounded-lg p-4 border border-border/40">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Sub-Segment 3</p>
                  <p className="text-sm font-semibold text-foreground mb-1">Real-Time Meter Interval Analytics</p>
                  <p className="text-lg font-bold text-primary">$2.0 Billion</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border/40">
                <p className="text-sm font-bold text-foreground">Total Functional TAM for Segment A</p>
                <p className="text-2xl font-bold text-primary">~$6.3 Billion</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed flex items-start gap-2">
                <BookOpen className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>
                  This framework confirms that direct SaaS competitors are competing over a $6.3B corporate
                  software pot focused heavily on capturing data, but lacking the transactional commodity
                  execution power of an integrated procurement platform.
                </span>
              </p>
            </CardContent>
          </Card>
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

        {/* Sources & Methodology */}
        <div className="max-w-6xl mx-auto mt-20">
          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">Sources & Methodology</h4>
                  <p className="text-xs text-muted-foreground">
                    Primary research firms used to triangulate the 2026 software-only TAM model.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Verdantix",
                    refs: "Real Estate & Built Environment Management Software Index; Market Size and Forecast: ESG Reporting Software; Industrial Data Management Software Intelligence.",
                    note: "Anchors built-environment software ($8.2B) and ESG reporting software ($1.3B baseline, 26% CAGR).",
                  },
                  {
                    title: "Grand View Research",
                    refs: "Building Energy Management Systems (BEMS) Software Market Report.",
                    note: "Validates the utility data capture, invoice processing, and tenant recharging share of built-environment software spend.",
                  },
                  {
                    title: "Precedence Research",
                    refs: "Global Energy Management Systems Software — Segment Split (Industrial & Commercial).",
                    note: "Isolates the software-only component of interval data analytics and anomaly detection (~$2.0B).",
                  },
                  {
                    title: "IEA & Eurostat",
                    refs: "World Energy Outlook 2025; EU electricity & gas retail price datasets.",
                    note: "Cross-checks deregulated US and Western European market sizing and tariff volatility assumptions.",
                  },
                  {
                    title: "BloombergNEF",
                    refs: "Corporate Energy Procurement & PPA Market Outlook.",
                    note: "Reference for B2B sourcing volumes, take-rates, and value-share hedge benchmarks.",
                  },
                  {
                    title: "Gartner & IDC",
                    refs: "Market Guides for Energy & Sustainability Management Software; SaaS retention benchmarks.",
                    note: "Supports the 110 to 120% net revenue retention benchmark and per-meter SaaS pricing ranges.",
                  },
                ].map((s) => (
                  <div key={s.title} className="bg-card/60 rounded-lg p-4 border border-border/40">
                    <p className="text-sm font-bold text-foreground mb-1">{s.title}</p>
                    <p className="text-[11px] text-primary leading-snug mb-2">{s.refs}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-5 leading-relaxed">
                Methodology: figures reflect a synthesized software-only model. Hardware (smart meters,
                BMS controllers, sub-metering devices) and physical grid infrastructure are excluded.
                Sub-segment values are derived by filtering each research firm's broader umbrella down
                to the line items mapping directly to bill ingestion, financial auditing, ESG/carbon
                data, and interval analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
