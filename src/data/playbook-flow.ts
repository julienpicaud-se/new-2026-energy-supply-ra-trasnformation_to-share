export type FlowSection = {
  id: string;
  label: string;
  group: string;
};

// Single source of truth for section order across Navigation,
// Presentation Mode, and PPTX export. Order matches Index.tsx.
export const playbookFlow: FlowSection[] = [
  { id: "hero", label: "Overview", group: "Summary" },
  { id: "executive-narrative", label: "Steve's Narrative", group: "Summary" },
  { id: "executive-summary", label: "Strategic Context", group: "Summary" },

  { id: "market-context", label: "Market Forces", group: "Problem" },
  { id: "key-challenges", label: "Challenges", group: "Problem" },
  { id: "market-engagement", label: "Engagement", group: "Problem" },
  { id: "competitors", label: "Competitors", group: "Problem" },

  { id: "what-if-you-could", label: "What If You Could", group: "Vision" },
  { id: "strategic-pillars", label: "Pillars", group: "Vision" },
  { id: "objectives", label: "Objectives", group: "Vision" },

  { id: "energy-supply-personas", label: "Personas", group: "Audience" },
  { id: "energy-supply-jtbd", label: "Jobs To Be Done", group: "Audience" },

  { id: "service-catalog", label: "Services", group: "Response" },
  { id: "engagement-plays", label: "Plays", group: "Response" },
  { id: "energy-supply-transformation", label: "Transformation", group: "Response" },

  { id: "existing-tools", label: "Tech Landscape", group: "How" },
  { id: "operating-model", label: "Operating Model", group: "How" },
  { id: "human-in-the-loop", label: "Human-in-the-Loop", group: "How" },

  { id: "energy-supply-phasing", label: "Phasing", group: "Delivery" },
  { id: "invoice-processing-vision", label: "Invoice Processing 2.0", group: "Delivery" },
  { id: "data-requirements", label: "Data", group: "Delivery" },
  { id: "value-proof", label: "Success Metrics", group: "Delivery" },
  { id: "start-stop", label: "Start / Stop", group: "Delivery" },
  { id: "takeaway", label: "Executive Takeaway", group: "Delivery" },

  { id: "appendix", label: "Appendix", group: "Appendix" },
];

export const playbookGroups = Array.from(
  playbookFlow.reduce((map, item) => {
    if (!map.has(item.group)) map.set(item.group, []);
    map.get(item.group)!.push(item);
    return map;
  }, new Map<string, FlowSection[]>())
).map(([name, items]) => ({ name, items }));
