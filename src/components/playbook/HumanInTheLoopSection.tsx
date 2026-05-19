import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  MessageSquareQuote,
  Bot,
  UserCog,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const profiles = [
  {
    tag: "Give Me the AI",
    title: "Self-Serve Operator",
    icon: Bot,
    description:
      "Power users who want to grasp the full self-serve capabilities of RA+ — running analytics, simulations, and decisions on their own.",
    points: [
      "RA+ as their primary workspace",
      "AI agents execute analytics and workflows",
      "Human-in-the-loop available on-demand for edge cases",
      "Expert services billed by exception, not by default",
    ],
  },
  {
    tag: "Walk With Me",
    title: "Expert-Guided Decision Maker",
    icon: UserCog,
    description:
      "Clients who want a human in the loop to provide deep explainers and help them navigate complex, high-stakes decisions.",
    points: [
      "RA+ as a shared workspace between client and expert",
      "Human-in-the-loop by default on material decisions",
      "Experts translate AI output into recommendations",
      "Outcome-based engagement, not tool access",
    ],
  },
];

const judgementRoles = [
  {
    icon: ShieldCheck,
    title: "Validation",
    description:
      "Experts verify AI outputs against market reality, contract nuance, and client context before action.",
  },
  {
    icon: Lightbulb,
    title: "Interpretation",
    description:
      "Translate signals, anomalies, and scenarios into business meaning the client can act on.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Translation",
    description:
      "Frame trade-offs, regulatory exposure, and downside cases in language executives understand.",
  },
  {
    icon: MessageSquareQuote,
    title: "Executive Communication",
    description:
      "Package insight into board-ready narratives, recommendations, and defensible decisions.",
  },
];

const shift = [
  {
    label: "Before",
    items: [
      "Experts spend most of their time gathering and reconciling data",
      "Analysis is manual, slow, and inconsistent across clients",
      "Judgement is buried inside execution work",
    ],
  },
  {
    label: "After",
    items: [
      "RA+ agents handle gathering, reconciliation, and first-pass analysis",
      "Experts spend 80%+ of their time on judgement and client dialogue",
      "Judgement becomes the visible, billable layer",
    ],
  },
];

export const HumanInTheLoopSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="human-in-the-loop"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Human-in-the-Loop
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            The Judgement Layer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            AI executes. Humans apply judgement. RA+ pairs agent-native execution with expert services so every client gets the right balance of automation and advisory.
          </p>
        </div>

        {/* Hero quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
                    "Service advisors become judgement layers — validating, interpreting, translating risk, and communicating to executives — while AI handles execution."
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">
                    Inspired by Sequoia — Services: The New Software
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two client profiles */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
            Two Client Profiles, One Platform
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {profiles.map((p) => {
              const Icon = p.icon;
              return (
                <Card
                  key={p.tag}
                  className="bg-card border-border/50 hover:border-primary/40 transition-all"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] text-primary uppercase tracking-wider font-semibold">
                          {p.tag}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-foreground">
                          {p.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <ul className="space-y-2">
                      {p.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Four judgement roles */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
            Four Judgement Roles Our Experts Own
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {judgementRoles.map((r) => {
              const Icon = r.icon;
              return (
                <Card
                  key={r.title}
                  className="bg-card border-border/50 hover:border-primary/40 transition-all"
                >
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground mb-2">
                      {r.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {r.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Operating model shift */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
            The Operating Model Shift
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {shift.map((col) => (
              <Card
                key={col.label}
                className={
                  col.label === "After"
                    ? "border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                    : "bg-card border-border/50"
                }
              >
                <CardContent className="p-6">
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold mb-3 block ${
                      col.label === "After" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {col.label}
                  </span>
                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Moat */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <CardContent className="p-6 sm:p-7 text-center">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Why this is our moat
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We don't sell tools or hours — we sell outcomes. RA+ provides agent-native execution; our experts provide the judgement layer clients can't get from software alone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
