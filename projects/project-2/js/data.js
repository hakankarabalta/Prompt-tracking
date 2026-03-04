/* ============================================
   AURORA LANDING — Content Data
   js/data.js
   ============================================ */

const SiteData = (() => {

  const features = [
    {
      icon: '⚡',
      title: 'Instant Deploy',
      desc: 'Push to production in seconds with zero-config deployments and automatic rollbacks on every commit.',
    },
    {
      icon: '🔮',
      title: 'AI Powered',
      desc: 'Built-in AI assistant that deeply understands your codebase and helps your team build 10× faster.',
    },
    {
      icon: '🛡️',
      title: 'Always Secure',
      desc: 'Enterprise-grade security with SOC 2 compliance, SSO, audit logs, and end-to-end encryption at rest.',
    },
    {
      icon: '🌐',
      title: 'Global Edge',
      desc: 'Deploy to 300+ edge locations worldwide. Sub-50ms response times everywhere on the planet.',
    },
    {
      icon: '🔗',
      title: 'Integrations',
      desc: 'One-click integrations with GitHub, GitLab, Jira, Slack, Linear, Datadog, and 200+ more tools.',
    },
    {
      icon: '📊',
      title: 'Observability',
      desc: 'Real-time logs, metrics, and traces built in. No extra setup needed — it just works out of the box.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      features: ['3 Projects', '10 GB Storage', '100K API calls/mo', 'Community Support'],
      cta: 'Get Started',
      ctaStyle: 'outline',
      featured: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/mo',
      features: ['Unlimited Projects', '100 GB Storage', '10M API calls/mo', 'Priority Support'],
      cta: 'Start Free Trial',
      ctaStyle: 'primary',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Custom Limits', 'Dedicated Infra', 'Unlimited API calls', '24/7 SLA Support'],
      cta: 'Contact Sales',
      ctaStyle: 'secondary',
      featured: false,
    },
  ];

  const navLinks = ['Product', 'Pricing', 'Docs', 'Blog', 'Company'];

  return { features, plans, navLinks };
})();
