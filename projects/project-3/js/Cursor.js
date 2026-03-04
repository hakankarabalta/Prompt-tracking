/* ============================================
   NEON PORTFOLIO — Cursor Component
   js/Cursor.js
   ============================================ */

const Cursor = (() => {

  let cursorEl, ringEl;
  let tx = -200, ty = -200;
  let rx = -200, ry = -200;
  let animFrame;

  function init() {
    cursorEl = document.getElementById('cursor');
    ringEl   = document.getElementById('cursor-ring');

    if (!cursorEl || !ringEl) return;

    // Track mouse
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Hover state on interactive elements
    document.querySelectorAll('a, button, .project-card, .nav-link').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    loop();
  }

  function onMove(e) {
    tx = e.clientX;
    ty = e.clientY;
    cursorEl.style.left = tx + 'px';
    cursorEl.style.top  = ty + 'px';
    cursorEl.style.opacity = '1';
  }

  function onLeave() {
    cursorEl.style.opacity = '0';
    ringEl.style.opacity   = '0.3';
  }

  function onEnter() {
    cursorEl.style.opacity = '1';
    ringEl.style.opacity   = '1';
  }

  // Lerp ring toward cursor
  function loop() {
    rx += (tx - rx) * 0.12;
    ry += (ty - ry) * 0.12;
    ringEl.style.left = rx + 'px';
    ringEl.style.top  = ry + 'px';
    animFrame = requestAnimationFrame(loop);
  }

  function destroy() {
    document.removeEventListener('mousemove', onMove);
    cancelAnimationFrame(animFrame);
  }

  return { init, destroy };
})();
