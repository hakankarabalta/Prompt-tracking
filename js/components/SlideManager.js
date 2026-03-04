/* ============================================
   PORTFOLIO TRACKER — SlideManager
   js/components/SlideManager.js

   Handles animated transitions between slides.
   ============================================ */

const SlideManager = (() => {

  const slides = () => Array.from(document.querySelectorAll('.slide'));

  /**
   * Transition from one slide to another.
   * @param {number} from  - current slide index
   * @param {number} to    - target slide index
   * @param {number} dir   - direction: 1 = forward, -1 = backward
   * @returns {Promise<void>}
   */
  function go(from, to, dir) {
    return new Promise(resolve => {
      const all = slides();
      const f   = all[from];
      const t   = all[to];

      // Position target offscreen instantly (no transition)
      t.style.transition = 'none';
      t.style.transform  = `translateX(${dir * 100}vw)`;
      t.style.opacity    = '0';
      t.classList.remove('active');

      // Force reflow, then animate
      requestAnimationFrame(() => requestAnimationFrame(() => {
        t.style.transition = '';
        t.style.transform  = 'translateX(0)';
        t.style.opacity    = '1';
        t.classList.add('active');

        f.style.transform = `translateX(${-dir * 30}vw)`;
        f.style.opacity   = '0';
        f.style.scale     = '0.97';

        setTimeout(() => {
          f.classList.remove('active');
          f.style.transform = '';
          f.style.opacity   = '';
          f.style.scale     = '';
          resolve();
        }, 680);
      }));
    });
  }

  return { go };

})();
