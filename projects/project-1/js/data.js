/* ============================================
   COSMIC DASHBOARD — Data Store
   js/data.js
   ============================================ */

const DashboardData = (() => {

  const kpis = [
    { label: 'Revenue',      value: '$84.2K', delta: '+12.4%', positive: true,  color: '#7878dc' },
    { label: 'Active Users', value: '24,891', delta: '+8.1%',  positive: true,  color: '#78c8dc' },
    { label: 'Conversion',   value: '3.24%',  delta: '-0.3%',  positive: false, color: '#78dc9f' },
    { label: 'Avg Session',  value: '4m 38s', delta: '+22s',   positive: true,  color: '#dc9f78' },
  ];

  const weeklyRevenue = {
    data:   [40, 65, 50, 80, 55, 90, 70],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  const trafficSources = [
    { label: 'Organic', value: 45, color: '#7878dc' },
    { label: 'Social',  value: 30, color: '#78dc9f' },
    { label: 'Direct',  value: 25, color: '#dc9f78' },
  ];

  const transactions = [
    { customer: 'Emre K.',   amount: '$1,200', date: 'Mar 1',  status: 'paid'    },
    { customer: 'Selin A.',  amount: '$845',   date: 'Feb 28', status: 'paid'    },
    { customer: 'Mehmet D.', amount: '$2,100', date: 'Feb 27', status: 'pending' },
    { customer: 'Ayşe T.',   amount: '$560',   date: 'Feb 26', status: 'failed'  },
    { customer: 'Can Y.',    amount: '$930',   date: 'Feb 25', status: 'paid'    },
  ];

  const navItems = [
    { icon: '📊', label: 'Dashboard', active: true  },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '🔔', label: 'Alerts',    active: false },
    { icon: '⚙️', label: 'Settings',  active: false },
  ];

  return { kpis, weeklyRevenue, trafficSources, transactions, navItems };
})();
