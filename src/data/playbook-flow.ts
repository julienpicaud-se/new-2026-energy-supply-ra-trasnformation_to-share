export type FlowSection = {
  id: string;
  label: string;
  group: string;
};

// Single source of truth for section order across Navigation,
// Presentation Mode, and PPTX export. Order matches Index.tsx.
export const playbookFlow: FlowSection[] = [
  { id: "hero", label: "Overview", group: "Context" },
  { id: "executive-narrative", label: "Steve's Narrative", group: "Context" },
  { id: "executive-summary", label: "Strategic Context", group: "Context" },

  { id: "market-context", label: "Market Forces", group: "Market" },
  { id: "key-challenges", label: "Challenges", group: "Market" },
  { id: "market-engagement", label: "Engagement", group: "Market" },

  { id: "what-if-you-could", label: "What If You Could", group: "Solution" },
  { id: "service-catalog", label: "Services", group: "Solution" },
  { id: "engagement-plays", label: "Plays", group: "Solution" },

  { id: "energy-supply-transformation", label: "Transformation", group: "Energy & Supply" },
  { id: "energy-supply-personas", label: "Personas", group: "Energy & Supply" },
  { id: "energy-supply-jtbd", label: "Jobs To Be Done", group: "Energy & Supply" },

  { id: "strategic-pillars", label: "Pillars", group: "Strategy" },
  { id: "objectives", label: "Objectives", group: "Strategy" },

  { id: "existing-tools", label: "Tech Landscape", group: "Delivery" },
  { id: "operating-model", label: "Operating Model", group: "Delivery" },
  { id: "energy-supply-phasing", label: "Phasing", group: "Delivery" },
  { id: "invoice-processing-vision", label: "Invoice Processing 2.0", group: "Delivery" },
  { id: "data-requirements", label: "Data", group: "Delivery" },

  { id: "value-proof", label: "Success Metrics", group: "Outcomes" },
  { id: "start-stop", label: "Start / Stop", group: "Outcomes" },
  { id: "takeaway", label: "Executive Takeaway", group: "Outcomes" },
  { id: "appendix", label: "Appendix", group: "Outcomes" },
];

export const playbookGroups = Array.from(
  playbookFlow.reduce((map, item) => {
    if (!map.has(item.group)) map.set(item.group, []);
    map.get(item.group)!.push(item);
    return map;
  }, new Map<string, FlowSection[]>())
).map(([name, items]) => ({ name, items }));
