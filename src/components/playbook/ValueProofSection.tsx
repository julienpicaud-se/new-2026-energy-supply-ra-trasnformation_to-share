import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roiLevers, aiScorecard, roiScorecard } from "@/data/playbook-data";
import {
  Clock,
  TrendingDown,
  BarChart3,
  Shield,
  Gauge,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Timer,
  ArrowUpRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const leverIcons: Record<string, React.ElementType> = {
  Clock,
  TrendingDown,
  BarChart3,
  Shield,
};

type KpiCard = {
  category: string;
  title: string;
  description: string;
  pill: string;
  icon: React.ElementType;
};

const featuredKpi: KpiCard = {
  category: "Automation",
  title: "Managed Services Automation Rate",
  description:
    "Share of Managed Services operations executed by RA+ without manual intervention, tracked per workflow.",
  pill: "% automated (trend)",
  icon: Gauge,
};

const kpis: KpiCard[] = [
  {
    category: "Throughput",
    title: "Productivity Gains",
    description:
      "Operational productivity improvement across data collection, validation, and reporting workflows.",
    pill: "% productivity uplift",
    icon: TrendingUp,
  },
  {
    category: "Cycle Time",
    title: "Budget Cycle Acceleration",
    description:
      "Time from kickoff to a usable budget and first reforecast, measured per client portfolio.",
    pill: "Weeks per cycle (trend)",
    icon: Timer,
  },
  {
    category: "Quality",
    title: "Validation Error Reduction",
    description:
      "Drop in invoice validation and dispute errors driven by unified data and identity resolution.",
    pill: "% fewer errors",
    icon: CheckCircle2,
  },
  {
    category: "Business Impact",
    title: "Backlog Cleared",
    description:
      "Invoice validation issues resolved through automated pseudo-bill generation and exception routing.",
    pill: "# issues resolved",
    icon: DollarSign,
  },
];

const pillars = [
  { num: "01", label: "Productivity" },
  { num: "02", label: "Speed" },
  { num: "03", label: "Accuracy" },
];

export const ValueProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="value-proof"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Quantitative KPIs
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Success Looks Like
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Five measurable indicators that translate the Strategic Pillars into trackable signals.
            Each KPI defines what we measure, not a committed target.
          </p>
        </div>

        {/* Success Looks Like — hero KPI grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* Featured left card */}
          <Card className="glass-card border-primary/30 relative overflow-hidden">
            <CardContent className="p-8 sm:p-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-8">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-foreground leading-tight">
                The signal is simple: more automated work, delivered with less friction.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-10">
                Success should show up in throughput, faster cycle times, and a shrinking backlog —
                without relying on one-off delivery heroics.
              </p>
              <div className="mt-auto pt-6 border-t border-border/40 grid grid-cols-3 gap-4">
                {pillars.map((p) => (
                  <div key={p.num}>
                    <div className="text-2xl font-bold text-primary mb-1">{p.num}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right KPI grid: featured wide + 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Wide top featured KPI */}
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 sm:col-span-2 group relative">
              <CardContent className="p-6">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground absolute top-4 right-4 group-hover:text-primary transition-colors" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <featuredKpi.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                  {featuredKpi.category}
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">{featuredKpi.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{featuredKpi.description}</p>
                <div className="inline-flex items-center px-3 py-2 rounded-md bg-muted/50 border border-border/40 text-xs text-foreground/80">
                  {featuredKpi.pill}
                </div>
              </CardContent>
            </Card>

            {kpis.map((kpi) => {
              const Icon = kpi.icon;
              return (
                <Card
                  key={kpi.title}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group relative"
                >
                  <CardContent className="p-6">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground absolute top-4 right-4 group-hover:text-primary transition-colors" />
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5">
                      {kpi.category}
                    </div>
                    <h4 className="text-base font-bold mb-2 text-foreground">{kpi.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{kpi.description}</p>
                    <div className="inline-flex items-center px-3 py-2 rounded-md bg-muted/50 border border-border/40 text-xs text-foreground/80">
                      {kpi.pill}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ROI Levers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">ROI Levers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {roiLevers.map((lever, index) => {
              const Icon = leverIcons[lever.icon as keyof typeof leverIcons] || Clock;
              return (
                <Card
                  key={lever.lever}
                  className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{lever.lever}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{lever.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {lever.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ROI Scorecard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">ROI Scorecard</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roiScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{item.target}</div>
                  <h4 className="font-semibold mb-1">{item.metric}</h4>
                  <p className="text-xs text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Scorecard */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">AI Scorecard</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{item.target}</div>
                  <h4 className="font-semibold mb-1">{item.metric}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
