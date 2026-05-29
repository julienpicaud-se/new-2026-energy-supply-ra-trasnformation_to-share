import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  TrendingUp,
  DollarSign,
  Layers,
  Building2,
  Sparkles,
  Network,
  Lock,
  FileSpreadsheet,
  Calculator,
  BookOpen,
} from "lucide-react";

const subSegment = {
  id: "bill-audit",
  label: "Financial-Grade Bill Auditing & Accounting",
  value: "~$2.8B",
  description:
    "Pure utility invoice software engines that ingest bills, run AP automation, GL coding, chargebacks, and tenant recharging. Maps to platforms like EnergyCAP.",
  sources: "Grand View Research: BEMS Software Market; Verdantix Real Estate & Built Environment Management Software Index.",
  triangulation:
    "Verdantix values the global built-environment software market at $8.2B. Utility Data Capture, Invoice Processing, and Tenant Utility Billing Recharging comprise roughly 34% of total software spend: 34% of $8.2B ≈ $2.78B.",
};

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
            Utility Bill Auditing & Invoicing Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            2026 projections for the pure-play software layer where RA+ competes: financial-grade utility
            invoice ingestion, AP automation, GL coding, chargebacks, and tenant recharging.
          </p>
        </div>

        {/* TAM */}
        <div className="max-w-xl mx-auto mb-20">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/20 to-transparent">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <FileSpreadsheet className="w-7 h-7 text-primary" />
              </div>
              <Badge variant="outline" className="border-primary/40 text-primary text-[11px] uppercase tracking-wider mb-4">
                TAM
              </Badge>
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">~$2.8B</div>
              <div className="text-sm font-semibold text-primary mb-3">
                Utility Bill Auditing & Invoicing Software
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Synthesized software-only market model isolating utility invoice data ingestion, financial bill
                auditing, and AP automation. Excludes building automation hardware, smart thermostats, ESG/carbon
                reporting suites, and physical grid components.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* TAM Detail Card */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="glass-card border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">Data Integrity Summary</h4>
                  <p className="text-xs text-muted-foreground">How the ~$2.8B is triangulated</p>
                </div>
              </div>

              <div className="bg-card/60 rounded-lg p-5 border border-border/40 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-foreground">{subSegment.label}</p>
                  <Badge variant="outline" className="border-primary/30 text-primary text-[10px] uppercase tracking-wider">
                    {subSegment.value}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{subSegment.description}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                      Core Sources
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-snug">{subSegment.sources}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-0.5">
                      Triangulation
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-snug">{subSegment.triangulation}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                <BookOpen className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>
                  This framework isolates the exact software budgets spent on utility invoice ingestion and
                  financial auditing, confirming that direct SaaS competitors are competing over a ~$2.8B
                  corporate software pot focused heavily on capturing data.
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
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Verdantix",
                    refs: "Real Estate & Built Environment Management Software Index.",
                    note: "Anchors the global built-environment software market at $8.2B, from which the 34% utility data-capture slice is derived.",
                  },
                  {
                    title: "Grand View Research",
                    refs: "Building Energy Management Systems (BEMS) Software Market Report.",
                    note: "Validates the utility data capture, invoice processing, and tenant recharging share of built-environment software spend.",
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
                Methodology: figures reflect a synthesized software-only model isolating utility invoice
                ingestion, financial auditing, AP automation, GL coding, chargebacks, and tenant recharging.
                Hardware (smart meters, BMS controllers, sub-metering devices), ESG/carbon reporting suites,
                and physical grid infrastructure are excluded.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
