/* ============================================
   PORTFOLIO TRACKER — ProjectRegistry
   js/components/ProjectRegistry.js

   Single source of truth for all projects.
   To add a new project:
     1. Create folder: projects/project-N/
     2. Add entry to the `projects` array below.
   ============================================ */

const ProjectRegistry = (() => {

  const projects = [
    {
      id:     'project-1',
      name:   'Cosmic Dashboard',
      path:   'projects/project-1/index.html',
      color:  '#7878c8',
      prompt: 'Modern bir analitik dashboard tasarla. Gerçek zamanlı veri görselleştirme, dark theme, glassmorphism kartlar ve animasyonlu grafikler içersin. Sol sidebar navigasyon, üstte KPI widget\'ları olsun.',
    },
    {
      id:     'project-2',
      name:   'Aurora Landing',
      path:   'projects/project-2/index.html',
      color:  '#78c8a0',
      prompt: 'SaaS ürünü için etkileyici bir landing page oluştur. Hero bölümünde büyük tipografi ve gradient arka plan olsun. Özellikler, fiyatlandırma ve CTA bölümleri içersin. Scroll animasyonları ekle.',
    },
    {
      id:     'project-3',
      name:   'Neon Portfolio',
      path:   'projects/project-3/index.html',
      color:  '#c878c8',
      prompt: 'Yaratıcı bir kişisel portfolyo sitesi tasarla. Neon renkler ve siber-punk estetik kullan. Projeler grid\'i, hakkımda bölümü ve iletişim formu olsun. Mouse cursor\'a göre değişen interaktif arka plan ekle.',
    },
  ];

  return {
    all:   ()  => projects,
    get:   (i) => projects[i],
    count: ()  => projects.length,
  };

})();
