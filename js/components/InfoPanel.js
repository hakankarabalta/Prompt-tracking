/* ============================================
   PORTFOLIO TRACKER — InfoPanel
   js/components/InfoPanel.js

   Controls the sliding info panel:
   - open / close / toggle
   - updates content for current project
   ============================================ */

const InfoPanel = (() => {

  // DOM refs
  const panel      = document.getElementById('info-panel');
  const accentEl   = document.getElementById('panel-accent');
  const nameEl     = document.getElementById('panel-name');
  const promptEl   = document.getElementById('panel-prompt');
  const counterEl  = document.getElementById('panel-counter');
  const pathEl     = document.getElementById('panel-path');
  const btnInfo    = document.getElementById('btn-info');
  const backdrop   = document.getElementById('backdrop');

  let isOpen = false;

  /* ── Update content ── */
  function update(index) {
    const p = ProjectRegistry.get(index);
    if (!p) return;

    nameEl.textContent    = p.name;
    promptEl.textContent  = p.prompt;
    counterEl.textContent = `${index + 1} / ${ProjectRegistry.count()}`;
    pathEl.textContent    = p.path;

    accentEl.style.background =
      `linear-gradient(90deg, ${p.color}, transparent)`;
  }

  /* ── State ── */
  function open()   { isOpen = true;  document.body.classList.add('panel-open'); }
  function close()  { isOpen = false; document.body.classList.remove('panel-open'); }
  function toggle() { isOpen ? close() : open(); }

  /* ── Bindings ── */
  btnInfo.addEventListener('click', toggle);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) close();
  });

  return { open, close, toggle, update };

})();
