import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe2,
  Workflow,
  SlidersHorizontal,
  Database,
  ShieldCheck,
  Users,
  FileCheck2,
  Leaf,
  Bell,
  LayoutGrid,
  Building2,
  Network,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

/**
 * Appendix-only section synthesizing the "360° Energy Vision",
 * Onboarding Flow, Scenario Modeling, plus supporting content
 * derived from the Coopérative U & Auchan RFPs and the internal vision note.
 *
 * IMPORTANT: This content must live ONLY in the Appendix.
 */
export const Energy360VisionAppendix = () => {
  return (
    <div className="space-y-10">
      {/* Intro */}
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Globe2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              A 360° View on Energy for Our Clients
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Converging Budget 2.0, commodity reports, renewables (PPAs, EACs), carbon cost
              (EU ETS as a premium on gas), and interval data into a single past/present/future
              view — across every energy source, with detailed electricity breakdown and
              potential energy-as-revenue streams. Validated against enterprise RFP signals
              from European retail (Coopérative U, Auchan Retail France).
            </p>
          </div>
        </div>
      </div>

      {/* 360° pillars */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-primary" /> The Six Convergence Layers
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: TrendingUp,
              title: "Budget 2.0",
              body: "Rolling forecasts, multi-scenario budgets, client-editable consumption curves and cost components.",
            },
            {
              icon: Sparkles,
              title: "Commodity Intelligence",
              body: "Live commodity reports (power, gas, EUA) feeding price assumptions across actuals, forecasts and budgets.",
            },
            {
              icon: Leaf,
              title: "Renewables & EACs",
              body: "PPAs, GOs/RECs, EACs allocation — visible by site, contract and reporting period.",
            },
            {
              icon: ShieldCheck,
              title: "Carbon Cost",
              body: "EU ETS modelled as a premium on top of gas costs; scope 1 & 2 carbon footprint by site and asset.",
            },
            {
              icon: Database,
              title: "Interval Data",
              body: "Sub-hourly meter and sub-meter data, GRD retrieval via mandates, anomaly detection on load curves.",
            },
            {
              icon: Building2,
              title: "Asset & Patrimoine",
              body: "Hierarchical site tree (region → département → store), refrigeration / lighting / HVAC, consumption-by-usage allocation keys.",
            },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="glass-card border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <h5 className="font-semibold text-foreground">{p.title}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Onboarding flow */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Workflow className="w-5 h-5 text-primary" /> Client Onboarding Flow
        </h4>
        <p className="text-sm text-muted-foreground mb-5">
          A structured path from kickoff to first value, designed to absorb the spine of any
          enterprise RFP (multi-site, multi-fluid, multi-profile) within weeks rather than
          quarters.
        </p>
        <ol className="relative border-l border-border/60 ml-3 space-y-6">
          {[
            {
              title: "1 · Discovery & Scoping",
              body: "Stakeholder map (Exploitation, Achats Énergies, QSSE, Finance), perimeter, fluids in scope, regulatory drivers (Décret Tertiaire, OPERAT, ISO 50001, DEET).",
            },
            {
              title: "2 · Site & Asset Tree Setup",
              body: "Import hierarchical patrimoine (region → département → site → asset), tag refrigeration / lighting / HVAC / process loads, define allocation keys.",
            },
            {
              title: "3 · Contracts, Meters & Mandates",
              body: "Capture contracts, PCE/PRM/EFA references, sub-meters; collect GRD mandates to automate interval-data retrieval.",
            },
            {
              title: "4 · Data Ingestion & Reconciliation",
              body: "Invoices (PDF + EDI), GRD curves, IoT sub-meters, EACs/PPAs, commercial KPIs (CA, footfall). Automated reconciliation against contracts.",
            },
            {
              title: "5 · Baselines & Carbon",
              body: "Set energy baselines per usage, compute scope 1 & 2 footprint, attach EU ETS premium on gas, generate weekly performance reports.",
            },
            {
              title: "6 · Budget 2.0 & Forecasts",
              body: "Build first rolling budget; enable client self-service edits to consumption forecasts and cost components.",
            },
            {
              title: "7 · Activation & Training",
              body: "Role-based dashboards live, alerts configured, GED populated, training sessions delivered, dedicated Pôle Efficience interlocutor named.",
            },
          ].map((s) => (
            <li key={s.title} className="ml-6">
              <span className="absolute -left-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <h5 className="font-semibold text-foreground">{s.title}</h5>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Scenario modeling */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary" /> Scenario Modeling (What-If)
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Commodity Sensitivity",
              body: "Stress power, gas and EUA curves; see budget and margin impact by site and contract.",
            },
            {
              title: "Consumption Forecast Edits",
              body: "Self-service overrides on volumes per site / usage; instant recompute of budgets and carbon.",
            },
            {
              title: "Contract Mix",
              body: "Compare fixed vs indexed vs PPA blends; visualise hedge coverage and residual exposure.",
            },
            {
              title: "Renewables & EAC Allocation",
              body: "Re-allocate PPAs and EACs across entities; track scope 2 reduction and regulatory compliance.",
            },
            {
              title: "Efficiency Programs",
              body: "Simulate HVAC, lighting, refrigeration retrofits with payback and Décret Tertiaire trajectory.",
            },
            {
              title: "Carbon Trajectory",
              body: "Model Plan Climat targets (e.g. −46% scope 1&2) with annual gates and intervention plans.",
            },
          ].map((s) => (
            <Card key={s.title} className="border-border/50">
              <CardContent className="p-5">
                <h5 className="font-semibold text-foreground mb-1">{s.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Self-service capabilities */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" /> Self-Service Capabilities
        </h4>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              id: "ss-forecast",
              title: "Edit Consumption Forecasts",
              body: "Clients can override forecasted volumes by site, usage or period — directly feeding budgets and carbon reporting.",
            },
            {
              id: "ss-cost",
              title: "Tune Cost Components in Alternative Scenarios",
              body: "Toggle commodity, transport, taxes, EUA premium assumptions; compare scenarios side-by-side.",
            },
            {
              id: "ss-alerts",
              title: "Configure Alerts & Thresholds",
              body: "Anomaly detection on consumption, invoice variance, contract breaches, sustainability KPIs.",
            },
            {
              id: "ss-reports",
              title: "Build and Schedule Reports",
              body: "Weekly performance packs, OPERAT exports, board-ready ESG views — generated on a schedule.",
            },
          ].map((i) => (
            <AccordionItem
              key={i.id}
              value={i.id}
              className="glass-card border border-border/50 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-3 hover:no-underline hover:bg-muted/40">
                <span className="font-semibold text-foreground">{i.title}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-sm text-muted-foreground">
                {i.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Risk management back-office */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Network className="w-5 h-5 text-primary" /> Risk Management Back-Office Digitization
        </h4>
        <Card className="border-border/50">
          <CardContent className="p-5 space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Today the risk management team still spends significant time on copy/paste, data
              extraction, transformation and ingestion — client by client. Targets for
              automation:
            </p>
            <ul className="space-y-2">
              {[
                "Standardised connectors for GRD, suppliers and ETRM systems (no more per-client scripts)",
                "Automated extraction & normalization of contracts, fixings and hedges",
                "Position keeping and exposure dashboards refreshed intraday",
                "Audit trail and four-eyes validation built into the workflow",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* RFP alignment */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-primary" /> Enterprise RFP Alignment
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                Coopérative U — DA2025-026
              </div>
              <h5 className="font-semibold text-foreground mb-2">Energy & Patrimoine SaaS</h5>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Multi-profile (Associés, Exploitation, Entités, Achats, QSSE)</li>
                <li>• GEP regions → départements → stores hierarchy</li>
                <li>• GRD retrieval via mandates, patrimonial data</li>
                <li>• Décret Tertiaire / OPERAT compliance</li>
                <li>• Budget simulation, carbon, alerts, GED</li>
                <li>• RGPD / ISO hosting, ticketing, optional modules</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                Auchan Retail France
              </div>
              <h5 className="font-semibold text-foreground mb-2">Plan Climat 2030 Platform</h5>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• −46% scope 1 & 2 trajectory tracking</li>
                <li>• Multi-fluid, contracts, meters & sub-meters</li>
                <li>• Commercial KPIs (CA, footfall) cross-analysis</li>
                <li>• Consumption-by-usage with allocation keys</li>
                <li>• Weekly performance, invoice storage (EFA refs)</li>
                <li>• DEET, ISO 50001, GED, ~25 training sessions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alerts & compliance */}
      <div>
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" /> Alerts, Compliance & Reporting
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "OPERAT submissions & Décret Tertiaire trajectory",
            "ISO 50001 / DEET evidence pack",
            "Invoice variance & contract breach alerts",
            "Load-curve anomalies & consumption drift",
            "Carbon scope 1 & 2 monthly close",
            "GED with full audit trail & retention",
          ].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-border/50 bg-card/40 p-4 text-sm text-muted-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
