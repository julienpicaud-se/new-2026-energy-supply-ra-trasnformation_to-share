import { Card, CardContent } from "@/components/ui/card";
import { engagementPlays } from "@/data/playbook-data";
import { DoorOpen, Target, Network, Anchor, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  DoorOpen,
  Target,
  Network,
  Anchor,
};

export const EngagementPlaysSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="engagement-plays"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Client Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            How Clients Enter and Expand
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {engagementPlays.intro}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
            {engagementPlays.stages.map((stage, index) => {
              const Icon = iconMap[stage.icon] || DoorOpen;
              const isLast = index === engagementPlays.stages.length - 1;
              return (
                <div key={stage.id} className="relative flex">
                  <Card className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 flex-1">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-[10px] text-primary uppercase tracking-wider font-semibold">
                            Stage {index + 1} — {stage.stage}
                          </span>
                          <h3 className="text-base font-semibold text-foreground leading-tight">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                          Typical signals
                        </p>
                        <ul className="space-y-1.5">
                          {stage.examples.map((ex, i) => (
                            <li
                              key={i}
                              className="text-xs text-foreground/85 italic leading-relaxed"
                            >
                              “{ex}”
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-4 border-t border-border/50">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                          Services in play
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.typicalServices.map((s, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center px-1">
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
