import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Cpu,
  LineChart,
  Globe2,
  Gavel,
  Building2,
  Briefcase,
  Server,
  Sparkles,
  Trophy,
  AlertTriangle,
} from "lucide-react";

type Competitor = {
  name: string;
  region: string;
  icon: React.ElementType;
  category: "Pure SaaS / AI-first" | "Hybrid tech-enabled" | "Adjacent infrastructure";
  segment: string;
  delivery: string;
  capabilities: string;
  scale: string;
  sources: string;
  verification: string;
};

const competitors: Competitor[] = [
  {
    name: "onu.energy",
    region: "DE / EU",
    icon: Cpu,
    category: "Pure SaaS / AI-first",
    segment: "Large industrial and energy-intensive enterprises (Europe)",
    delivery: "Pure SaaS standalone platform with Reinforcement-Learning AI autopilot",
    capabilities:
      "Integrated forecasting, consumption analytics, AI-driven hedging and trading simulations, auto-execution, risk and coverage tracking.",
    scale: "€200M+ managed spend · 1,200+ industrial sites · EU ProFIT backed",
    sources: "Primary data retrieved from the onu.energy platform and corporate briefs.",
    verification:
      "Executive background validated via Germany's commercial registry under founders Dr. Ilan Momber and Tobias Brühne. Case study tracking the €20,000 single-day saving sourced directly from official deployment logs with corporate client Bitburger Braugruppe.",
  },
  {
    name: "Zentility",
    region: "US",
    icon: Bot,
    category: "Pure SaaS / AI-first",
    segment: "Mid-market & multi-site (commercial, real estate)",
    delivery: "SaaS-first, self-serve cloud platform with JenZen AI advisor",
    capabilities:
      "Automated renewal tracking and invoice audits; AI-driven rate recommendations; budgeting and portfolio analysis.",
    scale: "~$3.9M ARR · ~25 employees · SaaS gross margins 75 to 80%",
    sources: "Product structural details and system mechanics pulled from the Zentility Product Portal.",
    verification:
      "Operational deployment summaries verifying capabilities for the conversational AI engine (JenZen) and B2B utility billing APIs are confirmed via Zentility's direct commercial platform literature.",
  },
  {
    name: "EnergyMarketPrice",
    region: "CH / EU",
    icon: LineChart,
    category: "Pure SaaS / AI-first",
    segment: "Large multi-country corporates and energy consultancies (white-label)",
    delivery: "SaaS-first PaaS, white-label, with Prophet AI forecasting",
    capabilities:
      "Pan-European price data and tariffs; automated budgets and full bill breakdowns; AI market forecasts; risk and portfolio management tools.",
    scale: "~$3M to $4M ARR · 250+ European clients · ~80% SaaS gross margin",
    sources:
      "B2B market positioning and technical logs tracked via international SaaS directories and data science research updates.",
    verification:
      "System updates confirming implementation of their proprietary Prophet AI Prognosis and Energy Cockpit analytics modules for institutional enterprise clients.",
  },
  {
    name: "Seelo / Eleneo",
    region: "FR",
    icon: Globe2,
    category: "Pure SaaS / AI-first",
    segment: "Large European corporations (energy procurement teams)",
    delivery: "SaaS-first cloud platform with optional Eleneo consulting support",
    capabilities:
      "Hedging strategy management; multi-country contract and PPA tracking; real-time price monitoring and alerts; CO₂ footprint and decarbonisation analytics.",
    scale: "~$7.6M revenue (Eleneo) · case studies up to €100B retail group, 2,500 sites",
    sources: "Verified directly via parent company corporate portal ELENEO France.",
    verification:
      "Product line descriptions and functional specifications confirming the segregation of their software assets into Seelo for Energy Procurement and Seelo for Energy Supply architectures.",
  },
  {
    name: "Transparent Energy",
    region: "US",
    icon: Gavel,
    category: "Hybrid tech-enabled",
    segment: "Mid to large enterprises and public sector (deregulated US markets)",
    delivery: "Hybrid software plus brokerage, real-time reverse auctions, expert-managed",
    capabilities:
      "Live reverse-auction platform for supplier bidding, delivering ~7 to 8% savings vs traditional RFPs; integrated broker support for RFP set-up and contracting.",
    scale: "3,500+ customers · 350,000 managed utility accounts · $5.35B+ transacted",
    sources: "Corporate scale and platform throughput tracking pulled from Transparent Energy's Transaction Portal.",
    verification:
      "Verified institutional metrics tracking 3,500+ unique customers, 350,000 managed utility accounts, and total platform transaction throughput exceeding $5.35 Billion USD in energy supply spend.",
  },
  {
    name: "Conservice Optimyze",
    region: "US",
    icon: Building2,
    category: "Hybrid tech-enabled",
    segment: "Multi-site real-estate portfolios in deregulated markets",
    delivery: "Hybrid software plus in-house experts (CEPs), advanced automation",
    capabilities:
      "Automated supplier solicitation, one-click energy buying, e-sign contracting, recommendations validated by Certified Energy Procurement Professionals, cost and usage dashboards.",
    scale: "Division of Conservice ($422M to $516M+ revenue, 1,600 to 3,300+ staff)",
    sources:
      "Compiled from division operating records and automated procurement workflows nested within the broader Conservice LLC utility management network.",
    verification:
      "System execution models mapping their automated bidding marketplaces and internal Certified Energy Procurement (CEP) verification steps.",
  },
  {
    name: "ZTP / Kiveev",
    region: "UK",
    icon: Briefcase,
    category: "Hybrid tech-enabled",
    segment: "Enterprises with flexible power and gas contracts (UK / EU)",
    delivery: "Hybrid software from consultancy, digital risk tools",
    capabilities:
      "Digital platform for flexible contract management, real-time position and risk monitoring, budget and spend forecasting, trading and market analytics.",
    scale: "~$3M to $3.6M revenue · boutique SME · Kiveev portal built via KTP with Univ. of Kent",
    sources:
      "Sourced from UK corporate records for Zero Trace Procurement Limited and academic research updates from the University of Kent.",
    verification:
      "Historical outcomes and technical architecture of the Kiveev risk tracking portal validated via the formal Knowledge Transfer Partnership (KTP) documentation overseen by the University of Kent.",
  },
  {
    name: "Kraken.tech",
    region: "UK",
    icon: Server,
    category: "Adjacent infrastructure",
    segment: "Utilities and energy retailers (B2B platform, not energy consumers)",
    delivery: "Pure SaaS, full operating system for utilities, AI-enabled operations",
    capabilities:
      "Utility-facing operating system (billing, CIS, CRM, meter data, AI comms, flexibility, field ops). Adjacent to RA+: aimed at utilities, not corporate energy buyers.",
    scale: "$500M+ contracted ARR · $8.65B valuation · 70M+ utility accounts · 27 countries",
    sources: "Confirmed directly from Kraken's Global Press Archive.",
    verification:
      "Financial performance and capital figures sourced directly from the official demerger announcement (Octopus Energy Group to spin out Kraken at valuation of $8.65bn). Confirms the $1 Billion standalone investment round led by D1 Capital Partners, Fidelity International, and Ontario Teachers' Pension Plan, plus contracted revenue exceeding $500 Million ARR managing 70+ million accounts worldwide.",
  },
];

