/* ============================================
   NEON PORTFOLIO — Data Store
   js/data.js
   ============================================ */

const PortfolioData = (() => {

  const projects = [
    {
      num: '01',
      title: 'Quantum UI',
      desc: 'Next-gen component library with physics-based animations, adaptive theming, and zero-config dark mode.',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      link: '#',
    },
    {
      num: '02',
      title: 'Nebula CMS',
      desc: 'Headless CMS with real-time collaboration, AI-powered content generation, and full version history.',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
      link: '#',
    },
    {
      num: '03',
      title: 'Signal App',
      desc: 'Real-time trading dashboard with WebSocket data feeds, custom canvas charting engine, and smart alerts.',
      tags: ['Vue 3', 'Rust', 'WebSocket'],
      link: '#',
    },
    {
      num: '04',
      title: 'Echo AI',
      desc: 'Voice-first productivity tool powered by GPT-4 with context-aware task management and calendar sync.',
      tags: ['Python', 'OpenAI', 'FastAPI'],
      link: '#',
    },
  ];

  const skills = [
    { label: 'Frontend (React / Vue)',  pct: 0.94 },
    { label: 'Backend (Node / Python)', pct: 0.88 },
    { label: 'UI / Product Design',     pct: 0.85 },
    { label: 'DevOps & Infra',          pct: 0.72 },
    { label: 'Mobile (React Native)',   pct: 0.65 },
  ];

  const navLinks = ['Projects', 'About', 'Contact'];

  return { projects, skills, navLinks };
})();
