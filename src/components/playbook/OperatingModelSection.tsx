import { Card, CardContent } from "@/components/ui/card";
import { operatingModel } from "@/data/playbook-data";
import { Users, Bot, Zap, Database, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Bot,
  Zap,
  Database,
};

export const OperatingModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="operating-model"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Operating Model
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Experts Supported by Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {operatingModel.intro}
          </p>
        </div>

        {/* Stack visualization */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-4">
            {operatingModel.layers.map((layer, index) => {
              const Icon = iconMap[layer.icon] || Users;
              const opacity = 1 - index * 0.12;
              return (
                <Card
                  key={layer.id}
                  className="bg-gradient-to-r from-primary/5 via-card to-card border-border/50 hover:border-primary/40 transition-all"
                  style={{ marginLeft: `${index * 24}px`, marginRight: `${index * 24}px` }}
                >
                  <CardContent className="p-6 flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0"
                      style={{ opacity }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {layer.title}
                        </h3>
                        <span className="text-xs text-primary uppercase tracking-wider">
                          {layer.role}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground mb-5">
                Operating Principles
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {operatingModel.principles.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{p}</span>
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
