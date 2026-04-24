import PptxGenJS from "pptxgenjs";
import { strategicPillars, objectives, roadmapBets, startStopMatrix, strategicContext } from "@/data/playbook-data";

const BRAND_GREEN = "3DCD58";
const DARK_BG = "1A1A1A";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "A1A1AA";

export const exportToPptx = async () => {
  const pptx = new PptxGenJS();
  
  // Set presentation properties
  pptx.author = "Lovable App";
  pptx.title = "2026 Product Roadmap Playbook";
  pptx.subject = "Strategic Product Roadmap";
  pptx.company = "Lovable App";
  
  // Define master slide
  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: DARK_BG },
  });

  // Slide 1: Title Slide
  const slide1 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide1.addText("2026 Product Roadmap", {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1,
    fontSize: 44,
    bold: true,
    color: TEXT_WHITE,
    align: "center",
  });
  slide1.addText("Playbook", {
    x: 0.5,
    y: 2.8,
    w: 9,
    h: 0.8,
    fontSize: 36,
    color: BRAND_GREEN,
    align: "center",
  });
  slide1.addText("Internal Only and Confidential", {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.5,
    fontSize: 14,
    color: TEXT_MUTED,
    align: "center",
  });

  // Slide 2: North Star
  const slide2 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide2.addText("Our North Star", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  slide2.addText(strategicContext.northStar, {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1.5,
    fontSize: 20,
    color: BRAND_GREEN,
    align: "center",
    valign: "middle",
  });
  slide2.addText(strategicContext.summary, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 1.5,
    fontSize: 12,
    color: TEXT_MUTED,
    align: "center",
  });

  // Slide 3: Scope Expansion
  const slide3 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide3.addText("Scope Expansion", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  slide3.addText("From Carbon to Sustainability Performance", {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.4,
    fontSize: 16,
    color: BRAND_GREEN,
  });
  
  // Activity Data Foundation
  slide3.addText("Activity Data Foundation", {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 0.4,
    fontSize: 14,
    bold: true,
    color: TEXT_WHITE,
  });
  
  const dataSources = ["Energy usage", "Waste volumes", "Water consumption", "Travel activity", "Workforce metrics"];
  dataSources.forEach((source, index) => {
    slide3.addText(`• ${source}`, {
      x: 0.5 + (index % 3) * 3.2,
      y: 2 + Math.floor(index / 3) * 0.4,
      w: 3,
      h: 0.4,
      fontSize: 11,
      color: TEXT_MUTED,
    });
  });
  
  // Carbon Performance
  slide3.addShape("rect" as PptxGenJS.ShapeType, {
    x: 0.5,
    y: 3,
    w: 4,
    h: 1.5,
    fill: { color: "262626" },
    line: { color: BRAND_GREEN, width: 1 },
  });
  slide3.addText("Carbon Performance", {
    x: 0.7,
    y: 3.1,
    w: 3.6,
    h: 0.4,
    fontSize: 12,
    bold: true,
    color: BRAND_GREEN,
  });
  slide3.addText("• Scope 1, 2, 3 inventories\n• Emissions tracking\n• Carbon targets & scenarios", {
    x: 0.7,
    y: 3.5,
    w: 3.6,
    h: 0.9,
    fontSize: 10,
    color: TEXT_MUTED,
  });
  
  // Arrow
  slide3.addText("→", {
    x: 4.6,
    y: 3.4,
    w: 0.8,
    h: 0.6,
    fontSize: 24,
    color: BRAND_GREEN,
    align: "center",
  });
  
  // Sustainability Performance
  slide3.addShape("rect" as PptxGenJS.ShapeType, {
    x: 5.5,
    y: 3,
    w: 4,
    h: 1.5,
    fill: { color: "262626" },
    line: { color: "007F41", width: 1 },
  });
  slide3.addText("Sustainability Performance", {
    x: 5.7,
    y: 3.1,
    w: 3.6,
    h: 0.4,
    fontSize: 12,
    bold: true,
    color: "007F41",
  });
  slide3.addText("• Waste & water KPIs\n• HR & workforce metrics\n• ESG reporting", {
    x: 5.7,
    y: 3.5,
    w: 3.6,
    h: 0.9,
    fontSize: 10,
    color: TEXT_MUTED,
  });
  
  // Principle
  slide3.addText("Principle: No carbon-only data — collect once, reuse everywhere", {
    x: 0.5,
    y: 4.8,
    w: 9,
    h: 0.4,
    fontSize: 12,
    color: BRAND_GREEN,
    align: "center",
  });

  // Slide 4: Strategic Pillars
  const slide4 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide4.addText("Strategic Pillars", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  
  strategicPillars.forEach((pillar, index) => {
    const xPos = 0.5 + index * 3.2;
    slide4.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos,
      y: 1,
      w: 3,
      h: 4,
      fill: { color: "262626" },
      line: { color: BRAND_GREEN, width: 1 },
    });
    slide4.addText(pillar.title, {
      x: xPos + 0.2,
      y: 1.2,
      w: 2.6,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: BRAND_GREEN,
    });
    slide4.addText(pillar.tagline, {
      x: xPos + 0.2,
      y: 1.7,
      w: 2.6,
      h: 0.3,
      fontSize: 10,
      color: TEXT_MUTED,
    });
    slide4.addText(pillar.promise, {
      x: xPos + 0.2,
      y: 2.2,
      w: 2.6,
      h: 2.5,
      fontSize: 9,
      color: TEXT_WHITE,
    });
  });

  // Slide 5: OKRs
  const slide5 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide5.addText("Strategic Objectives", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  
  objectives.slice(0, 4).forEach((obj, index) => {
    const yPos = 1 + index * 1.2;
    slide5.addText(obj.id, {
      x: 0.5,
      y: yPos,
      w: 0.8,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: BRAND_GREEN,
    });
    slide5.addText(obj.title, {
      x: 1.4,
      y: yPos,
      w: 8,
      h: 0.4,
      fontSize: 14,
      color: TEXT_WHITE,
    });
    slide5.addText(obj.customerOutcome, {
      x: 1.4,
      y: yPos + 0.4,
      w: 8,
      h: 0.6,
      fontSize: 10,
      color: TEXT_MUTED,
    });
  });

  // Slide 6: Roadmap Timeline
  const slide6 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide6.addText("Roadmap Timeline", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  
  const timeframes = ["now", "next", "later"] as const;
  const timeframeLabels = { now: "Now (Q2–Q3 2026)", next: "Next (Q4 2026 – Q1 2027)", later: "Later (Q2 2027+)" };
  
  timeframes.forEach((tf, colIndex) => {
    const xPos = 0.5 + colIndex * 3.2;
    slide6.addText(timeframeLabels[tf], {
      x: xPos,
      y: 1,
      w: 3,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: BRAND_GREEN,
    });
    
    const items = roadmapBets[tf] || [];
    items.slice(0, 4).forEach((item: { title: string }, itemIndex: number) => {
      slide6.addText(`• ${item.title}`, {
        x: xPos,
        y: 1.5 + itemIndex * 0.8,
        w: 3,
        h: 0.7,
        fontSize: 10,
        color: TEXT_WHITE,
      });
    });
  });

  // Slide 7: Start/Stop Matrix
  const slide7 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide7.addText("Start / Stop Matrix", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: TEXT_WHITE,
  });
  
  // Headers
  slide7.addText("Theme", { x: 0.5, y: 1, w: 2.5, h: 0.4, fontSize: 12, bold: true, color: TEXT_MUTED });
  slide7.addText("Stop Doing", { x: 3.2, y: 1, w: 3, h: 0.4, fontSize: 12, bold: true, color: "EF4444" });
  slide7.addText("Start Doing", { x: 6.5, y: 1, w: 3, h: 0.4, fontSize: 12, bold: true, color: BRAND_GREEN });
  
  Object.values(startStopMatrix).slice(0, 6).forEach((item, index) => {
    const yPos = 1.5 + index * 0.7;
    slide7.addText(item.theme, { x: 0.5, y: yPos, w: 2.5, h: 0.6, fontSize: 10, bold: true, color: TEXT_WHITE });
    slide7.addText(item.stop, { x: 3.2, y: yPos, w: 3, h: 0.6, fontSize: 9, color: TEXT_MUTED });
    slide7.addText(item.start, { x: 6.5, y: yPos, w: 3, h: 0.6, fontSize: 9, color: TEXT_WHITE });
  });

  // Slide 8: Thank You
  const slide8 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide8.addText("Thank You", {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1,
    fontSize: 44,
    bold: true,
    color: TEXT_WHITE,
    align: "center",
  });
  slide8.addText("2026 Product Roadmap Playbook", {
    x: 0.5,
    y: 3.2,
    w: 9,
    h: 0.5,
    fontSize: 18,
    color: BRAND_GREEN,
    align: "center",
  });
  slide8.addText("Internal Only and Confidential", {
    x: 0.5,
    y: 4,
    w: 9,
    h: 0.5,
    fontSize: 12,
    color: TEXT_MUTED,
    align: "center",
  });

  // Save the file
  await pptx.writeFile({ fileName: "2026-Product-Roadmap-Playbook.pptx" });
};
