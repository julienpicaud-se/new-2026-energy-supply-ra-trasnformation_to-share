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

      </div>
    </section>
  );
};
