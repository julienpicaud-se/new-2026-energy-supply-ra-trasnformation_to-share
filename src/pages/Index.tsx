import { useState } from "react";
import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { KeyChallengesSection } from "@/components/playbook/KeyChallengesSection";
import { MarketContextSection } from "@/components/playbook/MarketContextSection";
import { ServiceCatalogSection } from "@/components/playbook/ServiceCatalogSection";
import { OperatingModelSection } from "@/components/playbook/OperatingModelSection";
import { EngagementPlaysSection } from "@/components/playbook/EngagementPlaysSection";
import { DataRequirementsSection } from "@/components/playbook/DataRequirementsSection";
import { ExistingToolsSection } from "@/components/playbook/ExistingToolsSection";
import { StrategicPillars } from "@/components/playbook/StrategicPillars";
import { ObjectivesSection } from "@/components/playbook/ObjectivesSection";
import { ValueProofSection } from "@/components/playbook/ValueProofSection";

import { StartStopMatrix } from "@/components/playbook/StartStopMatrix";
import { ExecutiveNarrativeSection } from "@/components/playbook/ExecutiveNarrativeSection";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
import { EnergySupplyTransformationSection } from "@/components/playbook/EnergySupplyTransformationSection";
import { EnergySupplyJTBDSection } from "@/components/playbook/EnergySupplyJTBDSection";
import { EnergySupplyPhasingSection } from "@/components/playbook/EnergySupplyPhasingSection";
import { PresentationMode } from "@/components/playbook/PresentationMode";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const Index = () => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  // Enable keyboard navigation
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Navigation onPresentationMode={() => setIsPresentationMode(true)} />
      <PresentationMode 
        isActive={isPresentationMode} 
        onClose={() => setIsPresentationMode(false)} 
      />
      <HeroSection />
      <ExecutiveNarrativeSection />
      <ExecutiveSummary />
      <EnergySupplyTransformationSection />
      <EnergySupplyJTBDSection />
      <EnergySupplyPhasingSection />
      <MarketContextSection />
      <ServiceCatalogSection />
      <OperatingModelSection />
      <EngagementPlaysSection />
      <KeyChallengesSection />
      <DataRequirementsSection />
      <ExistingToolsSection />
      <StrategicPillars />
      <ObjectivesSection />
      <ValueProofSection />
      
      <StartStopMatrix />
      <AppendixSection />
      <ExecutiveTakeaway />
    </div>
  );
};

export default Index;
