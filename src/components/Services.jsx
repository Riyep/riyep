import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Website Custom',
    subtitle: 'Landing Page, Company Profile, Platform Pemesanan',
    desc: 'Bikin website murah & profesional dengan desain modern, performa tinggi, mobile-friendly, dan terindeks Google. Dari landing page sederhana hingga platform web pemesanan produk yang terintegrasi payment gateway QRIS.',
    items: [
      'Landing Page & Website Portofolio',
      'Website Company Profile & Profil Bisnis',
      'Platform Pemesanan / Toko Online',
      'SPA Cepat, Responsif, & SEO-Ready',
    ],
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.15)',
    waMessage: 'Halo Riyep, saya ingin konsultasi Jasa Pembuatan Website.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="m8 21 4-4 4 4" /><path d="M8 14h.01M12 11h.01M16 8h.01" />
      </svg>
    ),
  },
  {
    id: 'pos',
    num: '02',
    title: 'Aplikasi Kasir & POS',
    subtitle: 'Point-of-Sale Modern untuk Kafe, Resto & Retail',
    desc: 'Jasa bikin mesin kasir dan sistem POS full-stack untuk kafe, restoran, dan toko. Dilengkapi pembayaran QRIS dinamis, manajemen stok real-time, split bill, dan dashboard laporan omzet harian.',
    items: [
      'Fast-Checkout & Struk Cetak Otomatis',
      'Integrasi QRIS, Kartu, & Split Bill',
      'Stok Bahan & Menu Real-Time',
      'Laporan Omzet & Arus Kas Harian',
    ],
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.15)',
    waMessage: 'Halo Riyep, saya butuh Jasa Pembuatan Aplikasi Kasir / POS.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'erp',
    num: '03',
    title: 'Mini ERP & Sistem Informasi',
    subtitle: 'Software Manajemen Operasional Internal Bisnis',
    desc: 'Pengembangan Mini ERP kustom untuk merampingkan alur kerja antar-departemen: helpdesk ticketing, manajemen aset & stok, RBAC multi-level, laporan CSV/Excel, dan notifikasi email otomatis.',
    items: [
      'Helpdesk & Issue Ticketing Multi-Divisi',
      'Role-Based Access Control 3-Level',
      'Manajemen Aset, Stok & Gudang',
      'Ekspor Laporan CSV / Excel Otomatis',
    ],
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.15)',
    waMessage: 'Halo Riyep, saya ingin konsultasi Jasa Mini ERP / Sistem Informasi Bisnis.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 'telegram-bot',
    num: '04',
    title: 'Bot Telegram Otomatis',
    subtitle: 'Payment QRIS, Akses VIP, & Notifikasi 24/7',
    desc: 'Jasa buat bot Telegram cerdas untuk otomasi pembayaran QRIS dinamis, penerbitan single-use invite link grup VIP (anti-leak), broadcast notifikasi, dan webhook database MySQL. Berjalan 24/7 di VPS.',
    items: [
      'Verifikasi Pembayaran QRIS Instan',
      'Single-Use Invite Link (Anti-Leak)',
      'Notifikasi & Webhook Database',
      'High Availability 24/7 di VPS Pribadi',
    ],
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.15)',
    waMessage: 'Halo Riyep, saya butuh Jasa Buat Bot Telegram Otomatis.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    id: 'network',
    num: '05',
    title: 'Infrastruktur Jaringan & Server',
    subtitle: 'MikroTik VPN, VLAN, NAS, & CCTV Enterprise',
    desc: 'Perancangan dan implementasi jaringan enterprise multi-cabang: Site-to-Site Encrypted VPN MikroTik, segmentasi VLAN Ruijie, sentralisasi Synology NAS, pengalamatan IP modular, dan monitoring NOC jarak jauh.',
    items: [
      'Site-to-Site VPN & MikroTik RouterOS',
      'VLAN Segmentasi & WiFi Enterprise',
      'File Server & Synology NAS Terpusat',
      'Surveillance CCTV & NOC Monitoring',
    ],
    color: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.15)',
    waMessage: 'Halo Riyep, saya ingin konsultasi Jasa Setting Jaringan & Server.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">Services</h2>

          <div className="services-list">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className={`service-item ${idx % 2 === 1 ? 'service-item--reverse' : ''}`}
                style={{ '--service-color': s.color, '--service-glow': s.glow }}
              >
                {/* Number + Icon side */}
                <div className="service-visual">
                  <div className="service-num-badge">{s.num}</div>
                  <div className="service-icon-wrap">
                    {s.icon}
                  </div>
                  <div className="service-connector" />
                </div>

                {/* Content side */}
                <div className="service-content">
                  <div className="service-content-inner">
                    <p className="service-subtitle-label">{s.subtitle}</p>
                    <h3 className="service-heading">{s.title}</h3>
                    <p className="service-body">{s.desc}</p>

                    <ul className="service-checklist">
                      {s.items.map((item, i) => (
                        <li key={i}>
                          <span className="service-check-icon" style={{ color: s.color }}>✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/6289677602300?text=${encodeURIComponent(s.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-cta"
                    >
                      Konsultasi Gratis
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
