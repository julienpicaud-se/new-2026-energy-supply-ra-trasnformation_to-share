import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Database,
  FileSearch,
  Workflow,
  Share2,
  Sparkles,
  Layers,
  ShieldCheck,
  Users,
  Check,
} from "lucide-react";

const useCases = [
  {
    icon: FileSearch,
    title: "Validation & Anomaly Detection",
    description:
      "Every invoice parsed, normalized, and checked against contract, tariff, and consumption. Anomalies surfaced before they hit the GL — not three months later.",
  },
  {
    icon: Workflow,
    title: "Pseudo-Bills & Backlog Recovery",
    description:
      "Generate pseudo-bills where utilities lag, clear the 160k+ invoice queue, and keep budget actuals current without waiting on supplier paper.",
  },
  {
    icon: Share2,
    title: "Cross-Functional Data Reuse",
    description:
      "Invoice data becomes the spine for budgeting, sourcing, sustainability, and risk. One source of truth, many downstream agents and use cases.",
  },
];

const profiles = [
  {
    tag: "FULL SELF-SERVE",
    title: "Give Me",
    description:
      "Clients with internal AP and energy teams who want to ingest, validate, and reconcile invoices themselves inside RA+.",
  },
  {
    tag: "HYBRID",
    title: "Help Me",
    description:
      "Clients who run day-to-day on the platform but rely on Schneider for exceptions, disputes, and complex tariff structures.",
  },
  {
    tag: "FULL SERVICE",
    title: "Do It For Me",
    description:
      "Clients who continue to rely on Schneider Managed Services for end-to-end invoice operations, now delivered through RA+ and Sera.",
  },
];

const moatPoints = [
  "Bring contract, tariff, meter, and site context into RA+, not just OCR text",
  "Make practitioner judgment a first-class signal the platform learns from",
  "Expose the enriched invoice context to Sera and downstream agents",
  "Right to win comes from the combination of data, tariff expertise, and scale",
];

const principles = [
  {
    icon: Sparkles,
    title: "Agent-native, not OCR-plus",
    description:
      "Built on the RA+ agentic framework. Sera reasons over the invoice, not just extracts fields. Replicating today's OCR cheaper is not the goal.",
  },
  {
    icon: Layers,
    title: "Embedded in the energy workflow",
    description:
      "Invoice Processing 2.0 is the foundation of budgeting, sourcing, and sustainability — not a standalone AP tool bolted onto the side.",
  },
  {
    icon: ShieldCheck,
    title: "Differentiated within S&S",
    description:
      "Clearly defensible against generic AP automation and adjacent S&S tooling, so re-platforming is justified in budget reviews.",
  },
  {
    icon: Users,
    title: "Anchored on real users",
    description:
      "Validate scope with Managed Services practitioners and a small set of multi-site industrial clients before broadening rollout.",
  },
];

export function InvoiceProcessingVisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="invoice-processing-vision" className="py-24 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <div className="text-primary font-semibold tracking-wider text-sm mb-4">
            PHASE 1 DEEP DIVE · AXIS: DATA SPINE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Invoice Processing 2.0
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Re-platform invoice processing into RA+ as a differentiated, agent-ready
            capability. Not a lift-and-shift, not a tab, not a faster version of today.
          </p>
        </div>

        {/* North Star */}
        <Card className="mb-12 border-primary/40 bg-primary/5">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-5 h-5 text-primary" />
              <div className="text-primary font-semibold tracking-wider text-xs">
                NORTH STAR
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              Invoice Processing 2.0 turns every utility bill into an enriched,
              agent-ready context object inside RA+ — blending tariff, contract, meter,
              and site knowledge that only Schneider can bring.
            </p>
          </CardContent>
        </Card>

        {/* Core Use Cases */}
        <h3 className="text-2xl font-bold mb-6">Core Use Cases</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {useCases.map((uc) => (
            <Card key={uc.title} className="bg-card/50">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center mb-6">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3">{uc.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {uc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Engagement Profiles */}
        <h3 className="text-2xl font-bold mb-2">Client Engagement Profiles</h3>
        <p className="text-sm text-muted-foreground mb-6">
          One platform, three ways to consume it. Designed to open new market segments
          we cannot serve today.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {profiles.map((p) => (
            <Card key={p.title} className="bg-card/50">
              <CardContent className="p-6">
                <div className="text-primary font-semibold tracking-wider text-xs mb-2">
                  {p.tag}
                </div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Moat */}
        <Card className="mb-16 bg-card/50">
          <CardContent className="p-8">
            <div className="text-primary font-semibold tracking-wider text-xs mb-3">
              DEFENSIBILITY
            </div>
            <h3 className="text-2xl font-bold mb-3">The Moat</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              OCR and bill capture get commoditized fast. Our edge is the tariff,
              contract, and site context that pure software players cannot reach.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {moatPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-md border-l-2 border-primary bg-background/40"
                >
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Design Principles */}
        <h3 className="text-2xl font-bold mb-6">Design Principles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <Card key={p.title} className="bg-card/50">
              <CardContent className="p-6 flex gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
