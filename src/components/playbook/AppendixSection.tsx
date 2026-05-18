import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { appendixPillars, supportingScorecard, roadmapSummary } from "@/data/playbook-data";
import {
  Layers,
  LineChart,
  Sparkles,
  Target,
  CheckCircle2,
  TrendingUp,
  Check,
  ChevronsUpDown,
  Map as MapIcon,
  Gauge,
  CalendarRange,
  Workflow,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { InitiativesDomain } from "./InitiativesDomain";

const pillarIcons: Record<string, React.ElementType> = {
  Unified: Layers,
  Proactive: LineChart,
  Adaptive: Sparkles,
  Layers,
  TrendingUp,
};

type AppendixItem = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

export const AppendixSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const items: AppendixItem[] = [
    {
      id: "initiatives-by-domain",
      category: "Domain Reference",
      categoryColor: "text-primary",
      title: "Initiatives by Domain",
      icon: MapIcon,
      content: <InitiativesDomain />,
    },
    {
      id: "pillar-details",
      category: "Operating Model",
      categoryColor: "text-primary",
      title: "Pillar Details",
      icon: Workflow,
      content: (
        <Accordion type="single" collapsible className="space-y-4">
          {appendixPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.pillar] || Layers;
            return (
              <AccordionItem
                key={pillar.pillar}
                value={pillar.pillar}
                className="glass-card border border-border/50 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">{pillar.pillar}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" /> Focus Areas
                      </h4>
                      <ul className="space-y-2">
                        {pillar.focus.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" /> Expected Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {pillar.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Themes</h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.themes.map((theme, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Value Proof</h4>
                      <ul className="space-y-2">
                        {pillar.valueProof.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ),
    },
    {
      id: "roadmap-summary",
      category: "Strategic Planning",
      categoryColor: "text-primary",
      title: "12-Month Roadmap Summary",
      icon: TrendingUp,
      content: (
        <div>
          <p className="text-sm text-muted-foreground mb-6">
            A concise, executive-level view of the product roadmap over the next 12 months —
            where investment is concentrated, how it aligns with strategy pillars, and how value
            and ROI will be proven.
          </p>
          <div className="bg-card rounded-xl border border-border/50 p-6 mb-6">
            <h4 className="font-bold text-foreground mb-6">12-Month Investment Focus</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {roadmapSummary.investmentPriorities.map((priority) => (
                <div key={priority.number} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-semibold text-sm">
                    {priority.number}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{priority.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {roadmapSummary.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon] || Layers;
              return (
                <AccordionItem
                  key={pillar.id}
                  value={pillar.id}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-foreground">{pillar.name}</h4>
                        <p className="text-sm text-muted-foreground">{pillar.tagline}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-primary font-semibold text-sm mb-3">12-Month Focus</h5>
                          <ul className="space-y-2">
                            {pillar.focus.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-primary font-semibold text-sm mb-3">Representative Roadmap Themes</h5>
                          <ul className="space-y-2">
                            {pillar.themes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-primary font-semibold text-sm mb-3">Customer Outcomes</h5>
                          <ul className="space-y-2">
                            {pillar.outcomes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-primary font-semibold text-sm mb-3">Value Proof</h5>
                          <ul className="space-y-2">
                            {pillar.valueProof.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ),
    },
    {
      id: "supporting-scorecard",
      category: "Tracking Progress",
      categoryColor: "text-primary",
      title: "Supporting Scorecard",
      icon: Gauge,
      content: (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportingScorecard.map((item) => (
            <Card key={item.metric} className="glass-card border-border/50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">{item.metric}</h4>
                <p className="text-sm text-muted-foreground">{item.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: "roadmap-timeline",
      category: "Delivery Horizons",
      categoryColor: "text-primary",
      title: "DRAFT Example of Roadmap Timeline",
      icon: CalendarRange,
      content: <RoadmapTimeline title="DRAFT Example of Roadmap Timeline" />,
    },
  ];

  const allOpen = openItems.length === items.length;
  const toggleAll = () => setOpenItems(allOpen ? [] : items.map((i) => i.id));

  return (
    <section
      id="appendix"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Appendix
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Energy & Supply Transformation Details
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-4">
            Deep dive into the operating model, capability evolution, quarterly plans, and
            supporting metrics.
          </p>
        </div>

        {/* Expand all */}
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" onClick={toggleAll} className="gap-2">
            <ChevronsUpDown className="w-4 h-4" />
            {allOpen ? "Collapse all" : "Expand all"}
          </Button>
        </div>

        {/* Appendix accordion */}
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-3"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="glass-card border border-border/50 rounded-xl overflow-hidden bg-card/40"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30">
                  <div className="flex items-center gap-4 text-left">
                    <Icon className={`w-4 h-4 ${item.categoryColor} shrink-0`} />
                    <div>
                      <div
                        className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${item.categoryColor}`}
                      >
                        {item.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-8 pt-2">{item.content}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
