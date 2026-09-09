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
              Saya adalah profesional dengan pengalaman di bidang retail sebagai sales dan supervisor,
              serta di bidang IT yang mampu bekerja di depan maupun di balik layar dengan keahlian
              di bidang networking, hardware, software, dan implementasi sistem. Berpengalaman menangani
              dukungan teknis, manajemen jaringan, serta integrasi solusi IT untuk mendukung operasional
              bisnis. Dengan ambisi kuat untuk terus berkembang, saya selalu berusaha menghadirkan
              inovasi, efisiensi, dan solusi tepat. Kelebihan saya terletak pada adaptasi cepat,
              komunikasi efektif, serta kemampuan teknis yang dapat diandalkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
