import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Database, Library, FileText, Check, Clock, HelpCircle } from "lucide-react";

type Status = "in-flight" | "adjacent" | "open";

type Phase = {
  number: string;
  title: string;
  tagline: string;
  taglineColor: string;
  icon: React.ElementType;
  status: Status;
  statusLabel: string;
  timingLabel: string;
  timing: string;
  description: string;
  rationale: string[];
  logic: string;
};

const statusStyles: Record<Status, { wrap: string; icon: React.ElementType }> = {
  "in-flight": {
    wrap: "bg-primary/10 border border-primary/40 text-primary",
    icon: Clock,
  },
  adjacent: {
    wrap: "bg-amber-500/10 border border-amber-500/40 text-amber-400",
    icon: Check,
  },
  open: {
    wrap: "bg-muted/40 border border-border/60 text-muted-foreground",
    icon: HelpCircle,
  },
};

const phases: Phase[] = [
  {
    number: "Phase 1",
    title: "Invoice Processing",
    tagline: "Urgent, no-regret",
    taglineColor: "text-primary",
    icon: FileText,
    status: "in-flight",
    statusLabel: "IN FLIGHT",
    timingLabel: "TIMING",
    timing: "MVP target Q4 2025 / Q1 2026",
    description:
      "Re-platform invoice ingestion, pseudo-bill generation, and validation into RA+. This is point A — the workflow that anchors the entire Energy & Supply data foundation.",
    rationale: [
      "Clears the largest operational backlog in Managed Services today",
      "Establishes the as-received data lake, identity registry, and tariff content",
      "Unlocks D+1 pseudo-bills and automated dispute workflows",
      "Builds the data spine every downstream Energy & Supply capability depends on",
    ],
    logic:
      "Foundation for Phase 2 and 3. Sets the data, identity, and tariff patterns reused across budgeting, sourcing, and risk.",
  },
  {
    number: "Phase 2",
    title: "Budget & Tariff Intelligence",
    tagline: "Cross-COE feeder",
    taglineColor: "text-primary",
    icon: Library,
    status: "adjacent",
    statusLabel: "ADJACENT STRATEGIC",
    timingLabel: "TIMING",
    timing: "Sequenced with Sourcing & Advisory",
    description:
      "Turn the validated invoice and tariff data into real-time budgets and reforecasts. Connects Managed Services, advisory, and client portfolios into one budgeting backbone.",
    rationale: [
      "Cuts budget cycles from ~8 weeks to under 2 weeks",
      "Strong overlap with sourcing and advisory data needs",
      "Powers Sera reasoning with codified tariffs, assumptions, and outcomes",
      "Reuses the data patterns established by invoice processing in Phase 1",
    ],
    logic:
      "Builds on the invoice data foundation. Co-evolves with the sourcing and advisory workstream.",
  },
  {
    number: "Phase 3",
    title: "Sourcing & Risk Platform",
    tagline: "Build vs. integrate decision",
    taglineColor: "text-primary",
    icon: Database,
    status: "open",
    statusLabel: "OPEN QUESTION",
    timingLabel: "TIMING",
    timing: "Sequencing TBD",
    description:
      "Unify sourcing execution, contract management, and supply-side risk signals on RA+. A no-regret strategic move, but the shape is still being defined.",
    rationale: [
      "Confirmed as one of the no-regret strategic moves",
      "Build vs. partner vs. integrate not yet decided",
      "Surface area within RA+ vs. standalone module to be scoped",
      "Differentiation vs. adjacent supply products must be clear",
    ],
    logic:
      "Depends on Phase 1 invoice and Phase 2 tariff foundations, plus a clearer commercial case.",
  },
];

export const EnergySupplyPhasingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="energy-supply-phasing"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Sequencing · Axis: Over Time
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Phasing: Three No-Regret Moves
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            A clear order of operations for the Energy & Supply build inside RA+. Invoice processing
            first — point A — then budget & tariff intelligence, then sourcing & risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const status = statusStyles[phase.status];
            const StatusIcon = status.icon;
            return (
              <Card
                key={phase.number}
                className="glass-card border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${status.wrap}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {phase.statusLabel}
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {phase.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{phase.title}</h3>
                  <div className={`text-sm font-semibold mb-5 ${phase.taglineColor}`}>
                    {phase.tagline}
                  </div>

                  <div className="border-l-2 border-primary/60 bg-muted/30 rounded-r-md px-4 py-3 mb-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      {phase.timingLabel}
                    </div>
                    <div className="text-sm font-medium text-foreground">{phase.timing}</div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{phase.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-foreground mb-3">Why this, why now</h4>
                    <ul className="space-y-2.5">
                      {phase.rationale.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-5 border-t border-border/40">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Sequencing Logic
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.logic}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
