import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about">
      <div className="container">
        <div ref={ref} className="fade-in">
          <div className="section-divider" />
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              Halo! Saya <strong>Rio Marcellino (Riyep)</strong>, seorang <strong>freelance web developer berbasis di Surabaya, Jawa Timur</strong> dengan spesialisasi dalam <strong>jasa pembuatan website profesional</strong> dan <strong>website responsive</strong>. Memadukan pengalaman operasional retail dan rekayasa software, saya membantu pelaku usaha dan UMKM membangun website company profile, landing page bisnis, hingga platform digital khusus restoran dan cafe.
            </p>
            <p className="about-text" style={{ marginTop: '16px' }}>
              Setiap website dikembangkan dengan pendekatan <strong>full code</strong> modern yang bersih, cepat, dan <strong>SEO friendly</strong> agar bisnis Anda mudah menjangkau pelanggan di Google. Didukung keahlian infrastruktur IT, saya juga menghadirkan <strong>website terintegrasi dengan third-party</strong> seperti gateway pembayaran QRIS dinamis, direct WhatsApp booking engine, Google Maps API, hingga sinkronisasi server jaringan MikroTik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
