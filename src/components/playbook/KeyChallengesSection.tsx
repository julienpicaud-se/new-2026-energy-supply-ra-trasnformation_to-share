import { Card, CardContent } from "@/components/ui/card";
import { keyChallenges } from "@/data/playbook-data";
import { AlertTriangle, Database, Upload, Clock, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  "data-fragmentation": Database,
  "ingestion-limitations": Upload,
  "operational-bottlenecks": Clock,
  "over-responsibility": Users,
};

const colorMap: Record<string, string> = {
  "data-fragmentation": "from-red-500/20 to-red-500/5 border-red-500/30",
  "ingestion-limitations": "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  "operational-bottlenecks": "from-amber-500/20 to-amber-500/5 border-amber-500/30",
  "over-responsibility": "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30",
};

const iconColorMap: Record<string, string> = {
  "data-fragmentation": "text-red-400 bg-red-500/20",
  "ingestion-limitations": "text-orange-400 bg-orange-500/20",
  "operational-bottlenecks": "text-amber-400 bg-amber-500/20",
  "over-responsibility": "text-yellow-400 bg-yellow-500/20",
};

export const KeyChallengesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="key-challenges"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Key Challenges
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Most process inefficiency comes from data heterogeneity, not functional complexity. 
            The service logic is straightforward—the true complexity lies in accessing, standardizing, and governing data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {keyChallenges.map((challenge, index) => {
            const Icon = iconMap[challenge.id] || AlertTriangle;
            return (
              <Card
                key={challenge.id}
                className={`bg-gradient-to-br ${colorMap[challenge.id]} border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${iconColorMap[challenge.id]} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {challenge.title}
                      </h3>
                      <ul className="space-y-2">
                        {challenge.issues.map((issue, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 mt-2" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Stats Callout */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">160,000</div>
            <div className="text-sm text-muted-foreground">Invoice validation issues in queue</div>
          </div>
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">~8 weeks</div>
            <div className="text-sm text-muted-foreground">Current budget creation time</div>
          </div>
          <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">D+15</div>
            <div className="text-sm text-muted-foreground">Market data delay (vs D+1 target)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
