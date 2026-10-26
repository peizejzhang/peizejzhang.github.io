/* HotSeat's nine-slide viewer. All media is served from this site's assets directory. */
(() => {
  "use strict";

  const trigger = document.querySelector("[data-hotseat-slides]");
  const script = document.currentScript;
  if (!trigger || !script || typeof HTMLDialogElement === "undefined") return;

  const assetBase = new URL(".", script.src);
  const slides = [
    ["Take the hot seat before the real one", "HotSeat cover, team members and Boson AI × MScAC Higgs Audio Hackathon 2026."],
    ["How we stand out", "Meaningful follow-up questions, smooth transitions, interviewer choices and feedback reports."],
    ["A live interview panel", "A host, technical lead and mentor listen to project answers and provide a report."],
    ["How it works: one loop", "The interview loop: transcribe an answer, write a follow-up, generate the voice and animate the interviewer."],
    ["An AI interview panel for your projects", "An illustrated overview of project discussion, adaptive follow-ups and feedback."],
    ["One panel, three Higgs models", "Higgs Realtime hosts the session, Higgs TTS 3 generates voices and Higgs Avatar animates the interviewers."],
    ["No awkward silence", "A timeline shows question and video preparation during the candidate's answer, followed by a turn-completion check."],
    ["Built on what you said", "Adaptive follow-ups, evidence for each score and a résumé check."],
    ["Thank you", "HotSeat closing slide, team members and questions."],
  ];
  const imageUrl = (index) => new URL("hotseat-slide-" + String(index + 1).padStart(2, "0") + ".webp", assetBase).href;

  const style = document.createElement("style");
  style.textContent = `
    #hotseat-slides-dialog {
      position: fixed; inset: 0; box-sizing: border-box;
      width: min(1200px, calc(100vw - 32px)); max-width: none;
      max-height: calc(100vh - 24px); max-height: calc(100dvh - 24px);
      margin: auto; padding: 0; overflow: auto; overscroll-behavior: contain;
      border: 1px solid #364152; border-radius: 12px;
      background: #101720; color: #f5f7fb;
      box-shadow: 0 24px 90px #0008; font: 16px/1.4 system-ui, sans-serif;
    }
    #hotseat-slides-dialog::backdrop { background: rgb(0 0 0 / 78%); }
    #hotseat-slides-dialog .hs-header,
    #hotseat-slides-dialog .hs-footer {
      display: flex; align-items: center; gap: 16px; padding: 12px 18px;
    }
    #hotseat-slides-dialog .hs-header { justify-content: space-between; }
    #hotseat-slides-dialog .hs-title {
      margin: 0; padding: 0; border: 0; color: inherit;
      font: 600 18px/1.4 system-ui, sans-serif;
    }
    #hotseat-slides-dialog button {
      display: inline-flex; align-items: center; justify-content: center;
      flex: 0 0 auto; min-height: 44px; min-width: 44px; margin: 0;
      padding: 8px 14px; border: 1px solid #435165; border-radius: 7px;
      background: #1c2837; color: #f5f7fb; font: 500 14px/1.2 system-ui, sans-serif;
      cursor: pointer; box-shadow: none; text-transform: none;
    }
    #hotseat-slides-dialog button:hover { background: #2c3c51; }
    #hotseat-slides-dialog button:disabled { opacity: .35; cursor: default; }
    #hotseat-slides-dialog :focus-visible { outline: 3px solid #9ed3ff; outline-offset: 3px; }
    #hotseat-slides-dialog .hs-close { font-size: 26px; padding: 4px; }
    #hotseat-slides-dialog .hs-stage { margin: 0; background: #080e16; }
    #hotseat-slides-dialog .hs-image {
      display: block; width: 100%; height: auto; margin: 0; border: 0;
      max-height: calc(100vh - 180px); max-height: calc(100dvh - 180px);
      object-fit: contain; touch-action: pan-y pinch-zoom;
    }
    #hotseat-slides-dialog .hs-footer { justify-content: space-between; }
    #hotseat-slides-dialog .hs-position { min-width: 0; flex: 1; text-align: center; }
    #hotseat-slides-dialog .hs-count { display: block; font-weight: 600; font-variant-numeric: tabular-nums; }
    #hotseat-slides-dialog .hs-caption { display: block; color: #b9c7d9; font-size: 13px; }
    #hotseat-slides-dialog .hs-pdf { color: #acd6f5; font-size: 13px; white-space: nowrap; }
    #hotseat-slides-dialog .hs-header-actions { display: flex; align-items: center; gap: 18px; }
    #hotseat-slides-dialog .hs-error { margin: 0; padding: 18px; color: #ffd2c5; }
    #hotseat-slides-dialog [hidden] { display: none !important; }
    @media (max-width: 600px) {
      #hotseat-slides-dialog { width: calc(100vw - 16px); border-radius: 10px; }
      #hotseat-slides-dialog .hs-header,
      #hotseat-slides-dialog .hs-footer { gap: 8px; padding: 10px; }
      #hotseat-slides-dialog .hs-title { font-size: 16px; }
      #hotseat-slides-dialog .hs-header-actions { gap: 10px; }
      #hotseat-slides-dialog .hs-nav-label { display: none; }
      #hotseat-slides-dialog .hs-caption { font-size: 12px; }
    }
  `;
  document.head.append(style);

  const dialog = document.createElement("dialog");
  dialog.id = "hotseat-slides-dialog";
  dialog.setAttribute("aria-labelledby", "hotseat-slides-title");
  dialog.innerHTML = `
    <header class="hs-header">
      <h2 class="hs-title" id="hotseat-slides-title">HotSeat slides</h2>
      <div class="hs-header-actions">
        <a class="hs-pdf" download="HotSeat-slides.pdf">Download PDF</a>
        <button type="button" class="hs-close" aria-label="Close slides" autofocus>&times;</button>
      </div>
    </header>
    <figure class="hs-stage">
      <img class="hs-image" width="1920" height="1080" alt="" decoding="async">
      <p class="hs-error" role="alert" hidden>This slide could not load. You can download the PDF above to view all nine pages.</p>
    </figure>
    <footer class="hs-footer">
      <button type="button" class="hs-previous" aria-label="Previous slide"><span aria-hidden="true">&#8592;</span><span class="hs-nav-label">&nbsp; Previous</span></button>
      <div class="hs-position" role="status" aria-live="polite" aria-atomic="true">
        <span class="hs-count"></span>
        <span class="hs-caption"></span>
      </div>
      <button type="button" class="hs-next" aria-label="Next slide"><span class="hs-nav-label">Next &nbsp;</span><span aria-hidden="true">&#8594;</span></button>
    </footer>
  `;
  document.body.append(dialog);

  const image = dialog.querySelector(".hs-image");
  const previous = dialog.querySelector(".hs-previous");
  const next = dialog.querySelector(".hs-next");
  const count = dialog.querySelector(".hs-count");
  const caption = dialog.querySelector(".hs-caption");
  const error = dialog.querySelector(".hs-error");
  dialog.querySelector(".hs-pdf").href = new URL("hotseat-slides.pdf", assetBase).href;
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-controls", dialog.id);

  let current = 0;
  let oldOverflow = "";
  let opener = null;
  let touchStart = null;
  let backdropStart = false;

  function showSlide(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    error.hidden = true;
    image.alt = "Slide " + (current + 1) + " of " + slides.length + ": " + slides[current][1];
    image.src = imageUrl(current);
    count.textContent = (current + 1) + " / " + slides.length;
    caption.textContent = slides[current][0];
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    [current - 1, current + 1].filter((i) => i >= 0 && i < slides.length).forEach((i) => {
      const preload = new Image();
      preload.src = imageUrl(i);
    });
  }

  image.addEventListener("error", () => { error.hidden = false; });
  image.addEventListener("load", () => { error.hidden = true; });
  previous.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));
  dialog.querySelector(".hs-close").addEventListener("click", () => dialog.close());

  trigger.addEventListener("click", (event) => {
    // Keep normal new-tab/download behavior and the PDF fallback available.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (dialog.open) return;
    opener = document.activeElement;
    showSlide(0);
    oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = oldOverflow;
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); showSlide(current - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); showSlide(current + 1); }
    if (event.key === "Home") { event.preventDefault(); showSlide(0); }
    if (event.key === "End") { event.preventDefault(); showSlide(slides.length - 1); }
  });
  const outside = (event) => {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  dialog.addEventListener("pointerdown", (event) => { backdropStart = event.target === dialog && outside(event); });
  dialog.addEventListener("click", (event) => {
    if (backdropStart && event.target === dialog && outside(event)) dialog.close();
    backdropStart = false;
  });
  image.addEventListener("touchstart", (event) => {
    touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  image.addEventListener("touchend", (event) => {
    if (!touchStart || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) showSlide(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  image.addEventListener("touchcancel", () => { touchStart = null; }, { passive: true });
})();
