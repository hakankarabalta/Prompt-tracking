/* ============================================
   PORTFOLIO TRACKER — Navigator
   js/components/Navigator.js

   Controls slide navigation:
   - arrow buttons (desktop)
   - dot indicators
   - keyboard arrows
   ============================================ */

const Navigator = (() => {

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const dotsEl  = document.getElementById('dots');

  const total = ProjectRegistry.count();
  let current = 0;
  let busy    = false;

  /* ── Build dots ── */
  function buildDots() {
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Proje ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  /* ── Sync UI state ── */
  function syncUI() {
    // Dots
    dotsEl.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    // Arrows
    btnPrev.classList.toggle('disabled', current === 0);
    btnNext.classList.toggle('disabled', current === total - 1);
    // Panel
    InfoPanel.update(current);
  }

  /* ── Navigate ── */
  async function goTo(index) {
    if (busy || index === current) return;
    if (index < 0 || index >= total) return;

    busy = true;

    const dir  = index > current ? 1 : -1;
    const from = current;
    current    = index;

    await SlideManager.go(from, current, dir);
    syncUI();

    busy = false;
  }

  /* ── Bindings ── */
  btnNext.addEventListener('click', () => goTo(current + 1));
  btnPrev.addEventListener('click', () => goTo(current - 1));

  document.addEventListener('keydown', e => {
    if (document.body.classList.contains('panel-open')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
  });

  return { buildDots, syncUI, goTo, getCurrent: () => current };

})();
