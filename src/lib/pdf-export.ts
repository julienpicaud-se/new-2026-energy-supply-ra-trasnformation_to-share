import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { playbookFlow } from "@/data/playbook-flow";

/**
 * High-fidelity PDF export.
 *
 * Renders each playbook section as a high-DPI canvas via html2canvas,
 * then places it into a multi-page A4 (landscape) PDF, paginating tall
 * sections across pages while preserving the on-screen design.
 */
export async function exportToPdf(): Promise<void> {
  // A4 landscape in mm
  const pageWidthMm = 297;
  const pageHeightMm = 210;
  const marginMm = 8;
  const contentWidthMm = pageWidthMm - marginMm * 2;
  const contentHeightMm = pageHeightMm - marginMm * 2;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  // Cover page
  drawCover(pdf, pageWidthMm, pageHeightMm);

  const bgColor = getComputedColor("--background") || "#0a0a0a";

  let firstSection = true;
  for (const section of playbookFlow) {
    const el = document.getElementById(section.id);
    if (!el) continue;

    // Render section to canvas
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: bgColor,
      logging: false,
      windowWidth: Math.max(el.scrollWidth, 1440),
    });

    const imgWidthPx = canvas.width;
    const imgHeightPx = canvas.height;
    const pxPerMm = imgWidthPx / contentWidthMm;
    const totalHeightMm = imgHeightPx / pxPerMm;

    // How many PDF pages this section needs
    const pageCount = Math.max(1, Math.ceil(totalHeightMm / contentHeightMm));
    const sliceHeightPx = Math.ceil(contentHeightMm * pxPerMm);

    for (let i = 0; i < pageCount; i++) {
      if (!firstSection || i > 0) pdf.addPage();
      firstSection = false;

      // Background
      pdf.setFillColor(bgColor);
      pdf.rect(0, 0, pageWidthMm, pageHeightMm, "F");

      const sy = i * sliceHeightPx;
      const sh = Math.min(sliceHeightPx, imgHeightPx - sy);

      // Draw slice onto a temp canvas
      const slice = document.createElement("canvas");
      slice.width = imgWidthPx;
      slice.height = sh;
      const ctx = slice.getContext("2d")!;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, sy, imgWidthPx, sh, 0, 0, imgWidthPx, sh);

      const sliceHeightMm = sh / pxPerMm;
      const dataUrl = slice.toDataURL("image/jpeg", 0.92);
      pdf.addImage(
        dataUrl,
        "JPEG",
        marginMm,
        marginMm,
        contentWidthMm,
        sliceHeightMm,
        undefined,
        "FAST"
      );

      // Footer
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(
        `${section.group} · ${section.label}`,
        marginMm,
        pageHeightMm - 3
      );
      pdf.text(
        "Energy & Supply Transformation with RA+",
        pageWidthMm - marginMm,
        pageHeightMm - 3,
        { align: "right" }
      );
    }
  }

  pdf.save("energy-supply-transformation-playbook.pdf");
}

function drawCover(pdf: jsPDF, w: number, h: number) {
  pdf.setFillColor("#0a0a0a");
  pdf.rect(0, 0, w, h, "F");

  // Accent bar
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
  pdf.text("Steve's Ready Narrative · Strategic Playbook", w / 2, h / 2 + 12, {
    align: "center",
  });

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

function getComputedColor(varName: string): string | null {
  try {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    if (!value) return null;
    // index.css uses HSL components like "222 47% 5%"
    if (/^\d/.test(value)) return `hsl(${value})`;
    return value;
  } catch {
    return null;
  }
}
