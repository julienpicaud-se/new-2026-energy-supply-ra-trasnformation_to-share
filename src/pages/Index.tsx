import { useState } from "react";
import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { KeyChallengesSection } from "@/components/playbook/KeyChallengesSection";
import { ScopeExpansion } from "@/components/playbook/ScopeExpansion";
import { StrategicPillars } from "@/components/playbook/StrategicPillars";
import { ObjectivesSection } from "@/components/playbook/ObjectivesSection";
import { RoadmapTimeline } from "@/components/playbook/RoadmapTimeline";
import { InitiativesDomain } from "@/components/playbook/InitiativesDomain";
import { ValueProofSection } from "@/components/playbook/ValueProofSection";
import { StartStopMatrix } from "@/components/playbook/StartStopMatrix";
import { ExecutiveNarrativeSection } from "@/components/playbook/ExecutiveNarrativeSection";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
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
      <ExecutiveSummary />
      <KeyChallengesSection />
      <StrategicPillars />
      <ObjectivesSection />
      <RoadmapTimeline />
      <InitiativesDomain />
      <ValueProofSection />
      <StartStopMatrix />
      <ExecutiveNarrativeSection />
      <AppendixSection />
      <ExecutiveTakeaway />
    </div>
  );
};

export default Index;
