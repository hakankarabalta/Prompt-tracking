/* ============================================
   COSMIC DASHBOARD — App Entry Point
   js/app.js
   ============================================ */

const App = (() => {

  /* ── Render: Sidebar ── */
  function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    DashboardData.navItems.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'nav-icon' + (item.active ? ' active' : '');
      btn.textContent = item.icon;
      btn.setAttribute('title', item.label);
      btn.setAttribute('aria-label', item.label);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-icon').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      nav.appendChild(btn);
    });
  }

  /* ── Render: KPI Cards ── */
  function renderKPIs() {
    const grid = document.getElementById('kpi-grid');
    DashboardData.kpis.forEach(kpi => {
      const card = document.createElement('div');
      card.className = 'kpi-card';
      card.style.setProperty('--kpi-color', kpi.color);
      card.innerHTML = `
        <div class="kpi-card__label">${kpi.label}</div>
        <div class="kpi-card__value">${kpi.value}</div>
        <div class="kpi-card__delta ${kpi.positive ? '' : 'negative'}">${kpi.delta}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Render: Bar Chart ── */
  function renderBarChart() {
    const container = document.getElementById('bar-chart');
    Chart.renderBarChart(
      container,
      DashboardData.weeklyRevenue.data,
      DashboardData.weeklyRevenue.labels
    );
  }

  /* ── Render: Donut Chart ── */
  function renderDonut() {
    const svg = document.getElementById('donut-svg');
    Chart.renderDonut(svg, DashboardData.trafficSources);

    const legend = document.getElementById('donut-legend');
    DashboardData.trafficSources.forEach(seg => {
      const item = document.createElement('div');
      item.className = 'donut-legend__item';
      item.innerHTML = `
        <div class="donut-legend__dot" style="background:${seg.color}"></div>
        <span>${seg.label} — ${seg.value}%</span>
      `;
      legend.appendChild(item);
    });
  }

  /* ── Render: Table ── */
  function renderTable() {
    const tbody = document.getElementById('table-body');
    DashboardData.transactions.forEach(tx => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${tx.customer}</td>
        <td>${tx.amount}</td>
        <td class="text-dim">${tx.date}</td>
        <td><span class="status status--${tx.status}">${tx.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  /* ── Init ── */
  function init() {
    renderSidebar();
    renderKPIs();
    renderBarChart();
    renderDonut();
    renderTable();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
