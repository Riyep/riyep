import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'IT Infrastruktur & Networking',
    company: 'PT Saranabhakti Timur • Surabaya, Indonesia',
    year: 'Juli 2022 – Sekarang',
    bullets: [
      'Monitoring & maintenance jaringan (LAN, WAN, VPN, DNS, WiFi, Server).',
      'Konfigurasi perangkat jaringan & troubleshooting koneksi.',
      'Instalasi & konfigurasi server (Windows/Linux, File/Web/DB, Proxmox, Hyper-V).',
      'Instalasi & perawatan perangkat (PC, laptop, printer, handheld, CCTV).',
      'Setup perangkat baru & pengelolaan aset hardware.',
      'Pengelolaan akun & akses (email, tracking, cloud drive).',
      'Support aplikasi mobile/logistics & pelatihan karyawan.',
      'Edukasi keamanan IT (phishing, password, backup).',
    ],
  },
  {
    role: 'Supervisor',
    company: 'PT Sinar Star Books • Surabaya, Indonesia',
    year: 'Januari 2021 – Juni 2022',
    bullets: [
      'Memastikan pencatatan transaksi keuangan akurat.',
      'Membuat laporan keuangan sebelum dikirim ke pusat.',
      'Melaporkan kebutuhan atau kendala toko ke kantor pusat.',
      'Membuat laporan stok, barang masuk/keluar, dan kebutuhan restock.',
      'Memantau pencapaian target penjualan toko mingguan dan bulanan.',
      'Membagi tugas dan jadwal kerja staf toko.',
      'Mengajukan usulan promosi atau program lokal bila diperlukan.',
    ],
  },
  {
    role: 'Store Operational Associate',
    company: 'PT Gramedia Asri Media • Surabaya, Indonesia',
    year: 'Desember 2018 – Desember 2020',
    bullets: [
      'Menawarkan dan mempromosikan produk kepada pelanggan secara langsung.',
      'Mencapai target penjualan harian dan bulanan.',
      'Melayani pelanggan dengan ramah dan memberikan rekomendasi produk.',
      'Menjaga kerapian dan ketersediaan stok di area penjualan.',
      'Melaporkan hasil penjualan harian ke supervisor.',
      'Active Selling, Up Selling, Cross Selling pada customer di semua product.',
      'Rekom Order product yang berpotensi terjual di bulan berikutnya.',
      'Receive dan check list barang datang dari supplier sampai ke EDP.',
    ],
  },
  {
    role: 'Teknisi PABX',
    company: 'CV Anugrah Pratama • Surabaya, Indonesia',
    year: 'Oktober 2017 – Desember 2018',
    bullets: [
      'Install ulang dan konfigurasi sistem operasi (Windows/Linux).',
      'Troubleshooting hardware dan software PC/laptop.',
      'Penawaran kartu telfon Smartfren pada klien.',
      'Perakitan komputer sesuai kebutuhan klien.',
      'Instalasi jaringan rumahan, kantor, pabrik, hotel, dll (PABX, CCTV, LAN/WiFi).',
      'Backup data dan recovery untuk klien individu.',
    ],
  },
];

const education = [
  {
    school: 'Institut Teknologi Adhi Tama Surabaya',
    degree: 'S1 Teknik Informatika (IPK 3.48)',
    year: '2020 – 2025',
  },
];

function TimelineItem({ exp, index, expanded, onToggle }) {
  const isOpen = expanded.includes(index);

  return (
    <div className={`timeline-item ${isOpen ? 'expanded' : ''}`}>
      <div className="timeline-header" onClick={() => onToggle(index)}>
        <div>
          <p className="timeline-role">{exp.role}</p>
          <p className="timeline-company">{exp.company} • {exp.year}</p>
        </div>
        <span className={`timeline-chevron ${isOpen ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      <div className={`timeline-body ${isOpen ? 'open' : ''}`}>
        <ul className="timeline-bullets">
          {exp.bullets.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState([0]); // first item open by default
  const ref = useScrollReveal();

  const toggleItem = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">Experience</h2>
      
          <div className="timeline">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={i}
                exp={exp}
                index={i}
                expanded={expanded}
                onToggle={toggleItem}
              />
            ))}
          </div>

          {/* Education */}
          <div style={{ marginTop: '48px' }}>
            <div className="section-divider" />
            <h2 className="section-title">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="glass-card" style={{ marginTop: '16px' }}>
                <div className="edu-card">
                  <div className="edu-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="edu-school">{edu.school}</p>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-year">{edu.year}</p>
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
