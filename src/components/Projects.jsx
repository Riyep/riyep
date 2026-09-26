import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Eager load all project images from src/images
const projectImages = import.meta.glob('../images/*.jpg', { eager: true, import: 'default' });
const getImg = (name) => projectImages[`../images/${name}.jpg`] || '';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Applications' },
  { id: 'erp', label: 'POS & ERP Systems' },
  { id: 'bot', label: 'Bot Automation' },
  { id: 'network', label: 'Network & Infra' },
];

const projects = [
  {
    id: 1,
    title: 'Bakule Lele – Web Pemesanan & Distribusi Lele Segar Surabaya',
    category: 'Web App',
    categoryGroup: 'web',
    accent: '#60a5fa',
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
    category: 'Web App',
    categoryGroup: 'web',
    accent: '#a78bfa',
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
    title: 'Veloce Auto Care – Landing Page & Sistem Booking Salon Mobil Mewah Surabaya',
    category: 'Web App',
    categoryGroup: 'web',
    accent: '#22d3ee',
    desc: 'Landing page premium automotive detailing studio Surabaya dengan kalkulator estimasi biaya instan dan booking WhatsApp otomatis.',
    about: 'Veloce Auto Care adalah landing page interaktif bertema automotive modern untuk studio premium auto detailing, paint protection film (PPF), dan nano ceramic coating di Surabaya. Menghadirkan identitas visual maskulin nan elegan yang dirancang untuk menarik pemilik mobil mewah dan sports car, dilengkapi kalkulator estimasi biaya perawatan instan dan alur booking langsung ke WhatsApp.',
    images: [getImg('project_3a'), getImg('project_3b'), getImg('project_3c')],
    features: [
      'Visual Identitas Premium Auto-Studio: Palet warna dark luxury (deep charcoal, chrome silver, dynamic amber gold glow) dengan tipografi tegas modern.',
      'Interactive Detailing Cost Calculator: Pengunjung dapat memilih ukuran kendaraan (Small, Medium, Large, Luxury/SUV) serta paket perawatan (Express, Full Polish, Nano Ceramic Coating, Ultimate PPF) untuk melihat estimasi biaya dan durasi pengerjaan seketika.',
      'Direct-to-WhatsApp Booking Engine: Mengonversi formulir kalkulasi menjadi pesan WhatsApp reservasi otomatis yang siap kirim ke customer service.',
      'Galeri Sebelum & Sesudah (Before/After): Showcase hasil pengerjaan proteksi cat mobil beresolusi tinggi.',
      'Akses Cepat & SEO Ramah Mesin Pencari: Struktur kode bersih dengan performa skor tinggi di perangkat mobile.',
    ],
    tech: [
      'React 19',
      'Vite',
      'Modern CSS3 Grid & Flexbox',
      'Lucide Icons / Feather Icons',
      'CSS Custom Properties',
      'WhatsApp Link Generator API',
      'Google Fonts (Outfit & Syne)',
      'Vercel',
    ],
    demoUrl: 'https://veloce-autocare.vercel.app/',
    repoUrl: null,
  },
  {
    id: 4,
    title: 'Rio Marcellino Portfolio – Developer Portfolio & Digital Services Showcase',
    category: 'Web App',
    categoryGroup: 'web',
    accent: '#34d399',
    desc: 'Website portofolio developer modern bertema cosmic glassmorphism dengan background aurora borealis kanvas dan showcase proyek interaktif.',
    about: 'Website portofolio personal dan showcase jasa profesional milik Rio Marcellino (Riyep). Menampilkan estetika cosmic dark theme dengan latar belakang aurora borealis dinamis berbasis HTML5 Canvas, animasi tabur bintang (twinkling & shooting stars), serta presentasi terperinci mengenai proyek rekayasa perangkat lunak, keahlian infrastruktur IT, pengalaman karier, dan saluran kontak interaktif.',
    images: [getImg('project_4a'), getImg('project_4b'), getImg('project_4c')],
    features: [
      'Dynamic Aurora Borealis Canvas: Efek pencahayaan aurora dinamis di latar belakang yang berotasi dan berbaur secara acak dengan HSL color cycling.',
      'Cosmic Starfield Particle System: Taburan bintang berkelap-kelip dengan meteor/shooting stars acak yang dibangun menggunakan Canvas API murni tanpa beban library eksternal.',
      'Interactive Detail Store Modal: Setiap kartu proyek dapat dibuka menjadi modal penjelajahan mendalam lengkap dengan multi-image slider, rincian arsitektur, dan tautan live demo.',
      'Bilingual Toggle & Timeline Accordion: Riwayat pengalaman kerja dengan filter bahasa serta sistem expand/collapse interaktif.',
      'Desain Responsif Penuh (Mobile-First): Transisi halus di semua ukuran layar smartphone, tablet, hingga monitor desktop ultra-wide.',
    ],
    tech: [
      'React 19',
      'Vite 8',
      'HTML5 Canvas API',
      'Custom CSS3 Glassmorphism',
      'Google Fonts (Metamorphous & Inter)',
      'Intersection Observer API',
      'Vercel',
      'GitHub Actions',
    ],
    demoUrl: 'https://riyep.com/',
    repoUrl: null,
  },
  {
    id: 5,
    title: "D'Semarang POS – Sistem Kasir & Manajemen Kafe Berbasis Web dengan Multi-Metode Pembayaran",
    category: 'POS System',
    categoryGroup: 'erp',
    accent: '#fb923c',
    desc: 'Aplikasi kasir web modern untuk kafe & resto dengan checkout kilat, pembayaran multi-metode (QRIS, Tunai, Kartu, Split Bill), dan cetak struk otomatis.',
    about: "D'Semarang POS adalah aplikasi kasir (Point-of-Sale) berbasis web modern yang dirancang khusus untuk operasional kafe, bistro, dan restoran. Aplikasi ini mempercepat proses pemesanan dengan antarmuka layar sentuh yang intuitif, pencatatan transaksi real-time, fleksibilitas pembayaran (QRIS, Kartu Debit/Kredit, Tunai, hingga Split Bill / pisah tagihan), dan pencetakan struk digital maupun termal otomatis.",
    images: [getImg('project_5a'), getImg('project_5b'), getImg('project_5c')],
    features: [
      'Antarmuka Kasir Cepat & Intuitif: Tata letak grid menu dengan filter kategori (Makanan, Minuman, Camilan, Signature) dan pencarian instan.',
      'Sistem Keranjang & Modifikasi Pesanan: Tambah/kurang kuantitas, catatan khusus per menu (misal: less sugar, no ice), dan kalkulasi subtotal otomatis.',
      'Multi-Payment Gateway Support: Pilihan metode pembayaran lengkap meliputi QRIS dinamis, Uang Tunai (dengan kalkulator kembalian otomatis), Kartu EDC, dan Split Bill.',
      'Penerbitan Struk Digital & Cetak Otomatis: Pratinjau struk transaksi rapi dengan nomor pesanan unik, rincian item, pajak, dan stempel waktu.',
      'Manajemen Stok Real-Time: Pengurangan otomatis stok bahan/menu setiap kali transaksi berhasil diselesaikan.',
    ],
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Lucide React Icons',
      'Web Print API',
      'LocalStorage Persistent State',
      'Vercel',
    ],
    demoUrl: 'https://d-semarang-pos.vercel.app/',
    repoUrl: 'https://github.com/Riyep/d-semarang-pos',
  },
  {
    id: 6,
    title: 'Infrastruktur Jaringan Terintegrasi & Server Multi-Cabang – PT Saranabhakti Timur',
    category: 'Network Infra',
    categoryGroup: 'network',
    accent: '#f472b6',
    desc: 'Arsitektur jaringan enterprise multi-cabang dengan MikroTik Site-to-Site Encrypted VPN, VLAN segmentasi, sentralisasi NAS Synology, dan monitoring NOC.',
    about: 'Proyek perancangan, instalasi, dan pemeliharaan infrastruktur jaringan dan server berskala enterprise untuk PT Saranabhakti Timur, perusahaan logistik dan distribusi dengan kebutuhan interkoneksi antar-cabang yang aman dan berkecepatan tinggi. Mencakup implementasi VPN terenkripsi, segmentasi VLAN modular, sentralisasi file server NAS, keamanan firewall, dan pemantauan perangkat NOC jarak jauh.',
    images: [getImg('project_6a'), getImg('project_6b'), getImg('project_6c')],
    features: [
      'Site-to-Site Encrypted VPN: Menghubungkan jaringan kantor pusat dan kantor cabang secara aman melalui terowongan VPN terenkripsi (IPsec/WireGuard) berbasis router MikroTik.',
      'VLAN Segmentation (802.1Q): Pemisahan lalu lintas data menjadi beberapa segmen independen (Manajemen, Operasional, Staff, Tamu/Guest WiFi) menggunakan managed switch Ruijie untuk mitigasi serangan jaringan.',
      'Penyimpanan Terpusat Synology NAS: Penyediaan file server terpusat dengan konfigurasi RAID untuk cadangan data otomatis, sinkronisasi file antar-divisi, dan pembatasan hak akses berbasis folder.',
      'Pengalamatan IP Modular (Subnetting CIDR): Desain skema IP address yang terstruktur dan scalable untuk ratusan perangkat PC, laptop, printer jaringan, handheld scanner, dan kamera CCTV.',
      'Monitoring Jaringan & NOC: Pemantauan ketersediaan link internet dan kesehatan router secara berkala menggunakan Winbox dan dashboard monitoring berbasis web.',
    ],
    tech: [
      'MikroTik RouterOS (RB4011 / CCR Series)',
      'Ruijie Reyee Managed PoE Switches',
      'Synology DiskStation NAS (DSM)',
      'WireGuard / IPsec VPN Protocol',
      'VLAN 802.1Q Architecture',
      'Hikvision NVR & IP Surveillance',
      'Winbox Management Utility',
    ],
    demoUrl: null,
    repoUrl: null,
    note: 'Infrastruktur Produksi Enterprise (Internal PT Saranabhakti Timur)',
  },
  {
    id: 7,
    title: 'Automated Telegram Bot for Dynamic QRIS Subscription & Single-Use VIP Group Access',
    category: 'Telegram Bot',
    categoryGroup: 'bot',
    accent: '#facc15',
    desc: 'Bot Telegram otomasi pembayaran QRIS dinamis real-time, verifikasi webhook instan, dan penerbitan tautan undangan grup VIP 1x pakai (anti-leak).',
    about: 'Sistem otomasi berbasis bot Telegram yang dirancang untuk mengelola transaksi langganan keanggotaan grup VIP secara penuh tanpa intervensi manual manusia. Mengintegrasikan gateway pembayaran QRIS dinamis secara real-time, verifikasi otomatis keberhasilan transfer, penyimpanan riwayat transaksi ke database MySQL, dan penerbitan tautan undangan sekali pakai (single-use invite link) untuk mencegah kebocoran akses grup.',
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
    category: 'Mini ERP',
    categoryGroup: ['web', 'erp'],
    accent: '#60a5fa',
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
  {
    id: 9,
    title: 'Bengkel SpareParts – Inventory & Multi-Warehouse Management System',
    category: 'Inventory ERP',
    categoryGroup: 'erp',
    accent: '#10b981',
    desc: 'Sistem manajemen inventaris dan mini ERP suku cadang otomotif berbasis web dengan multi-gudang, pemetaan rak fisik (bin racking), dan mesin pencari kompatibilitas motor.',
    about: 'Bengkel SpareParts adalah sistem manajemen inventaris dan mini ERP suku cadang otomotif berbasis web yang dirancang khusus untuk toko onderdil, distributor, dan jaringan bengkel modern. Mengintegrasikan pencatatan multi-gudang, pemetaan lokasi rak fisik, mesin pencari kompatibilitas sepeda motor, pelacakan retur barang (RMA), hingga otomatisasi ekspor laporan operasional format PDF dan Excel.',
    images: [getImg('project_9a'), getImg('project_9b'), getImg('project_9c')],
    features: [
      'Real-Time Inventory & Valuation: Pemantauan langsung total valuasi aset gudang (Rp 102.2M+), kontrol batas minimum stok kritis, dan grafik tren keluar-masuk barang bulanan.',
      'Master Data & Multi-Tier Pricing: Pengelolaan kode SKU, Part Number pabrikan, barcode scanner ready, serta pengaturan harga modal, grosir, dan eceran.',
      'Multi-Warehouse & Bin Racking: Manajemen stok terdistribusi di 5 gudang cabang regional dengan pemetaan rak fisik spesifik (Rak A-01) dan modul mutasi transfer barang.',
      'Motorcycle Compatibility Finder: Fitur pencarian presisi kecocokan suku cadang berdasarkan brand motor, varian model, jenis transmisi (Matic/Bebek/Sport), dan tahun perakitan.',
      'Return & RMA Management: Alur klaim barang rusak atau salah kirim dengan kode unik retur, dokumentasi kendala fisik, dan status approval bertingkat.',
      'Automated Report Generator: Ekspor instan rekapitulasi ringkasan stok, katalog suku cadang, dan histori retur ke format dokumen PDF dan spreadsheet Excel (.xlsx).',
    ],
    tech: [
      'React 18',
      'Vite 6',
      'React Router DOM v6',
      'Tailwind CSS',
      'Radix UI Primitives',
      'Lucide Icons',
      'Recharts',
      'Vercel Deployment',
    ],
    demoUrl: 'https://riyep-ims-demo.vercel.app',
    repoUrl: null,
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

export default function Projects() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const matchCategory = (p, catId) => {
    if (catId === 'all') return true;
    return Array.isArray(p.categoryGroup)
      ? p.categoryGroup.includes(catId)
      : p.categoryGroup === catId;
  };

  const filteredProjects = projects.filter((p) => matchCategory(p, activeTab));

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Koleksi karya rekayasa perangkat lunak, sistem kasir POS, mini ERP operasional, otomasi bot, dan infrastruktur jaringan.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="project-category-tabs">
            {filterCategories.map((cat) => {
              const count = projects.filter((p) => matchCategory(p, cat.id)).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`project-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="project-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const visibleTech = project.tech.slice(0, 4);
              const extraTech = project.tech.length - visibleTech.length;
              return (
                <div
                  key={project.id}
                  className="project-card clickable-card"
                  style={{ '--card-accent': project.accent }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="glass-card"
                    style={{ borderTop: `2px solid ${project.accent}` }}
                  >
                    {/* Image slider with overlaid badges */}
                    <div className="project-slider-wrap">
                      <ImageSlider images={project.images} />
                      <span className="project-num">{String(project.id).padStart(2, '0')}</span>
                      <span className="project-tag">{project.category}</span>
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

      {/* Detail Store Modal Overlay with Top-Center Thumbnail */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container modal-top-center-container" onClick={(e) => e.stopPropagation()}>
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

            {/* 1. TOP CENTER Thumbnail Slider */}
            <div className="modal-media-top">
              <ImageSlider images={selectedProject.images} />
            </div>

            {/* 2. Project Details Content */}
            <div className="modal-details">
              <div className="modal-meta-row">
                <span
                  className="modal-badge-category"
                  style={{
                    color: selectedProject.accent,
                    borderColor: `${selectedProject.accent}55`,
                    background: `${selectedProject.accent}15`,
                  }}
                >
                  {selectedProject.category}
                </span>
                <span className="modal-badge-id">
                  Project {String(selectedProject.id).padStart(2, '0')}
                </span>
              </div>

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
      )}
    </section>
  );
}
