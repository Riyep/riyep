import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const contacts = [
  {
    href: 'https://wa.me/6289677602300?text=Halo%20Rio,%20saya%20tertarik%20untuk%20membangun%20aplikasi/website.',
    img: '/Logo-WA.png',
    label: 'WhatsApp',
    platform: 'whatsapp',
    badge: '+62',
  },
  {
    href: 'mailto:riyepdev@gmail.com',
    img: '/Logo-Email.png',
    label: 'Email',
    platform: 'email',
    badge: 'riyepdev',
  },
  {
    href: 'https://instagram.com/ri.yep',
    icon: InstagramIcon,
    label: 'Instagram',
    platform: 'instagram',
    badge: '@ri.yep',
  },
  {
    href: 'https://facebook.com/riyep',
    icon: FacebookIcon,
    label: 'Facebook',
    platform: 'facebook',
    badge: '/riyep',
  },
  {
    href: 'https://github.com/Riyep',
    img: '/Logo_Github.png',
    label: 'GitHub',
    platform: 'github',
    badge: 'Riyep',
  },
];

const termsData = [
  {
    num: '01',
    title: 'Ketentuan Umum & Ruang Lingkup Layanan',
    desc: 'Syarat & Ketentuan ini mengatur penggunaan situs resmi www.riyep.com serta kesepakatan pemesanan jasa profesional yang disediakan oleh Rio Marcellino (Riyep), meliputi jasa pembuatan website, sistem kasir Point of Sale (POS), Mini ERP kustom, otomasi Telegram Bot, serta konfigurasi infrastruktur jaringan dan server.',
  },
  {
    num: '02',
    title: 'Spesifikasi Proyek & Scope of Work (SOW)',
    desc: 'Setiap proyek dimulai dengan kesepakatan tertulis mengenai cakupan kerja (Scope of Work), daftar fitur, estimasi durasi pengerjaan, dan deliverables akhir. Penambahan atau perubahan fitur di luar lingkup kesepakatan awal (scope creep) akan diperhitungkan sebagai add-on atau fase baru dengan penyesuaian biaya dan waktu.',
  },
  {
    num: '03',
    title: 'Sistem Pembayaran & Kebijakan Pembatalan',
    desc: 'Pembayaran proyek dilakukan berbasis milestone: Uang Muka (Down Payment / DP) sebesar 30% – 50% wajib diselesaikan sebelum pengerjaan arsitektur dan koding dimulai. Pelunasan diselesaikan setelah sesi testing dan demo disetujui klien, sebelum penyerahan hak akses final / deployment hosting produksi. Uang muka bersifat non-refundable apabila pembatalan sepihak diajukan oleh klien saat proses pengerjaan telah berjalan.',
  },
  {
    num: '04',
    title: 'Hak Kekayaan Intelektual & Kepemilikan Kode',
    desc: 'Setelah pembayaran diselesaikan 100%, klien memperoleh hak penuh atas deliverables kode sumber, aset desain spesifik proyek, dan hak operasional sistem. Pengembang (Riyep) berhak menampilkan proyek yang telah selesai sebagai bagian dari portofolio karya, kecuali terdapat perjanjian kerahasiaan tertulis (Non-Disclosure Agreement / NDA) yang disepakati sebelumnya.',
  },
  {
    num: '05',
    title: 'Garansi Bug & Pemeliharaan (Maintenance)',
    desc: 'Pengembang memberikan masa garansi perbaikan bug (Bug Warranty) selama 30 (tiga puluh) hari kalender sejak serah terima proyek, khusus untuk kesalahan fungsional yang bersumber dari kode program asli. Garansi tidak mencakup kerusakan akibat modifikasi kode oleh pihak ketiga, pergantian kebijakan API pihak ketiga (misal perubahan API Telegram atau regulasi Payment Gateway), atau kegagalan server penyedia hosting eksternal.',
  },
  {
    num: '06',
    title: 'Kerahasiaan Data & Keamanan Informasi',
    desc: 'Pengembang berkomitmen menjaga kerahasiaan penuh atas segala data bisnis, kredensial server, database, access token, dan informasi operasional milik klien. Data tidak akan dialihkan, dijual, atau dibagikan kepada pihak ketiga mana pun tanpa persetujuan eksplisit dari pihak klien.',
  },
  {
    num: '07',
    title: 'Batasan Tanggung Jawab (Limitation of Liability)',
    desc: 'Pengembang tidak bertanggung jawab atas kerugian operasional tidak langsung atau downtime bisnis yang disebabkan oleh faktor di luar kendali langsung pengembang, seperti gangguan server hosting (Vercel, VPS, AWS), pemadaman jaringan ISP lokal, atau kelalaian pengelolaan kata sandi oleh pihak klien.',
  },
  {
    num: '08',
    title: 'Hukum yang Berlaku & Komunikasi Resmi',
    desc: 'Syarat & Ketentuan ini tunduk pada hukum yang berlaku di Negara Kesatuan Republik Indonesia. Setiap pertanyaan, klarifikasi, atau konsultasi resmi dapat dilakukan melalui WhatsApp: +62 896-7760-2300 atau Email: riyepdev@gmail.com.',
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [termsOpen, setTermsOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setTermsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />

          {/* Section Title "Contacts" */}
          <h2 className="section-title">Contacts</h2>

          {/* Main Professional Contact Showcase */}
          <div className="contact-showcase glass-card">
            {/* Corner Badge: Logo next to Name (Rio Marcellino) */}
            <div className="contact-corner-identity">
              <img src="/logo.svg" alt="RYP Logo" className="contact-corner-logo" />
              <span className="contact-corner-name">Rio Marcellino</span>
            </div>

            {/* Centered Logo presentation */}
            <div className="contact-center-logo-wrap">
              <div className="contact-logo-halo" />
              <img src="/logo.svg" alt="RYP Logo" className="contact-center-logo" />
            </div>

            {/* Themed Professional Title & Text */}
            <div className="contact-text-wrap">
              <span className="contact-theme-badge">Direct Contact Available // Connect Now</span>
              <h2 className="contact-main-heading">Let&apos;s Build Your Apps</h2>
              <p className="contact-professional-desc">
                Siap mentransformasikan ide dan kebutuhan bisnis Anda menjadi perangkat lunak yang tangguh, modern, dan scalable.
                Mulai dari perancangan <strong>website profesional</strong>, <strong>sistem kasir POS</strong> terintegrasi QRIS,
                arsitektur <strong>Mini ERP operasional</strong>, <strong>otomasi Bot Telegram 24/7</strong>, hingga konfigurasi
                <strong> infrastruktur jaringan &amp; server enterprise</strong> — saya siap membantu dari konsep hingga implementasi produksi riil.
              </p>
              <p className="contact-sub-cta">
                Diskusikan proyek Anda secara langsung untuk estimasi waktu, fitur, dan konsultasi gratis:
              </p>
            </div>

            {/* Centered Channels Grid (WhatsApp etc.) */}
            <div className="contact-grid">
              {contacts.map((c) => (
                <a
                  key={c.platform}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  data-platform={c.platform}
                >
                  <div className="contact-icon-wrapper">
                    {c.icon ? <c.icon /> : <img src={c.img} alt={c.label} />}
                  </div>
                  <span className="contact-label">{c.label}</span>
                  {c.badge && <span className="contact-card-badge">{c.badge}</span>}
                </a>
              ))}
            </div>

            {/* Terms & Conditions Button: ON THE BOTTOM OF THE WHATSAPP ETC */}
            <div className="contact-terms-wrap">
              <button
                type="button"
                className="terms-pill-btn"
                onClick={() => setTermsOpen(true)}
                aria-label="Lihat Syarat & Ketentuan Layanan"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Terms &amp; Conditions</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Detail Terms & Conditions Modal */}
      {termsOpen && (
        <div className="modal-overlay" onClick={() => setTermsOpen(false)}>
          <div className="modal-container terms-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setTermsOpen(false)}
              aria-label="Tutup Syarat & Ketentuan"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="terms-modal-content">
              <div className="terms-modal-header">
                <div className="terms-header-badge">
                  <img src="/logo.svg" alt="RYP Logo" className="terms-header-logo" />
                  <span>LEGAL &amp; SERVICE AGREEMENT</span>
                </div>
                <h3 className="terms-modal-title">Terms &amp; Conditions</h3>
                <p className="terms-modal-meta">
                  Syarat &amp; Ketentuan Layanan Profesional • Domain: www.riyep.com • Efektif: 2026
                </p>
                <div className="modal-divider" />
              </div>

              <div className="terms-list">
                {termsData.map((t) => (
                  <div key={t.num} className="terms-item-card">
                    <div className="terms-item-num">{t.num}</div>
                    <div className="terms-item-body">
                      <h4 className="terms-item-title">{t.title}</h4>
                      <p className="terms-item-desc">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="terms-modal-footer">
                <p className="terms-footer-note">
                  Dengan menggunakan layanan atau menyepakati kerja sama proyek, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan di atas.
                </p>
                <button
                  type="button"
                  className="modal-btn primary-btn terms-agree-btn"
                  onClick={() => setTermsOpen(false)}
                >
                  Saya Mengerti &amp; Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