const categoryStyle: Record<Competitor["category"], string> = {
  "Pure SaaS / AI-first": "border-primary/40 bg-primary/5 text-primary",
  "Hybrid tech-enabled": "border-amber-500/40 bg-amber-500/5 text-amber-400",
  "Adjacent infrastructure": "border-muted-foreground/30 bg-muted/30 text-muted-foreground",
};

const takeaways = [
  {
    icon: Trophy,
    title: "Most directly comparable to RA+",
    body: "onu.energy, Seelo / Eleneo, EnergyMarketPrice and ZTP / Kiveev. onu.energy is the most AI-native, Seelo the deepest on European procurement workflow and advisory, EnergyMarketPrice the strongest on price data and white-label intelligence, ZTP / Kiveev the strongest on UK flexible contract management.",
  },
  {
    icon: Sparkles,
    title: "Where RA+ wins",
    body: "Connected knowledge across tariff, contract, meter and site context, paired with a judgement layer of energy experts. Pure software players cannot reach that depth; pure brokers cannot match the agent-native execution speed.",
  },
  {
    icon: AlertTriangle,
    title: "Data gaps to navigate",
    body: "Margins and exact client counts are not public for most peers. Best proxies: revenue estimates, managed spend, monitored sites, contracted accounts and disclosed ARR growth. Kraken stays adjacent: it sells to utilities, not to corporate energy buyers.",
  },
];

export const CompetitorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="competitors"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Competitive Landscape
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Who else is automating energy procurement
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A benchmark of eight platforms shaping the corporate energy procurement and supply
            market, grouped by delivery model. Confidence varies: most peers are private, so we
            triangulate from revenue estimates, managed spend, monitored sites and disclosed growth.
          </p>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {(Object.keys(categoryStyle) as Competitor["category"][]).map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className={`text-xs font-medium px-3 py-1 ${categoryStyle[cat]}`}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Vendor grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto mb-20">
          {competitors.map((c, idx) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.name}
                className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                        <span className="text-xs text-muted-foreground">{c.region}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`mt-2 text-[10px] font-medium px-2 py-0.5 ${categoryStyle[c.category]}`}
                      >
                        {c.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid gap-3 text-sm">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Segment
                      </p>
                      <p className="text-foreground/90 leading-snug">{c.segment}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Delivery & AI
                      </p>
                      <p className="text-foreground/90 leading-snug">{c.delivery}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Notable capabilities
                      </p>
                      <p className="text-foreground/90 leading-snug">{c.capabilities}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-3 border-t border-border/40 space-y-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-primary font-semibold mb-1">
                        Scale signals
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug">{c.scale}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Sources
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug">{c.sources}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Verification
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug">{c.verification}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Takeaways */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              What this means for RA+
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {takeaways.map((t) => {
              const Icon = t.icon;
              return (
                <Card key={t.title} className="bg-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-2">{t.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
