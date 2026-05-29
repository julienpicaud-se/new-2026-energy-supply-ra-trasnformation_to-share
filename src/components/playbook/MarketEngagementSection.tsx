import { Card, CardContent } from "@/components/ui/card";
import { clientTriggers } from "@/data/playbook-data";
import {
  Zap,
  TrendingUp,
  Layers,
  Sparkles,
  Leaf,
  Shield,
  TrendingDown,
  ArrowRight,
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


export const MarketEngagementSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="market-engagement"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Client triggers */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              How Client Pain Translates Into Engagement
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Three signals from clients, three integrated responses from the practice.
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
      </div>
    </section>
  );
};

