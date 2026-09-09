import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCards = [
  {
    tag: '[01 // FRONTEND]',
    title: 'Frontend Architecture',
    accent: '#f97316', // orange icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Bootstrap 5',
      'HTML5 / CSS3',
      'Vite',
      'Responsive Design',
      'UI/UX Implementation',
    ],
  },
  {
    tag: '[02 // BACKEND]',
    title: 'Backend & APIs',
    accent: '#22c55e', // green icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    skills: [
      'PHP',
      'Laravel Framework',
      'Node.js & Express',
      'Python',
      'RESTful APIs',
      'Blade Templating',
      'aiogram (Telegram Bot)',
      'JWT & Auth',
      'Microservices',
    ],
  },
  {
    tag: '[03 // DATA]',
    title: 'Data & Storage',
    accent: '#a855f7', // purple icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: [
      'MySQL',
      'Eloquent ORM',
      'Synology NAS',
      'RAID Storage Pool',
      'SMB / NFS Protocols',
      'Schema Design',
      'LocalStorage & Cache',
      'CSV / Excel Export',
    ],
  },
  {
    tag: '[04 // NETWORKING]',
    title: 'Network Infrastructure',
    accent: '#f97316', // orange icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="12" x="4" y="6" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M8 18v4" />
        <path d="M16 18v4" />
      </svg>
    ),
    skills: [
      'MikroTik RouterOS',
      'Winbox',
      'Site-to-Site VPN',
      'WireGuard / IPsec',
      'Ruijie Managed Switch',
      'VLAN 802.1Q',
      'IPv4 Subnetting (CIDR)',
      'Firewall & QoS',
      'NOC Monitoring',
    ],
  },
  {
    tag: '[05 // DEVOPS]',
    title: 'DevOps & Systems',
    accent: '#22c55e', // green icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M18 15V9a6 6 0 0 0-6-6" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6" />
      </svg>
    ),
    skills: [
      'Git & GitHub',
      'Proxmox VE',
      'Ubuntu Server',
      'Systemd Daemon',
      'Vercel Deployment',
      'Custom Domain & DNS',
      'Ruijie Cloud APs',
      'Hikvision NVR & CCTV',
    ],
  },
  {
    tag: '[06 // SOLUTIONS]',
    title: 'Enterprise & Solutions',
    accent: '#a855f7', // purple icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      'POS Cashier Systems',
      'Mini ERP Architecture',
      'IT Helpdesk & Ticketing',
      'Tripay QRIS Gateway',
      'Hardware Diagnostics',
      'SEO Schema JSON-LD',
      'Open Graph Protocol',
      'System Integration',
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">Skills &amp; Architecture</h2>

          <div className="skills-matrix">
            {skillCards.map((card) => (
              <div key={card.tag} className="skills-matrix-card">
                <div className="skills-card-header">
                  <span className="skills-matrix-tag">{card.tag}</span>
                  <div
                    className="skills-matrix-icon-badge"
                    style={{
                      color: card.accent,
                      borderColor: `${card.accent}40`,
                      boxShadow: `0 0 12px ${card.accent}20`,
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                <h3 className="skills-matrix-title">{card.title}</h3>

                <div className="skills-tags-wrap">
                  {card.skills.map((skill) => (
                    <span key={skill} className="skills-tag-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
