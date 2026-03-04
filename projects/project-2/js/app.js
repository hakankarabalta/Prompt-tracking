/* ============================================
   AURORA LANDING — App Entry Point
   js/app.js
   ============================================ */

const App = (() => {

  /* ── Render: Navbar Links ── */
  function renderNav() {
    const navLinks = document.getElementById('nav-links');
    SiteData.navLinks.forEach(link => {
      const a = document.createElement('a');
      a.className = 'navbar__link';
      a.textContent = link;
      a.href = '#';
      navLinks.appendChild(a);
    });
  }

  /* ── Render: Feature Cards ── */
  function renderFeatures() {
    const grid = document.getElementById('feature-grid');
    SiteData.features.forEach(f => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      card.innerHTML = `
        <div class="feature-card__icon">${f.icon}</div>
        <div class="feature-card__title">${f.title}</div>
        <div class="feature-card__desc">${f.desc}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Render: Pricing Cards ── */
  function renderPricing() {
    const grid = document.getElementById('pricing-grid');
    SiteData.plans.forEach(plan => {
      const card = document.createElement('div');
      card.className = 'pricing-card' + (plan.featured ? ' pricing-card--featured' : '');

      const featureItems = plan.features.map(f => `<li>${f}</li>`).join('');
      const btnClass = `btn btn--${plan.ctaStyle} btn--full`;

      card.innerHTML = `
        <div class="pricing-card__badge">${plan.name}</div>
        <div class="pricing-card__price">
          ${plan.price}<span>${plan.period}</span>
        </div>
        <ul class="pricing-card__features">${featureItems}</ul>
        <button class="${btnClass}">${plan.cta}</button>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Navbar scroll state ── */
  function initNavScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.style.background = 'rgba(3, 3, 8, 0.95)';
      } else {
        navbar.style.background = 'rgba(3, 3, 8, 0.75)';
      }
    }, { passive: true });
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.feature-card, .pricing-card');

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.style.opacity = '1');
      return;
    }

    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
  }

  /* ── Init ── */
  function init() {
    renderNav();
    renderFeatures();
    renderPricing();
    initNavScroll();
    initScrollReveal();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
