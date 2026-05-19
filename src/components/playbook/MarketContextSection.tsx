import { Card, CardContent } from "@/components/ui/card";
import { marketDynamics } from "@/data/playbook-data";
import {
  Zap,
  TrendingUp,
  Layers,
  Sparkles,
  Leaf,
  Shield,
  TrendingDown,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  TrendingUp,
  Layers,
  Sparkles,
  Leaf,
  Shield,
  TrendingDown,
};

export const MarketContextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="market-context"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Market Context
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Forces Shaping Client Needs
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {marketDynamics.intro}
          </p>
        </div>

        {/* Market forces grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {marketDynamics.forces.map((force, index) => {
            const Icon = iconMap[force.icon] || Zap;
            return (
              <Card
                key={force.id}
                className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {force.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {force.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Client triggers */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              How Client Pain Translates Into Engagement
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Three signals from clients—three integrated responses from the practice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {clientTriggers.map((item) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <Card
                  key={item.id}
                  className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm italic text-foreground/90 mb-4 leading-relaxed">
                      "{item.trigger}"
                    </p>
                    <div className="flex items-start gap-2 mt-auto pt-4 border-t border-border/50">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.response}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Competitive landscape */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
              Competitive Landscape
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Serious Players, Differentiated Position
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              {competitiveLandscape.intro}
            </p>
          </div>

          {/* Competitors */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {competitiveLandscape.competitors.map((comp) => (
              <Card key={comp.name} className="bg-card border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {comp.name}
                      </h4>
                      <span className="text-xs text-primary uppercase tracking-wider">
                        {comp.scope}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {comp.strength}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Differentiators callout */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Why We Win
                </h4>
                <p className="text-sm text-muted-foreground italic">
                  {competitiveLandscape.positioning}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {competitiveLandscape.differentiators.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
