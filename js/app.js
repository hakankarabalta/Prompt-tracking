/* ============================================
   PORTFOLIO TRACKER — App Entry Point
   js/app.js

   Boot sequence — initializes all components
   in the correct order.

   Load order in index.html:
     1. ProjectRegistry.js
     2. SlideManager.js
     3. InfoPanel.js
     4. Navigator.js
     5. TouchSwipe.js
     6. app.js          ← this file
   ============================================ */

const App = (() => {

  function init() {
    // Build navigation dots
    Navigator.buildDots();

    // Sync initial UI state (arrows + panel content)
    Navigator.syncUI();
  }

  return { init };

})();

document.addEventListener('DOMContentLoaded', App.init);
