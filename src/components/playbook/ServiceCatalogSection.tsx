import { Card, CardContent } from "@/components/ui/card";
import { serviceCatalog } from "@/data/playbook-data";
import {
  Compass,
  ShoppingCart,
  Settings,
  Leaf,
  Shield,
  Database,
  Check,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  ShoppingCart,
  Settings,
  Leaf,
  Shield,
  Database,
};

export const ServiceCatalogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="service-catalog"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Service Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            One Practice, Six Service Lines
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {serviceCatalog.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {serviceCatalog.services.map((service) => {
            const Icon = iconMap[service.icon] || Compass;
            return (
              <Card
                key={service.id}
                className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary uppercase tracking-wider mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto pt-4 border-t border-border/50">
                    {service.offerings.map((offering, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-foreground/90"
                      >
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
