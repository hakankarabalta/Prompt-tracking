/* ============================================
   PORTFOLIO TRACKER — TouchSwipe
   js/components/TouchSwipe.js

   Handles touch swipe + mouse drag navigation.
   ============================================ */

const TouchSwipe = (() => {

  const viewport = document.getElementById('viewport');
  const THRESHOLD = 55; // px minimum swipe distance

  let startX = 0, startY = 0;

  /* ── Touch ── */
  viewport.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  viewport.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    // Only trigger on predominantly horizontal swipes
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      Navigator.goTo(Navigator.getCurrent() + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });

  /* ── Mouse drag (desktop fallback) ── */
  let mouseX = 0, isDragging = false;

  viewport.addEventListener('mousedown', e => {
    mouseX      = e.clientX;
    isDragging  = true;
  });

  viewport.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;

    const dx = e.clientX - mouseX;
    if (Math.abs(dx) > 80) {
      Navigator.goTo(Navigator.getCurrent() + (dx < 0 ? 1 : -1));
    }
  });

  viewport.addEventListener('mouseleave', () => { isDragging = false; });

  return {};

})();
