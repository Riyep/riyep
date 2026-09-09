import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Eager load all project images from src/images
const projectImages = import.meta.glob('../images/*.jpg', { eager: true, import: 'default' });
const getImg = (name) => projectImages[`../images/${name}.jpg`] || '';

const projects = [
  {
    id: 1,
    title: 'Bakule Lele – Web Pemesanan & Distribusi Lele Segar Surabaya',
    desc: 'Platform pemesanan dan distribusi lele segar Surabaya dengan kalkulator order otomatis dan gateway pembayaran QRIS Tripay.',
    about: 'Platform web pemesanan lele segar berbasis di Surabaya yang menghubungkan peternak langsung dengan pelaku usaha kuliner (warung pecel lele, restoran, katering) serta kebutuhan rumah tangga. Dilengkapi sistem kalkulasi otomatis, integrasi gateway pembayaran QRIS via Tripay, dan penerusan pesanan instan ke WhatsApp.',
    images: [getImg('project_1a'), getImg('project_1b'), getImg('project_1c')],
    features: [
      'Kalkulator Order Otomatis: Perhitungan total belanja instan berdasarkan jumlah kilogram pesanan dengan batas maksimum 20kg per transaksi.',
      'Integrasi Payment Gateway (Tripay): Pembuatan transaksi instan dengan kode QRIS dinamis untuk pembayaran non-tunai.',
      'Konfirmasi Otomatis via WhatsApp: Notifikasi dan rincian pesanan terformat otomatis yang langsung diteruskan ke admin via WhatsApp.',
      'Desain Responsif & Mobile-Friendly: Akses cepat dan optimal untuk pengguna smartphone.',
      'Performa Cepat (SPA): Dibangun dengan arsitektur modern untuk loading ringan tanpa reload halaman.',
    ],
    tech: [
      'React 19',
      'Vite',
      'JavaScript (ESNext)',
      'Bootstrap 5',
      'LineIcons',
      'Custom CSS',
      'Dynamic QRIS',
      'React Hooks & LocalStorage',
      'Custom Domain',
    ],
    demoUrl: 'https://bakule-lele.web.id/',
    repoUrl: null,
  },
  {
    id: 2,
    title: 'Kyuka Ramen – Web Experience Restoran Ramen Halal Bergaya Fukuoka & Retro Arcade',
    desc: 'Platform web restoran ramen otentik bergaya retro Japanese arcade & cyberpunk dengan menu tematik dan reservasi WhatsApp.',
    about: 'Kyuka Ramen adalah platform web modern bertema retro Japanese arcade untuk jaringan restoran ramen otentik khas Fukuoka di Indonesia. Mengusung komitmen 100% Halal (No Pork, No Lard, No Mirin), website ini memadukan nuansa visual cyberpunk dan pixel art interaktif dengan fungsi penjelajahan menu eksklusif serta sistem pencarian cabang dan reservasi meja terintegrasi langsung ke WhatsApp.',
    images: [getImg('project_2a'), getImg('project_2b'), getImg('project_2c')],
    features: [
      'Desain UI Retro Arcade & Cyberpunk: Tampilan visual imersif dengan palet neon glow (magenta, cyan, navy), tipografi 8-bit (Press Start 2P & Modak), efek scanlines, dan dekorasi piksel.',
      'Katalog Menu Interaktif: Navigasi kategori tematik mencakup Red Series (Karamara & Karamiso), Black Series (Yami Ramen), Matcha Series (kolaborasi eksklusif dengan Feel Matcha), hingga Truffle Signature Series.',
      'Multi-Branch Locator: Direktori terstruktur untuk 6 cabang di berbagai kota (Gading Serpong, Surabaya Kertajaya, Graha Family, Depok) dilengkapi informasi jam operasional dan integrasi Google Maps.',
      'Direct-to-WhatsApp Reservation: Integrasi pemesanan meja instan dengan template pesan otomatis sesuai cabang yang dipilih pelanggan.',
      'Arsitektur SPA Ringan & Responsif: Dibangun dengan React dan Vite untuk navigasi kilat tanpa reload dan optimal di layar smartphone.',
    ],
    tech: [
      'React 19',
      'JavaScript (ES6+)',
      'Vite',
      'Modern CSS3',
      'CSS Variables',
      'Glassmorphism',
      'Neon Box-Shadow Glows',
      'Google Fonts (Press Start 2P, Modak, Inter)',
      'WhatsApp API',
      'Google Maps',
      'Vercel',
    ],
    demoUrl: 'https://kyuka-ramen.vercel.app/',
    repoUrl: null,
  },
  {
    id: 3,
    title: 'Kopi Toko Djawa – Website Profil & Katalog Menu Digital Kedai Kopi Klasik Nusantara',
    desc: 'Website profil bernuansa nostalgia heritage untuk kedai kopi legendaris asal Braga Bandung dengan katalog menu digital dan locator cabang.',
    about: 'Website resmi dan portal informasi digital untuk Kopi Toko Djawa, kedai kopi bernuansa retro klasik yang bermula dari Jalan Braga, Bandung, dan kini melayani pelanggan di Bandung, Jakarta, serta Surabaya. Platform ini dirancang dengan gaya visual nostalgia yang hangat, memudahkan pelanggan menjelajahi menu signature, menemukan titik lokasi gerai terdekat, dan terhubung langsung untuk reservasi maupun pemesanan via WhatsApp.',
    images: [getImg('project_3a'), getImg('project_3b'), getImg('project_3c')],
    features: [
      'Identitas Visual Nostalgia & Heritage: Desain bertema vintage dengan palet warna merah marun (#c5161d), krem hangat, serta tipografi klasik kombinasi Playfair dan Inter.',
      'Katalog Menu Interaktif: Filter kategori sajian kopi dan kudapan (Coffee, Fruit Coffee, Non-Coffee, Cookies) lengkap dengan label produk unggulan (Best Seller, Signature).',
      'Direktori Cabang Multi-Kota: Informasi lokasi cabang di kota-kota utama (Bandung, Jakarta, Surabaya) disertai jam operasional dan tautan peta.',
      'Direct WhatsApp Integration: Tombol mengambang (floating button) untuk kemudahan konsultasi, pemesanan, atau pertanyaan pelanggan secara langsung.',
      'Optimasi SEO & Rich Snippets: Didukung implementasi Schema.org (JSON-LD Local Business & CoffeeShop) serta Open Graph untuk visibilitas optimal di mesin pencari.',
      'Arsitektur Cepat & Responsif: Dibangun sebagai Single Page Application yang ringan, cepat dimuat, dan nyaman diakses melalui smartphone.',
    ],
    tech: [
      'React 19',
      'JavaScript (ES6+)',
      'Vite',
      'CSS3 Custom Properties',
      'Responsive Media Queries',
      'Google Fonts (Playfair, Inter)',
      'Schema.org JSON-LD',
      'Open Graph Protocol',
      'WhatsApp Click-to-Chat API',
      'Vercel',
    ],
    demoUrl: 'https://kopi-toko-djawa.vercel.app/',
    repoUrl: null,
  },
  {
    id: 4,
    title: 'Surabaya Ink Well – Website Profil & Sistem Booking Studio Tato Kustom Surabaya',
    desc: 'Platform reservasi studio tato kustom dengan estetika monokrom gothic, panduan penempatan anatomi, dan pemesanan home service.',
    about: 'Website profil resmi dan platform reservasi digital untuk Surabaya Ink Well, studio seni tato kustom profesional di Surabaya. Mengusung estetika visual monokrom gelap (dark gothic & anatomical sketch), website ini dirancang untuk memamerkan portofolio karya seni rajah tubuh, panduan penempatan tato (Tattoo Placement Guide), konsultasi desain, serta sistem pemesanan janji temu studio maupun layanan panggilan (home service).',
    images: [getImg('project_4a'), getImg('project_4b'), getImg('project_4c')],
    features: [
      'Desain Monokrom Dark Aesthetic: Tampilan visual bernuansa gelap elegan dengan fotografi hitam-putih kontras tinggi, aksen stempel emas, serta tipografi tegas Oswald dan Source Sans 3.',
      'Interactive Tattoo Placement Guide: Panduan visual interaktif untuk area penempatan tato tubuh (Head, Chest, Back, Arm, Leg) lengkap dengan ilustrasi sketsa anatomi tubuh.',
      'Dual Appointment Booking System: Sistem pemesanan janji temu fleksibel yang memfasilitasi sesi tato di studio (In-Studio Booking) maupun panggilan artis tato ke lokasi pelanggan (Call Artist to Place).',
      'Direct WhatsApp Consultation & Booking: Integrasi pemesanan langsung ke nomor resmi artis tato via WhatsApp untuk konsultasi konsep, ukuran, dan estimasi pengerjaan.',
      'Optimasi SEO & Schema TattooParlor: Penerapan metadata terstruktur Schema.org (Local Business - TattooParlor) dan Open Graph untuk visibilitas lokal di Surabaya dan Jawa Timur.',
      'Desain Responsif & Mobile-Friendly: Antarmuka ringan dan adaptif untuk pengalaman browsing portofolio tato yang mulus di perangkat smartphone.',
    ],
    tech: [
      'Semantic HTML5',
      'Modern CSS3',
      'JavaScript (ES6+)',
      'Parallax Scrolling',
      'Custom Dark Theme',
      'Google Fonts (Oswald, Source Sans 3)',
      'Schema.org JSON-LD (TattooParlor)',
      'Open Graph Protocol',
      'WhatsApp Click-to-Chat API',
      'Google Maps Geo-Coordinates',
      'Custom Domain',
    ],
    demoUrl: 'https://surabayaink.web.id/',
    repoUrl: null,
  },
  {
    id: 5,
    title: 'Riyep POS – Sistem Kasir & Manajemen Penjualan Kafe Modern (Full-Stack POS Application)',
    desc: 'Sistem POS full-stack kafe & resto dengan fast-checkout, manajemen meja, kalkulasi split bill & diskon, dan laporan omzet real-time.',
    about: 'Riyep POS adalah solusi perangkat lunak Point of Sale (POS) modern yang dirancang untuk mengoptimalkan operasional harian kafe, kedai kopi, dan restoran. Dibangun dengan fondasi full-stack menggunakan Laravel, React, dan basis data lokal MySQL, sistem ini menghadirkan pengalaman transaksi kasir cepat (fast-checkout), manajemen pesanan meja (Dine In & Take Away), fleksibilitas metode pembayaran (Tunai, QRIS, Kartu, Split Bill), pemantauan stok bahan/menu secara real-time, hingga rekapitulasi laporan omzet dan arus kas otomatis.',
    images: [getImg('project_5a'), getImg('project_5b'), getImg('project_5c')],
    features: [
      'Katalog Kasir Cepat & Indikator Stok Real-Time: Grid visual intuitif dengan pencarian instan, filter kategori (Coffee, Artisan Tea, Bread, Food, Dessert), serta badge ketersediaan stok (Sisa Stok).',
      'Order Management & Kalkulator Diskon: Pemilihan jenis layanan (Dine In / Take Away), penerapan potongan diskon cepat (0% – 20%), serta kalkulasi otomatis pajak (PPN 10%) dan subtotal.',
      'Multi-Payment Gateway & Split Bill: Fleksibilitas transaksi tunai dengan tombol uang pas dan pecahan nominal cepat, pembayaran digital QRIS & kartu debit, hitung kembalian otomatis, serta opsi pembayaran terpisah (split payment).',
      'Dashboard Laporan Penjualan & Jurnal Kas: Modal ringkasan finansial harian mencakup total omzet bersih, jumlah transaksi, total item terjual, persentase metode bayar, dan pencatatan riwayat struk transaksi secara detail.',
      'Arsitektur Database Lokal (MySQL) & API Laravel: Dukungan basis data lokal untuk transaksi kasir yang stabil, cepat, dan aman, siap disinkronisasikan ke backend Laravel.',
      'Desain Dark Mode Responsif (Multi-Device): Antarmuka modern yang nyaman di mata kasir dan fleksibel dioperasikan melalui layar monitor POS, tablet meja, maupun smartphone pelayan.',
    ],
    tech: [
      'Laravel (PHP)',
      'RESTful API',
      'React',
      'JavaScript (ES6+)',
      'Vite',
      'MySQL',
      'Custom Dark Theme',
      'CSS Custom Properties',
      'Outfit & Inter Typography',
      'React Hooks & State Management',
      'Export Laporan Transaksi',
      'QRIS Generator Ready',
    ],
    demoUrl: 'https://riyep-pos-demo.vercel.app/',
    repoUrl: 'https://github.com/Riyep/POS-Demo',
  },
  {
    id: 6,
    title: 'Infrastruktur Jaringan Multi-Branch 3 Cabang (MikroTik RouterOS) & Sentralisasi Data Center Synology NAS',
    desc: 'Implementasi arsitektur jaringan enterprise 3 kantor cabang ke HQ via Encrypted Site-to-Site VPN, VLAN Ruijie, dan storage terpusat Synology NAS.',
    about: 'Perancangan dan implementasi arsitektur jaringan enterprise multi-lokasi yang menghubungkan 3 kantor cabang (Branch Offices) ke Data Center kantor pusat (HQ) menggunakan MikroTik RouterOS melalui jalur Site-to-Site Encrypted VPN. Sistem ini mengintegrasikan Ruijie Managed Switch untuk segmentasi Layer 2 berbasis VLAN, sentralisasi data kerja kolaboratif dengan Synology NAS, server domain Windows Server, isolasi jaringan kamera Hikvision NVR, serta pembagian skema subnetting IP modular guna menjamin keamanan, efisiensi bandwidth, dan keandalan operasional bisnis.',
    images: [getImg('project_6a'), getImg('project_6b'), getImg('project_6c')],
    features: [
      'Site-to-Site Encrypted VPN (3 Cabang Interconnect): Terowongan VPN aman antar-cabang dengan fitur auto-reconnect dan enkripsi kuat untuk akses langsung ke server lokal dan sistem data center pusat.',
      'Segmentasi VLAN & Keamanan L2 (Ruijie Managed Switch): Pembagian zona traffic terisolasi (Management, Server, AP, CCTV, Client LAN, dan Tamu/WiFi) untuk mencegah kebocoran data dan membatasi broadcast domain.',
      'Sentralisasi Data Center & Storage (Synology NAS): Penyimpanan terpusat berkecepatan tinggi dengan proteksi RAID, hak akses berbasis divisi, dan sinkronisasi data antar-cabang secara real-time.',
      'Jaringan Khusus Surveillance (Hikvision NVR): Penempatan sistem NVR dan kamera IP pada subnet terisolasi (10.10.10.x) agar beban video streaming tidak mengganggu latensi jaringan kerja perkantoran.',
      'Skema Pengalamatan IP Terstruktur: Windows Server (10.1.1.0/24), Switch Management (172.16.0.0/24), AP Infrastructure (172.17.1.0/24), Hikvision NVR (10.10.10.0/24), Client LAN (192.168.11.0/24), Client WiFi (191.168.12.0/24).',
      'Mobile Network Operations (NOC Monitoring): Pemantauan visual jarak jauh melalui MikroTik RouterOS Mobile dan Ruijie Cloud untuk deteksi dini utilisasi bandwidth dan link health.',
    ],
    tech: [
      'MikroTik RouterOS',
      'Winbox',
      'WireGuard / IPsec Site-to-Site VPN',
      'Firewall Mangle / NAT / QoS',
      'Ruijie Managed Switch (VLAN 802.1Q, Trunking, RSTP)',
      'Synology NAS (RAID Storage Pool, SMB/NFS)',
      'Windows Server (Active Directory, DNS/DHCP)',
      'Ruijie Cloud APs',
      'Hikvision NVR & IP Cameras',
      'IPv4 CIDR Subnetting',
    ],
    demoUrl: null,
    repoUrl: null,
    note: 'Infrastruktur Produksi Riil (Enterprise Deployment)',
  },
  {
    id: 7,
    title: 'Bot Pembayaran Telegram QRIS Otomatis – Sistem Akses Grup VIP & Membership 24/7',
    desc: 'Bot Telegram asynchronous untuk otomasi pembayaran QRIS dinamis, verifikasi instan, dan penerbitan single-use invite link grup VIP.',
    about: 'Bot Telegram cerdas berbasis asynchronous yang dirancang untuk mengotomatisasi proses monetisasi komunitas berbayar dan grup privat secara penuh tanpa campur tangan admin manual. Pengguna cukup memilih durasi paket langganan, memindai kode QRIS dinamis yang dibuat otomatis, dan secara instan menerima tautan masuk grup privat yang hanya dapat digunakan 1 kali (single-use invite link) demi menjamin keamanan eksklusivitas keanggotaan.',
    images: [getImg('project_7a'), getImg('project_7b'), getImg('project_7c'), getImg('project_7d')],
    features: [
      'Alur Transaksi Otomatis (/start & Interactive Buttons): Navigasi cepat dan ramah pengguna melalui inline keyboard Telegram untuk pemilihan paket langganan (Bulanan, Multi-Bulan, maupun Akses Seumur Hidup).',
      'Pembuatan QRIS Dinamis Real-Time: Kode pembayaran QRIS dibuat langsung di dalam obrolan Telegram lengkap dengan batas waktu pembayaran (countdown timer).',
      'Verifikasi Pembayaran Instan: Sistem mendeteksi keberhasilan pembayaran secara otomatis dan langsung menerbitkan tanda receipt transaksi di dalam chat.',
      'Tautan Undangan 1x Pakai (Anti-Leak Protection): Bot secara otomatis menghasilkan tautan masuk grup berkuota tepat 1 orang (1-use only), mencegah link disebarkan ke pengguna lain yang belum membayar.',
      'Penyimpanan Data Terpusat (MySQL): Seluruh riwayat transaksi, ID pengguna Telegram, paket yang dipilih, dan tanggal kedaluwarsa tersimpan rapi dalam basis data relasional.',
      'High Availability di Private VPS: Berjalan tanpa henti 24/7 pada server VPS pribadi dengan arsitektur non-blocking berbasis Python aiogram.',
    ],
    tech: [
      'Python 3.11+',
      'aiogram (Asynchronous Framework)',
      'MySQL Relational Database',
      'Private VPS (Ubuntu Server)',
      'Systemd Daemon Process',
      'Telegram Bot API Webhook/Polling',
      'Secure One-Time Deep Link Token',
      'Dynamic QRIS Engine',
    ],
    demoUrl: null,
    repoUrl: null,
    note: 'Sistem Bot Produksi Aktif (Private Deployment)',
  },
  {
    id: 8,
    title: 'Circle Care – Sistem Helpdesk & Manajemen Tiket Kendala Antar-Departemen Berbasis Laravel',
    desc: 'Aplikasi internal IT helpdesk & ticketing kendala antar-divisi dengan routing departemen, notifikasi email otomatis, dan ekspor laporan CSV.',
    about: 'Circle Care adalah aplikasi web Internal IT Helpdesk & Issue Ticketing Management yang dirancang untuk merampingkan alur pelaporan kendala teknis dan operasional antar-divisi di lingkungan perusahaan. Dibangun dengan framework Laravel dan basis data MySQL, platform ini memfasilitasi pelaporan keluhan secara terstruktur, kolaborasi penanganan masalah melalui user tagging, diskusi interaktif, notifikasi email otomatis saat tiket dibuka maupun ditutup, serta rekapitulasi laporan kendala yang dapat diunduh dalam format CSV.',
    images: [getImg('project_8a'), getImg('project_8b'), getImg('project_8c')],
    features: [
      'Multi-Department Routing & Filtering: Pengelompokan dan penanganan tiket berdasarkan divisi terkait (IT, HR, Accounting, Operational, Area, Marketing, Fleet) untuk alokasi tepat sasaran.',
      'Open Thread & Tagging Kolaboratif (@mention): Form pembuatan tiket yang mendukung lampiran bukti gambar (maks 2MB) serta fitur tagging rekan kerja atau teknisi spesifik.',
      'Notifikasi Email Otomatis (Laravel Mail): Pengiriman email notifikasi instan secara otomatis kepada pelapor dan pengguna yang ditandai saat tiket baru diterbitkan dan saat ditutup.',
      'Diskusi Interaktif & Siklus Hidup Tiket: Kolom komentar dua arah untuk memperbarui progres penanganan serta aksi penutupan tiket (Close Thread).',
      'Role-Based Access Control (RBAC 3-Level): Pembagian hak akses berjenjang untuk Admin (akses penuh & master data), Mod (moderator per departemen), dan User (pelapor standar).',
      'Modul Pelaporan & Ekspor CSV: Filter data riwayat tiket berdasarkan departemen dan rentang tanggal kustom dengan tombol unduh instan berkas laporan CSV.',
    ],
    tech: [
      'Laravel 10 (PHP 8.1+)',
      'MVC Architecture & Eloquent ORM',
      'Blade Templating Engine',
      'Bootstrap 4',
      'SB Admin 2 Dashboard UI',
      'MySQL (Pivot Relational Tables)',
      'Laravel Mail (Mailable SMTP)',
      'TomSelect / Select2',
      'FontAwesome Icons',
    ],
    demoUrl: null,
    repoUrl: null,
    note: 'Sistem Internal Perusahaan (Private Enterprise App)',
  },
];

