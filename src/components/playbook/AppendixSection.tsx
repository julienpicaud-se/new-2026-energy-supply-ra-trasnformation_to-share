import { Card, CardContent } from "@/components/ui/card";
import { appendixPillars, supportingScorecard, roadmapSummary } from "@/data/playbook-data";
import { Layers, LineChart, Sparkles, Target, CheckCircle2, TrendingUp, Calendar, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { InitiativesDomain } from "./InitiativesDomain";

const pillarIcons: Record<string, React.ElementType> = {
  Unified: Layers,
  Proactive: LineChart,
  Adaptive: Sparkles,
  Layers: Layers,
  TrendingUp: TrendingUp,
};

export const AppendixSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="appendix"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Additional Materials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Pillar Details
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-4">
            Three interconnected pillars that define our platform vision and guide every product decision.
          </p>
        </div>

        {/* Pillar Details */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {appendixPillars.map((pillar, index) => {
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
                          <Target className="w-4 h-4 text-primary" />
                          Focus Areas
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
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Expected Outcomes
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
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* 12-Month Roadmap Summary */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Strategic Planning
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              12-Month Roadmap Summary
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              A concise, executive-level view of the product roadmap over the next 12 months. It highlights where investment is concentrated, how it aligns with strategy pillars, and how customer value and ROI will be proven.
            </p>
          </div>

          {/* Investment Priorities */}
          <div className="bg-card rounded-xl border border-border/50 p-6 mb-8">
            <h4 className="font-bold text-foreground mb-6">12-Month Investment Focus</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {roadmapSummary.investmentPriorities.map((priority) => (
                <div key={priority.number} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-semibold text-sm">
                    {priority.number}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {priority.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar Cards with Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {roadmapSummary.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon] || Layers;
              return (
                <AccordionItem
                  key={pillar.id}
                  value={pillar.id}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30 transition-colors">
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
                    <div className="px-6 pb-6 pt-2">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
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

                        {/* Right Column */}
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
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Supporting Scorecard */}
        <div>
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Metrics & KPIs
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Supporting Scorecard
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Key metrics and definitions that measure our progress and success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportingScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">{item.metric}</h4>
                  <p className="text-sm text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
