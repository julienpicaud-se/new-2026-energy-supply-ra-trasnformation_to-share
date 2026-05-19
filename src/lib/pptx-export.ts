import PptxGenJS from "pptxgenjs";
import {
  strategicPillars,
  objectives,
  startStopMatrix,
  executiveNarrative,
  executiveTakeaway,
  keyChallenges,
  marketDynamics,
  clientTriggers,
  competitiveLandscape,
  serviceCatalog,
  operatingModel,
  engagementPlays,
  energySupplyTransformation,
  energySupplyJTBD,
  existingTools,
  dataNeeded,
  northStarMetrics,
} from "@/data/playbook-data";
import { playbookFlow, playbookGroups } from "@/data/playbook-flow";

const BRAND_GREEN = "3DCD58";
const DARK_BG = "0F1419";
const PANEL_BG = "1A1F26";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "9CA3AF";
const ACCENT_DIM = "1F2937";

type Slide = ReturnType<PptxGenJS["addSlide"]>;

const addHeader = (slide: Slide, group: string, title: string) => {
  slide.addText(group.toUpperCase(), {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 10, bold: true, color: BRAND_GREEN, charSpacing: 2,
  });
  slide.addText(title, {
    x: 0.5, y: 0.6, w: 9, h: 0.7,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  slide.addShape("rect" as PptxGenJS.ShapeType, {
    x: 0.5, y: 1.35, w: 0.6, h: 0.04,
    fill: { color: BRAND_GREEN }, line: { color: BRAND_GREEN },
  });
};

const addBullets = (slide: Slide, items: string[], opts?: { x?: number; y?: number; w?: number; h?: number; fontSize?: number }) => {
  const text = items.map((t) => ({ text: t, options: { bullet: { code: "25CF" }, color: TEXT_WHITE, paraSpaceAfter: 6 } }));
  slide.addText(text, {
    x: opts?.x ?? 0.5, y: opts?.y ?? 1.7, w: opts?.w ?? 9, h: opts?.h ?? 4.5,
    fontSize: opts?.fontSize ?? 13, color: TEXT_WHITE, valign: "top",
  });
};

export const exportToPptx = async () => {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.defineLayout({ name: "WIDE_16x9", width: 13.33, height: 7.5 });
  pptx.layout = "WIDE_16x9";

  pptx.author = "Schneider Electric";
  pptx.title = "Energy & Supply Transformation with RA+";
  pptx.subject = "Strategic Playbook";

  pptx.defineSlideMaster({
    title: "MASTER",
    background: { color: DARK_BG },
    objects: [
      { rect: { x: 0, y: 7.3, w: 13.33, h: 0.2, fill: { color: BRAND_GREEN } } },
    ],
  });

  // ============ COVER ============
  const cover = pptx.addSlide({ masterName: "MASTER" });
  cover.addText("ENERGY & SUPPLY TRANSFORMATION", {
    x: 0.5, y: 2.6, w: 12.3, h: 0.5,
    fontSize: 16, bold: true, color: BRAND_GREEN, align: "center", charSpacing: 4,
  });
  cover.addText("with RA+", {
    x: 0.5, y: 3.1, w: 12.3, h: 1.2,
    fontSize: 56, bold: true, color: TEXT_WHITE, align: "center",
  });
  cover.addText("Strategic Playbook · Automating Managed Services", {
    x: 0.5, y: 4.5, w: 12.3, h: 0.5,
    fontSize: 18, color: TEXT_MUTED, align: "center",
  });
  cover.addText("Internal Only and Confidential", {
    x: 0.5, y: 6.7, w: 12.3, h: 0.4,
    fontSize: 11, color: TEXT_MUTED, align: "center", italic: true,
  });

  // ============ AGENDA ============
  const agenda = pptx.addSlide({ masterName: "MASTER" });
  addHeader(agenda, "Agenda", "What we'll cover");
  playbookGroups.forEach((group, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 0.5 + col * 6.3;
    const y = 1.8 + row * 1.5;
    agenda.addShape("rect" as PptxGenJS.ShapeType, {
      x, y, w: 6, h: 1.3,
      fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
    });
    agenda.addText(`0${idx + 1}`, {
      x: x + 0.2, y: y + 0.15, w: 0.8, h: 0.5,
      fontSize: 22, bold: true, color: BRAND_GREEN,
    });
    agenda.addText(group.name, {
      x: x + 1.1, y: y + 0.15, w: 4.7, h: 0.4,
      fontSize: 16, bold: true, color: TEXT_WHITE,
    });
    agenda.addText(group.items.map((i) => i.label).join(" · "), {
      x: x + 1.1, y: y + 0.55, w: 4.7, h: 0.7,
      fontSize: 10, color: TEXT_MUTED,
    });
  });

  // ============ GROUP DIVIDER + SECTION SLIDES ============
  let lastGroup = "";
  let groupIdx = 0;

  playbookFlow.forEach((section) => {
    if (section.id === "hero") return; // covered by cover slide

    // Group divider
    if (section.group !== lastGroup) {
      lastGroup = section.group;
      groupIdx += 1;
      const div = pptx.addSlide({ masterName: "MASTER" });
      div.addText(`PART 0${groupIdx}`, {
        x: 0.5, y: 3.0, w: 12.3, h: 0.5,
        fontSize: 14, bold: true, color: BRAND_GREEN, align: "center", charSpacing: 4,
      });
      div.addText(section.group, {
        x: 0.5, y: 3.5, w: 12.3, h: 1.2,
        fontSize: 60, bold: true, color: TEXT_WHITE, align: "center",
      });
    }

    renderSectionSlide(pptx, section.group, section.id, section.label);
  });

  // ============ CLOSING ============
  const close = pptx.addSlide({ masterName: "MASTER" });
  close.addText("Thank You", {
    x: 0.5, y: 2.8, w: 12.3, h: 1.2,
    fontSize: 60, bold: true, color: TEXT_WHITE, align: "center",
  });
  close.addText("Energy & Supply Transformation with RA+", {
    x: 0.5, y: 4.1, w: 12.3, h: 0.5,
    fontSize: 20, color: BRAND_GREEN, align: "center",
  });
  close.addText("Internal Only and Confidential", {
    x: 0.5, y: 6.7, w: 12.3, h: 0.4,
    fontSize: 11, color: TEXT_MUTED, align: "center", italic: true,
  });

  await pptx.writeFile({ fileName: "Energy-Supply-Transformation-Playbook.pptx" });
};

// ---------- Per-section slide renderers ----------
function renderSectionSlide(pptx: PptxGenJS, group: string, id: string, label: string) {
  const slide = pptx.addSlide({ masterName: "MASTER" });
  addHeader(slide, group, label);

  switch (id) {
    case "executive-narrative":
      slide.addText("Steve's Ready Narrative", {
        x: 0.5, y: 1.55, w: 9, h: 0.4, fontSize: 13, italic: true, color: TEXT_MUTED,
      });
      slide.addText(executiveNarrative.northStar, {
        x: 0.5, y: 2.0, w: 12.3, h: 2.2, fontSize: 16, color: TEXT_WHITE, valign: "top",
      });
      slide.addText("Economic Impact", {
        x: 0.5, y: 4.4, w: 12.3, h: 0.3, fontSize: 13, bold: true, color: BRAND_GREEN,
      });
      addBullets(slide, executiveNarrative.economicImpact, { y: 4.75, h: 2.2, fontSize: 12 });
      break;

    case "executive-summary":
      slide.addText("Energy & Supply value is unlocked through connected knowledge and data", {
        x: 0.5, y: 1.7, w: 12.3, h: 0.6, fontSize: 18, italic: true, color: BRAND_GREEN,
      });
      slide.addText(executiveNarrative.trueProblem, {
        x: 0.5, y: 2.6, w: 12.3, h: 4.0, fontSize: 12, color: TEXT_WHITE, valign: "top",
      });
      break;

    case "market-context": {
      slide.addText(marketDynamics.intro, {
        x: 0.5, y: 1.7, w: 12.3, h: 0.7, fontSize: 13, color: TEXT_MUTED, italic: true,
      });
      const forces = marketDynamics.forces.slice(0, 6);
      forces.forEach((f, i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 0.5 + col * 4.25, y = 2.6 + row * 2.1;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 4, h: 1.9, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(f.title, { x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.4, fontSize: 13, bold: true, color: BRAND_GREEN });
        slide.addText(f.description, { x: x + 0.2, y: y + 0.6, w: 3.6, h: 1.2, fontSize: 10, color: TEXT_WHITE, valign: "top" });
      });
      break;
    }

    case "key-challenges": {
      const challenges = keyChallenges.slice(0, 4);
      challenges.forEach((c, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 0.5 + col * 6.3, y = 1.7 + row * 2.8;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 6, h: 2.6, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(c.title, { x: x + 0.2, y: y + 0.15, w: 5.6, h: 0.4, fontSize: 14, bold: true, color: BRAND_GREEN });
        const text = c.issues.map((t) => ({ text: t, options: { bullet: { code: "25CF" }, color: TEXT_WHITE, paraSpaceAfter: 4 } }));
        slide.addText(text, { x: x + 0.2, y: y + 0.55, w: 5.6, h: 1.95, fontSize: 10, valign: "top" });
      });
      break;
    }

    case "market-engagement": {
      slide.addText("How Client Pain Translates Into Engagement", {
        x: 0.5, y: 1.7, w: 12.3, h: 0.4, fontSize: 14, bold: true, color: BRAND_GREEN,
      });
      clientTriggers.slice(0, 3).forEach((t, i) => {
        const x = 0.5 + i * 4.25, y = 2.3;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 4, h: 2.5, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(`"${t.trigger}"`, { x: x + 0.2, y: y + 0.2, w: 3.6, h: 1.0, fontSize: 11, italic: true, color: TEXT_WHITE, valign: "top" });
        slide.addText(`→ ${t.response}`, { x: x + 0.2, y: y + 1.3, w: 3.6, h: 1.1, fontSize: 10, color: BRAND_GREEN, valign: "top" });
      });
      slide.addText("Why We Win", { x: 0.5, y: 5.0, w: 12.3, h: 0.4, fontSize: 13, bold: true, color: BRAND_GREEN });
      addBullets(slide, competitiveLandscape.differentiators.slice(0, 4), { y: 5.4, h: 1.7, fontSize: 11 });
      break;
    }

    case "what-if-you-could": {
      slide.addText("The Vision · Powered by IDM 2.0", {
        x: 0.5, y: 1.55, w: 12.3, h: 0.4, fontSize: 13, italic: true, color: BRAND_GREEN,
      });
      slide.addText("What if you could, tomorrow…", {
        x: 0.5, y: 1.9, w: 12.3, h: 0.6, fontSize: 22, bold: true, color: TEXT_WHITE,
      });
      const items = [
        { t: "Show ECM opportunities in minutes", d: "Site-relevant ECMs ranked against IDM 2.0 data already on file" },
        { t: "Replace PowerPoint with platform", d: "Interactive ECM deliverables backed by live telemetry" },
        { t: "Centralize context on the RA+ spine", d: "Capture once, reuse across audits, quotes, follow-ups" },
        { t: "One-click audit requests", d: "Customers discover insights, request deeper audits in one click" },
        { t: "Always-on ECM discovery", d: "Every audit fuels continuous detection between formal cycles" },
      ];
      items.forEach((it, i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 0.5 + col * 4.25, y = 2.7 + row * 2.1;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 4, h: 1.9, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(it.t, { x: x + 0.2, y: y + 0.2, w: 3.6, h: 0.5, fontSize: 12, bold: true, color: BRAND_GREEN });
        slide.addText(it.d, { x: x + 0.2, y: y + 0.75, w: 3.6, h: 1.05, fontSize: 10, color: TEXT_WHITE, valign: "top" });
      });
      break;
    }

    case "service-catalog": {
      const items = (serviceCatalog.services || []).slice(0, 6);
      items.forEach((s: any, i: number) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 0.5 + col * 4.25, y = 1.7 + row * 2.8;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 4, h: 2.6, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(s.name || s.title || "", { x: x + 0.2, y: y + 0.2, w: 3.6, h: 0.5, fontSize: 13, bold: true, color: BRAND_GREEN });
        slide.addText(s.description || s.summary || "", { x: x + 0.2, y: y + 0.75, w: 3.6, h: 1.75, fontSize: 10, color: TEXT_WHITE, valign: "top" });
      });
      break;
    }

    case "engagement-plays": {
      const plays = (engagementPlays.stages || []).slice(0, 4);
      plays.forEach((p: any, i: number) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 0.5 + col * 6.3, y = 1.7 + row * 2.8;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 6, h: 2.6, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(`${p.stage} — ${p.title}`, { x: x + 0.2, y: y + 0.2, w: 5.6, h: 0.5, fontSize: 13, bold: true, color: BRAND_GREEN });
        const ex = (p.examples || []).slice(0, 3).map((t: string) => ({ text: t, options: { bullet: { code: "25CF" }, color: TEXT_WHITE, paraSpaceAfter: 4 } }));
        slide.addText(ex, { x: x + 0.2, y: y + 0.75, w: 5.6, h: 1.75, fontSize: 10, valign: "top" });
      });
      break;
    }

    case "energy-supply-transformation": {
      slide.addText(energySupplyTransformation.intro || "", {
        x: 0.5, y: 1.7, w: 12.3, h: 1.1, fontSize: 12, color: TEXT_MUTED, italic: true,
      });
      const cols = [energySupplyTransformation.classic, energySupplyTransformation.raPlus];
      cols.forEach((c: any, i: number) => {
        const x = 0.5 + i * 6.3, y = 3.0;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 6, h: 3.8,
          fill: { color: PANEL_BG },
          line: { color: i === 0 ? ACCENT_DIM : BRAND_GREEN, width: 1 },
        });
        slide.addText(c.title, { x: x + 0.2, y: y + 0.2, w: 5.6, h: 0.4, fontSize: 14, bold: true, color: i === 0 ? TEXT_MUTED : BRAND_GREEN });
        slide.addText(c.tagline, { x: x + 0.2, y: y + 0.6, w: 5.6, h: 0.3, fontSize: 10, italic: true, color: TEXT_MUTED });
        const pts = (c.points || []).slice(0, 5).map((t: string) => ({ text: t, options: { bullet: { code: "25CF" }, color: TEXT_WHITE, paraSpaceAfter: 4 } }));
        slide.addText(pts, { x: x + 0.2, y: y + 1.05, w: 5.6, h: 2.6, fontSize: 10, valign: "top" });
      });
      break;
    }

    case "energy-supply-personas":
      addBullets(slide, [
        "Energy Manager — accountable for cost, compliance, and reduction targets",
        "Sustainability Lead — owns carbon trajectory and disclosure",
        "Procurement Lead — drives sourcing strategy and contract value",
        "Operations — uses insights to act on sites and equipment",
      ], { y: 1.7, fontSize: 14 });
      break;

    case "energy-supply-jtbd": {
      const jobs = (energySupplyJTBD.jobs || []).slice(0, 4);
      jobs.forEach((j: any, i: number) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 0.5 + col * 6.3, y = 1.7 + row * 2.8;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 6, h: 2.6, fill: { color: PANEL_BG }, line: { color: ACCENT_DIM, width: 1 },
        });
        slide.addText(j.title || j.job || "", { x: x + 0.2, y: y + 0.2, w: 5.6, h: 0.5, fontSize: 13, bold: true, color: BRAND_GREEN });
        slide.addText(j.description || j.outcome || "", { x: x + 0.2, y: y + 0.75, w: 5.6, h: 1.75, fontSize: 11, color: TEXT_WHITE, valign: "top" });
      });
      break;
    }

    case "strategic-pillars":
      strategicPillars.forEach((p, i) => {
        const x = 0.5 + i * 4.25, y = 1.7;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 4, h: 5.0, fill: { color: PANEL_BG }, line: { color: BRAND_GREEN, width: 1 },
        });
        slide.addText(p.title, { x: x + 0.2, y: y + 0.2, w: 3.6, h: 0.5, fontSize: 18, bold: true, color: BRAND_GREEN });
        slide.addText(p.tagline, { x: x + 0.2, y: y + 0.75, w: 3.6, h: 0.4, fontSize: 11, italic: true, color: TEXT_MUTED });
        slide.addText(p.promise, { x: x + 0.2, y: y + 1.3, w: 3.6, h: 3.5, fontSize: 11, color: TEXT_WHITE, valign: "top" });
      });
      break;

    case "objectives":
      objectives.slice(0, 5).forEach((o, i) => {
        const y = 1.7 + i * 1.05;
        slide.addText(o.id, { x: 0.5, y, w: 0.8, h: 0.5, fontSize: 18, bold: true, color: BRAND_GREEN });
        slide.addText(o.title, { x: 1.4, y, w: 11.4, h: 0.4, fontSize: 14, bold: true, color: TEXT_WHITE });
        slide.addText(o.customerOutcome || "", { x: 1.4, y: y + 0.4, w: 11.4, h: 0.6, fontSize: 10, color: TEXT_MUTED, valign: "top" });
      });
      break;

    case "existing-tools":
      addBullets(slide, existingTools.map((t: any) => `${t.name || t.title}${t.description ? " — " + t.description : ""}`).slice(0, 8), { fontSize: 12 });
      break;

    case "operating-model":
      slide.addText("Experts Supported by Software", { x: 0.5, y: 1.55, w: 12.3, h: 0.4, fontSize: 13, italic: true, color: BRAND_GREEN });
      addBullets(slide, [
        "Experts focused on judgment and advice; software handles ingestion, validation, and reporting",
        "Single ownership for portfolio and contract truth",
        "No mutation at entry — transformations happen downstream with lineage",
        "Client self-serve enrichment where it adds value",
        "Continuous improvement loop: every delivery fuels the data foundation",
      ], { fontSize: 13 });
      break;

    case "energy-supply-phasing":
      addBullets(slide, [
        "Phase 1 — No-regret moves: Pseudo-bill v1, adaptive invoice triage, tariff service v1",
        "Phase 2 — Expand: Connector coverage, identity registry beyond UK, sourcing automation",
        "Phase 3 — Scale: Self-serve client portal, third-party consultant SaaS",
      ], { fontSize: 14 });
      break;

    case "data-requirements":
      addBullets(slide, dataNeeded.map((d: any) => `${d.name || d.title || d}${d.description ? " — " + d.description : ""}`).slice(0, 8), { fontSize: 12 });
      break;

    case "value-proof":
      northStarMetrics.slice(0, 4).forEach((m: any, i: number) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 0.5 + col * 6.3, y = 1.7 + row * 2.5;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x, y, w: 6, h: 2.3, fill: { color: PANEL_BG }, line: { color: BRAND_GREEN, width: 1 },
        });
        slide.addText(m.value || m.target || "", { x: x + 0.2, y: y + 0.2, w: 5.6, h: 0.9, fontSize: 36, bold: true, color: BRAND_GREEN });
        slide.addText(m.metric || m.label || m.name || "", { x: x + 0.2, y: y + 1.1, w: 5.6, h: 0.5, fontSize: 13, bold: true, color: TEXT_WHITE });
        slide.addText(m.description || "", { x: x + 0.2, y: y + 1.55, w: 5.6, h: 0.7, fontSize: 10, color: TEXT_MUTED });
      });
      break;

    case "start-stop": {
      slide.addText("Stop Doing", { x: 0.5, y: 1.55, w: 6, h: 0.4, fontSize: 14, bold: true, color: "EF4444" });
      slide.addText("Start Doing", { x: 6.83, y: 1.55, w: 6, h: 0.4, fontSize: 14, bold: true, color: BRAND_GREEN });
      Object.values(startStopMatrix).slice(0, 5).forEach((item: any, i: number) => {
        const y = 2.0 + i * 1.05;
        slide.addText(item.stop, { x: 0.5, y, w: 6, h: 1.0, fontSize: 11, color: TEXT_WHITE, valign: "top" });
        slide.addText(item.start, { x: 6.83, y, w: 6, h: 1.0, fontSize: 11, color: TEXT_WHITE, valign: "top" });
      });
      break;
    }

    case "takeaway":
      slide.addText(executiveTakeaway.summary, {
        x: 0.5, y: 2.0, w: 12.3, h: 1.6, fontSize: 16, color: TEXT_WHITE, valign: "top",
      });
      slide.addText(executiveTakeaway.conclusion, {
        x: 0.5, y: 3.8, w: 12.3, h: 2.4, fontSize: 14, italic: true, color: BRAND_GREEN, valign: "top",
      });
      break;

    case "appendix":
      slide.addText("Detailed materials, data schemas, and supporting evidence available on request.", {
        x: 0.5, y: 2.0, w: 12.3, h: 1.0, fontSize: 14, color: TEXT_MUTED, italic: true, align: "center",
      });
      break;

    default:
      slide.addText(label, { x: 0.5, y: 3.0, w: 12.3, h: 0.8, fontSize: 24, color: TEXT_WHITE, align: "center" });
  }
}