function ImageSlider({ images }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="project-image-slider">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={i === active ? 'active' : ''}
          loading="lazy"
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slider-nav-btn slider-prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="slider-nav-btn slider-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="slider-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`slider-dot ${i === active ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const cardAccents = [
  '#60a5fa',
  '#a78bfa',
  '#22d3ee',
  '#34d399',
  '#fb923c',
  '#f472b6',
  '#facc15',
  '#60a5fa',
];

const cardCategories = [
  'Web App',
  'Web App',
  'Web App',
  'Web App',
  'POS System',
  'Network Infra',
  'Telegram Bot',
  'Web App',
];

export default function Projects() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project, idx) => {
              const accent = cardAccents[idx] || '#60a5fa';
              const category = cardCategories[idx] || 'Project';
              const visibleTech = project.tech.slice(0, 4);
              const extraTech = project.tech.length - visibleTech.length;
              return (
                <div
                  key={project.id}
                  className="project-card clickable-card"
                  style={{ '--card-accent': accent }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="glass-card"
                    style={{ borderTop: `2px solid ${accent}` }}
                  >
                    {/* Image slider with overlaid badges */}
                    <div className="project-slider-wrap">
                      <ImageSlider images={project.images} />
                      <span className="project-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="project-tag">{category}</span>
                    </div>

                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>

                      {/* Tech pill preview */}
                      <div className="project-tech-preview">
                        {visibleTech.map((t) => (
                          <span key={t} className="project-tech-pill">{t}</span>
                        ))}
                        {extraTech > 0 && (
                          <span className="project-tech-more">+{extraTech} more</span>
                        )}
                      </div>

                      <span className="learn-more-link">View Details &rarr;</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Store Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-grid">
              <div className="modal-media">
                <ImageSlider images={selectedProject.images} />
              </div>

              <div className="modal-details">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-tagline">{selectedProject.desc}</p>

                <div className="modal-divider" />

                <h4 className="modal-section-title">About Project</h4>
                <p className="modal-description">{selectedProject.about}</p>

                <h4 className="modal-section-title">Key Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="modal-section-title">Tech Stack</h4>
                <div className="modal-tech-tags">
                  {selectedProject.tech.map((tag) => (
                    <span key={tag} className="skill-pill tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn primary-btn"
                    >
                      Live Demo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}

                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn secondary-btn"
                    >
                      Source Code
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}

                  {!selectedProject.demoUrl && !selectedProject.repoUrl && selectedProject.note && (
                    <span className="modal-private-badge">
                      <span className="badge-dot" />
                      {selectedProject.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
