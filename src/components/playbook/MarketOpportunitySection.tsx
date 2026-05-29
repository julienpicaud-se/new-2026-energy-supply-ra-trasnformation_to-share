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
} from "lucide-react";

type MarketLayer = {
  id: string;
  label: string;
  value: string;
  scope: string;
  description: string;
  sources: string;
  icon: React.ElementType;
  accent: string;
};

const marketLayers: MarketLayer[] = [
  {
    id: "tam",
    label: "TAM",
    value: "$28B+",
    scope: "Global Energy & Sustainability Managed Services",
    description:
      "Total addressable spend on outsourced energy procurement, sustainability reporting, invoice management, and decarbonization advisory across large enterprises and multi-site portfolios.",
    sources: "Verdantix, Guidehouse Insights, IDC Energy Insights (2024 to 2025)",
    icon: Globe2,
    accent: "from-primary/20 to-transparent",
  },
  {
    id: "sam",
    label: "SAM",
    value: "$6.5B",
    scope: "AI-augmented Managed Services for commercial and industrial portfolios",
    description:
      "Segment where RA+ competes today: tech-enabled energy procurement, invoice validation, ESG data assurance, and net-zero planning for mid-market to large enterprise clients in North America and Europe.",
    sources: "Verdantix ESG & Sustainability, internal triangulation",
    icon: Target,
    accent: "from-primary/30 to-transparent",
  },
  {
    id: "som",
    label: "SOM (5 yr)",
    value: "$280M to $420M",
    scope: "Realistic capture for RA+ as the judgement layer",
    description:
      "Revenue we can credibly capture by 2030 by combining recurring Managed Services, RA+ platform subscriptions, and expert-in-the-loop premium tiers across existing geographies and named accounts.",
    sources: "Bottom-up: installed base x ARPA uplift + new logo plan",
    icon: Crosshair,
    accent: "from-primary/40 to-transparent",
  },
];

const revenueStreams = [
  {
    title: "Recurring Managed Services",
    pill: "Core",
    mix: "55 to 60% of mix",
    description:
      "Multi-year contracts for procurement, invoice processing, and sustainability reporting, repriced upward as automation absorbs scope.",
    icon: Building2,
  },
  {
    title: "RA+ Platform Subscription",
    pill: "Software",
    mix: "20 to 25% of mix",
    description:
      "Per-site or per-meter SaaS fee for self-serve clients who want the full AI surface, Sera briefings, and analytics without heavy advisory.",
    icon: Layers,
  },
  {
    title: "Expert-in-the-Loop Premium",
    pill: "Judgement layer",
    mix: "15 to 20% of mix",
    description:
      "Retainer or outcome-based fee for human validation, risk translation, and executive communication on top of the platform, for clients who need a trusted advisor on complex calls.",
    icon: Sparkles,
  },
  {
    title: "Outcome and Performance Fees",
    pill: "Upside",
    mix: "5 to 10% of mix",
    description:
      "Success fees tied to validated savings, dispute recoveries, and Scope 2 reduction milestones, captured through the same data fabric that powers the platform.",
    icon: TrendingUp,
  },
];

const businessImpact = [
  {
    metric: "ARPA uplift",
    value: "1.6x to 2.2x",
    description:
      "Per-account revenue expands as platform and expert tiers attach to existing Managed Services contracts.",
  },
  {
    metric: "Gross margin trajectory",
    value: "+8 to +12 pts",
    description:
      "Automation lifts blended gross margin from services-only baseline toward a hybrid SaaS plus services profile.",
  },
  {
    metric: "Net revenue retention",
    value: "115 to 125%",
    description:
      "Recurring base compounds via platform attach, premium tiers, and outcome fees on the installed portfolio.",
  },
  {
    metric: "New logo velocity",
    value: "2x within 24 months",
    description:
      "Self-serve entry point shortens sales cycles for mid-market accounts that previously did not fit a full managed engagement.",
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
            Sizing the Prize for RA+
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A multi-billion-dollar managed services market is shifting toward AI-augmented delivery.
            RA+ is positioned to capture the segment where automation meets expert judgement.
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{layer.description}</p>
                  <p className="text-[11px] text-muted-foreground/70 mt-auto pt-3 border-t border-border/40">
                    Sources: {layer.sources}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Streams */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              What It Means for Revenue
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Four revenue streams compose the RA+ business model, blending recurring services,
              software, and premium human judgement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="text-xs font-semibold text-muted-foreground mb-3">{stream.mix}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stream.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Business impact */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Business Impact
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Targets that translate the market opportunity into a stronger P&L profile.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessImpact.map((item) => (
              <Card key={item.metric} className="glass-card border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{item.value}</div>
                  <h4 className="font-semibold text-foreground mb-1">{item.metric}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
