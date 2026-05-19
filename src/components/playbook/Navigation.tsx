import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Download, Maximize2, ChevronRight, Layers, ChevronDown, FileDown, Map } from "lucide-react";
import { exportToPptx } from "@/lib/pptx-export";
import { domainRoadmaps } from "@/data/domain-roadmaps";
import { playbookGroups, playbookFlow } from "@/data/playbook-flow";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  onPresentationMode?: () => void;
}

export const Navigation = ({ onPresentationMode }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;
      for (let i = playbookFlow.length - 1; i >= 0; i--) {
        const element = document.getElementById(playbookFlow[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(playbookFlow[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportToPptx();
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const activeGroup = playbookFlow.find((s) => s.id === activeSection)?.group;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-primary-foreground font-bold text-sm">SE</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground text-sm">Energy & Supply Transformation</div>
            </div>
          </div>

          {/* Desktop Navigation - Grouped Dropdowns */}
          <div className="hidden lg:flex items-center gap-1 bg-muted/50 rounded-full p-1 border border-border/30">
            {playbookGroups.map((group) => {
              const isActive = activeGroup === group.name;
              return (
                <DropdownMenu key={group.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {group.name}
                      <ChevronDown className="w-3 h-3 opacity-70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-background border-border">
                    {group.items.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`cursor-pointer ${
                          activeSection === item.id ? "text-primary font-medium" : ""
                        }`}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            {/* Domains dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/80 flex items-center gap-1">
                  Domains
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-background border-border">
                <Link to="/detailed-roadmap">
                  <DropdownMenuItem className="cursor-pointer">
                    <Map className="w-4 h-4 mr-2" />
                    Roadmap Overview
                  </DropdownMenuItem>
                </Link>
                <Link to="/domain-comparison">
                  <DropdownMenuItem className="cursor-pointer">
                    <Layers className="w-4 h-4 mr-2" />
                    Compare All Domains
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                {domainRoadmaps.map((domain) => (
                  <Link key={domain.id} to={`/domain/${domain.id}`}>
                    <DropdownMenuItem className="cursor-pointer">
                      {domain.domain}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-muted/50"
              onClick={onPresentationMode}
              title="Presentation Mode"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>

            <Button
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-md shadow-primary/20"
              size="sm"
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download className="w-4 h-4" />
              {isExporting ? "Exporting..." : "Export PPTX"}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-background/95 backdrop-blur-md overflow-y-auto">
                <SheetHeader className="text-left pb-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">SE</span>
                    </div>
                    <SheetTitle className="text-foreground text-sm">Energy & Supply Transformation</SheetTitle>
                  </div>
                </SheetHeader>

                <div className="flex flex-col gap-4 py-6">
                  {playbookGroups.map((group) => (
                    <div key={group.name}>
                      <p className="px-3 text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">
                        {group.name}
                      </p>
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeSection === item.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border/50">
                    <p className="px-3 text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">
                      Domains
                    </p>
                    <Link
                      to="/detailed-roadmap"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-muted"
                    >
                      <span className="flex items-center gap-2"><Map className="w-4 h-4" />Roadmap Overview</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                    <Link
                      to="/domain-comparison"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-muted"
                    >
                      <span className="flex items-center gap-2"><Layers className="w-4 h-4" />Compare All Domains</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                    {domainRoadmaps.map((domain) => (
                      <Link
                        key={domain.id}
                        to={`/domain/${domain.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <span>{domain.domain}</span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onPresentationMode?.();
                    }}
                  >
                    <Maximize2 className="w-4 h-4" />
                    Presentation Mode
                  </Button>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleExport();
                    }}
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4" />
                    {isExporting ? "Exporting..." : "Export PPTX"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
