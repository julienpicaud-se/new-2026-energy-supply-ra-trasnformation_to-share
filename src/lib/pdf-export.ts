import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { playbookFlow } from "@/data/playbook-flow";

/**
 * High-fidelity PDF export.
 *
 * Renders each playbook section individually so we can:
 *  - force scroll-fade sections to their visible state before capture
 *  - keep each canvas a manageable size
 *  - paginate cleanly between sections
 */
export async function exportToPdf(): Promise<void> {
  // 1. Force-show all animated sections.
  const fadeEls = Array.from(
    document.querySelectorAll<HTMLElement>(".section-fade")
  );
  fadeEls.forEach((el) => el.classList.add("visible"));

  // Let layout settle.
  await new Promise((r) => setTimeout(r, 350));

  const pageWmm = 297;
  const pageHmm = 210;
  const marginMm = 6;
  const contentWmm = pageWmm - marginMm * 2;
  const contentHmm = pageHmm - marginMm * 2;

  const bgColor = getBgColor();
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  drawCover(pdf, pageWmm, pageHmm);

  let rendered = 0;
  for (const section of playbookFlow) {
    const el = document.getElementById(section.id);
    if (!el) continue;

    // Scroll into view to trigger lazy renders.
    el.scrollIntoView({ block: "start" });
    await new Promise((r) => setTimeout(r, 150));
    el.querySelectorAll(".section-fade").forEach((e) =>
      e.classList.add("visible")
    );

    let canvas: HTMLCanvasElement;
    try {
      canvas = await html2canvas(el, {
        scale: 1.6,
        useCORS: true,
        backgroundColor: bgColor,
        logging: false,
        windowWidth: 1440,
        onclone: (doc) => {
          doc
            .querySelectorAll(".section-fade")
            .forEach((e) => e.classList.add("visible"));
          // Hide fixed chrome in clone
          doc
            .querySelectorAll<HTMLElement>("nav.fixed, .fixed")
            .forEach((e) => (e.style.display = "none"));
        },
      });
    } catch (err) {
      console.warn(`PDF export: failed to render ${section.id}`, err);
      continue;
    }

    const pxPerMm = canvas.width / contentWmm;
    const sliceHpx = Math.floor(contentHmm * pxPerMm);
    const totalHpx = canvas.height;

    let y = 0;
    while (y < totalHpx) {
      const sh = Math.min(sliceHpx, totalHpx - y);
      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = sh;
      const ctx = slice.getContext("2d")!;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, y, canvas.width, sh, 0, 0, canvas.width, sh);
      const sliceHmm = sh / pxPerMm;
      const dataUrl = slice.toDataURL("image/jpeg", 0.88);

      pdf.addPage();
      pdf.setFillColor(bgColor);
      pdf.rect(0, 0, pageWmm, pageHmm, "F");
      pdf.addImage(
        dataUrl,
        "JPEG",
        marginMm,
        marginMm,
        contentWmm,
        sliceHmm,
        undefined,
        "FAST"
      );

      pdf.setFontSize(7);
      pdf.setTextColor(140);
      pdf.text(
        `${section.group} · ${section.label}`,
        marginMm,
        pageHmm - 2
      );
      pdf.text(
        "Energy & Supply Transformation with RA+",
        pageWmm - marginMm,
        pageHmm - 2,
        { align: "right" }
      );

      y += sh;
    }

    rendered += 1;
  }

  if (rendered === 0) {
    console.error("PDF export: no sections found to render");
    return;
  }

  pdf.save("energy-supply-transformation-playbook.pdf");
}

function drawCover(pdf: jsPDF, w: number, h: number) {
  pdf.setFillColor("#0a0a0a");
  pdf.rect(0, 0, w, h, "F");
  pdf.setFillColor("#22c55e");
  pdf.rect(0, h / 2 - 0.5, w, 1, "F");

  pdf.setTextColor(255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(36);
  pdf.text("Energy & Supply", w / 2, h / 2 - 18, { align: "center" });
  pdf.text("Transformation with RA+", w / 2, h / 2 - 4, { align: "center" });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(14);
  pdf.setTextColor(180);
  pdf.text(
    "Steve's Ready Narrative · Strategic Playbook",
    w / 2,
    h / 2 + 12,
    { align: "center" }
  );

  pdf.setFontSize(10);
  pdf.setTextColor(120);
  pdf.text(
    new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    w / 2,
    h - 16,
    { align: "center" }
  );
}

function getBgColor(): string {
  try {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();
    if (value && /^\d/.test(value)) return `hsl(${value})`;
  } catch {
    /* ignore */
  }
  return "#0a0a0a";
}
