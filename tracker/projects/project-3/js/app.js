/* ============================================
   NEON PORTFOLIO — App Entry Point
   js/app.js
   ============================================ */

const App = (() => {

  /* ── Render: Nav Links ── */
  function renderNav() {
    const container = document.getElementById('nav-links');
    PortfolioData.navLinks.forEach(link => {
      const a = document.createElement('a');
      a.className = 'nav-link';
      a.textContent = link;
      a.href = '#' + link.toLowerCase();
      container.appendChild(a);
    });
  }

  /* ── Render: Projects ── */
  function renderProjects() {
    const grid = document.getElementById('project-grid');
    PortfolioData.projects.forEach((proj, i) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.animationDelay = (i * 0.1) + 's';

      const tags = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-card__num">${proj.num}</div>
        <div class="project-card__title">${proj.title}</div>
        <div class="project-card__desc">${proj.desc}</div>
        <div class="project-card__tags">${tags}</div>
      `;

      // Re-bind cursor hover for dynamically added cards
      card.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      card.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));

      grid.appendChild(card);
    });
  }

  /* ── Render: Skills ── */
  function renderSkills() {
    const container = document.getElementById('skills-list');
    PortfolioData.skills.forEach((skill, i) => {
      const item = document.createElement('div');
      item.className = 'skill-item';
      item.innerHTML = `
        <div class="skill-item__label">
          <span>${skill.label}</span>
          <span>${Math.round(skill.pct * 100)}%</span>
        </div>
        <div class="skill-item__track">
          <div class="skill-item__fill"
               style="width:${skill.pct * 100}%;animation-delay:${0.2 + i * 0.08}s">
          </div>
        </div>
      `;
      container.appendChild(item);
    });
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.project-card, .about, .contact');

    if (!('IntersectionObserver' in window)) return;

    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 70);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    els.forEach(el => obs.observe(el));
  }

  /* ── Init ── */
  function init() {
    renderNav();
    renderProjects();
    renderSkills();
    initScrollReveal();
    Cursor.init();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
