import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraCanvas from './components/AuroraCanvas';
import StarsCanvas from './components/StarsCanvas';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to trigger entrance animation
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? 'page-loaded' : ''}`}>
      {/* Animated backgrounds */}
      <AuroraCanvas count={6} />
      <StarsCanvas count={200} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
