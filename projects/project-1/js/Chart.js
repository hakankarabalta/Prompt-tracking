/* ============================================
   COSMIC DASHBOARD — Chart Component
   components/Chart.js
   ============================================ */

const Chart = (() => {

  /**
   * Renders animated bar chart into a container element
   * @param {HTMLElement} container
   * @param {number[]} data - array of height values (0-100)
   * @param {string[]} [labels] - optional x-axis labels
   */
  function renderBarChart(container, data, labels = []) {
    container.innerHTML = '';
    container.classList.add('bar-chart');

    const max = Math.max(...data);

    data.forEach((val, i) => {
      const bar = document.createElement('div');
      bar.classList.add('bar-chart__bar');

      const heightPct = (val / max) * 90; // max 90px
      bar.style.height = heightPct + 'px';
      bar.style.animationDelay = (i * 0.06) + 's';

      if (labels[i]) {
        bar.setAttribute('title', `${labels[i]}: ${val}`);
      }

      container.appendChild(bar);
    });
  }

  /**
   * Updates donut chart SVG with given segments
   * @param {SVGElement} svg
   * @param {Array<{value: number, color: string, label: string}>} segments
   */
  function renderDonut(svg, segments) {
    const total = segments.reduce((s, seg) => s + seg.value, 0);
    let offset = 25; // start offset for top alignment

    // Clear existing circles except the background
    const existingCircles = svg.querySelectorAll('circle.segment');
    existingCircles.forEach(c => c.remove());

    segments.forEach(seg => {
      const pct = (seg.value / total) * 100;
      const gap = 100 - pct;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.classList.add('segment');
      circle.setAttribute('cx', '18');
      circle.setAttribute('cy', '18');
      circle.setAttribute('r', '15.9');
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', seg.color);
      circle.setAttribute('stroke-width', '3.5');
      circle.setAttribute('stroke-dasharray', `${pct} ${gap}`);
      circle.setAttribute('stroke-dashoffset', String(offset));
      circle.setAttribute('transform', 'rotate(-90 18 18)');

      svg.appendChild(circle);
      offset -= pct;
    });
  }

  return { renderBarChart, renderDonut };
})();
