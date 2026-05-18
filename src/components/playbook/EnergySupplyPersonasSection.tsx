import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, ArrowRight } from "lucide-react";

const personas = [
  {
    role: "Energy / Supply Manager",
    tag: "PRIMARY",
    tagClass: "bg-primary/15 text-primary border-primary/30",
    context: "Client-side operator, 1 to 50 sites",
    description:
      "Owns day-to-day energy spend and contract performance. Validates invoices, chases discrepancies, and answers leadership questions about cost. In RA+ this role shifts from spreadsheet wrangling to reviewing Sera-generated exceptions and approvals.",
    jobs: [
      "Trust that every invoice has been validated against contract and tariff",
      "Spot billing errors and recover refunds before they age out",
      "Answer 'why did costs move?' in minutes, not days",
      "Track budget vs. actuals across sites without rebuilding the model",
      "Hand auditable numbers to finance and leadership",
    ],
  },
  {
    role: "Data Operations Analyst",
    tag: "SECONDARY",
    tagClass: "bg-primary/10 text-primary/90 border-primary/20",
    context: "SE internal or client power-user, 50 to 500+ sites",
    description:
      "Onboards meters, maps accounts to sites, and keeps the identity registry clean. In RA Classic this role absorbs heavy manual reconciliation. In RA+ it shrinks to exception handling and structural changes.",
    jobs: [
      "Onboard new accounts and meters in minutes, not weeks",
      "Resolve identity and hierarchy gaps before they break reporting",
      "Trust that ingested invoice and interval data flow end-to-end",
      "Manage hundreds of sites without bespoke spreadsheets",
    ],
  },
  {
    role: "Sourcing / Procurement Lead",
    tag: "TERTIARY",
    tagClass: "bg-muted text-muted-foreground border-border",
    context: "Client-side or SE advisory, portfolio level",
    description:
      "Runs RFPs, negotiates supply contracts, and manages renewals across the portfolio. Needs codified tariffs, clean usage history, and risk signals to time the market and structure deals.",
    jobs: [
      "See contract expirations and renewal windows across the portfolio",
      "Model supplier offers against codified tariff structures",
      "Tie sourcing decisions to validated usage and budget impact",
      "Surface market and supply risk signals in one view",
    ],
  },
  {
    role: "Sustainability / ESG Lead",
    tag: "TERTIARY",
    tagClass: "bg-muted text-muted-foreground border-border",
    context: "Client-side, portfolio level",
    description:
      "Cares about energy and supply data insofar as it feeds Scope 2 reporting, electricity matching, and decarbonization targets. Needs the numbers right, the provenance clear, and the inputs audit-ready.",
    jobs: [
      "Feed Scope 2 reporting from the same validated invoice data",
      "Trace every emissions number back to source records",
      "Track decarbonization progress against portfolio targets",
      "One reporting surface across spend, usage, and emissions",
    ],
  },
  {
    role: "Executive / VP of Energy",
    tag: "INFORM",
    tagClass: "bg-muted/60 text-muted-foreground border-border",
    context: "Client-side, consumes outcomes only",
    description:
      "Receives dashboards and quarterly briefings. Never touches an invoice but makes the investment, sourcing, and decarbonization decisions that depend on this data being right.",
    jobs: [
      "See verified spend, usage, and savings against targets",
      "Confidence that the numbers behind every decision are trustworthy",
      "One portfolio view across cost, risk, and emissions",
      "Actionable insights, not raw operational noise",
    ],
  },
  {
    role: "Managed Services Practitioner",
    tag: "INTERNAL",
    tagClass: "bg-primary/10 text-primary/90 border-primary/20",
    context: "SE internal delivery team",
    description:
      "Delivers the service today through manual collection, validation, and reporting. In RA+ this role moves from execution to oversight: reviewing agent output, handling escalations, and advising clients on what the data is saying.",
    jobs: [
      "Spend time on advisory work, not manual data chasing",
      "Handle exceptions surfaced by Sera, not every invoice",
      "Scale the book of business without proportional effort",
      "Bring sharper insight to client conversations",
    ],
  },
];

export const EnergySupplyPersonasSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="energy-supply-personas"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Personas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Six Roles, One Delivery Sequence
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Six roles interact with Energy & Supply. We design for all of them, but in a deliberate
            sequence: the Energy / Supply Manager's daily experience drives the primary UX, with the
            Data Ops Analyst's tooling layered behind through progressive disclosure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {personas.map((p) => (
            <Card key={p.role} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{p.role}</h3>
                  <span
                    className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.tagClass}`}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{p.context}</p>
                <p className="text-sm text-foreground/85 leading-relaxed mb-4">{p.description}</p>
                <ul className="space-y-1.5">
                  {p.jobs.map((j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <ArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                      <span>{j}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-5">
            <p className="text-sm text-foreground/90 leading-relaxed">
              <span className="text-primary font-semibold">Design sequence principle.</span> Build
              the Energy / Supply Manager's experience first — it is the highest-frequency,
              highest-stakes interaction. Data Ops Analyst tooling layers behind through progressive
              disclosure. Sourcing, Sustainability, and Executive personas consume validated outputs
              through existing RA+ reporting surfaces. Managed Services Practitioners operate the
              oversight layer that wraps the whole system.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
