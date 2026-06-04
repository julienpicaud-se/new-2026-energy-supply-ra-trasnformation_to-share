import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * High-fidelity PDF export.
 *
 * Strategy:
 *  1. Force every scroll-animated section into its "visible" state so
 *     html2canvas captures real content (not opacity-0 placeholders).
 *  2. Briefly switch the viewport to a desktop width (1440) so the
 *     layout renders at its intended breakpoint.
 *  3. Render the entire <main> element to a single canvas at 2× DPI.
 *  4. Slice the canvas into A4 landscape pages, snapping cuts to
 *     section boundaries when possible to avoid splitting cards.
 */
export async function exportToPdf(): Promise<void> {
  const main = document.querySelector("main") as HTMLElement | null;
  if (!main) {
    console.error("PDF export: <main> element not found");
    return;
  }

  // --- 1. Force-show animated sections ---
  const hidden = Array.from(
    document.querySelectorAll<HTMLElement>(".section-fade:not(.visible)")
  );
  hidden.forEach((el) => el.classList.add("visible"));

  // --- 2. Hide non-content chrome (nav, progress bar, etc.) ---
  const chromeSelectors = [
    "nav",
    "[data-pdf-hide]",
    ".fixed",
  ];
  const hiddenChrome: { el: HTMLElement; prev: string }[] = [];
  chromeSelectors.forEach((sel) => {
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      hiddenChrome.push({ el, prev: el.style.visibility });
      el.style.visibility = "hidden";
    });
  });

  // Allow layout / transitions to settle
  await new Promise((r) => setTimeout(r, 400));

  const bgColor = getBgColor();

  let canvas: HTMLCanvasElement;
  try {
    canvas = await html2canvas(main, {
      scale: 2,
      useCORS: true,
      backgroundColor: bgColor,
      logging: false,
      windowWidth: 1440,
      width: main.scrollWidth,
      height: main.scrollHeight,
      onclone: (doc) => {
        // Re-apply visibility in the clone (chrome hiding above is on the
        // live DOM; sections may be re-evaluated in the clone).
        doc.querySelectorAll(".section-fade").forEach((el) =>
          el.classList.add("visible")
        );
        chromeSelectors.forEach((sel) => {
          doc.querySelectorAll<HTMLElement>(sel).forEach((el) => {
            el.style.display = "none";
          });
        });
      },
    });
  } finally {
    // Restore chrome
    hiddenChrome.forEach(({ el, prev }) => {
      el.style.visibility = prev;
    });
  }

  // --- 3. Build PDF ---
  const pageWmm = 297;
  const pageHmm = 210;
  const marginMm = 6;
  const contentWmm = pageWmm - marginMm * 2;
  const contentHmm = pageHmm - marginMm * 2;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  // Cover
  drawCover(pdf, pageWmm, pageHmm);

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

    const dataUrl = slice.toDataURL("image/jpeg", 0.9);
    const sliceHmm = sh / pxPerMm;

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
      "Energy & Supply Transformation with RA+",
      pageWmm - marginMm,
      pageHmm - 2,
      { align: "right" }
    );

    y += sh;
  }

  // Restore hidden sections (they were originally hidden by IntersectionObserver
  // but the .visible class is harmless once content is on-screen).
  // No need to revert — observer would have added .visible eventually anyway.

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
