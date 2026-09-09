export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero-name">RIYEP-DEV</h1>
      <p className="hero-subtitle">
        Software Engineer <span>•</span> Network Engineer <span>•</span> IT Support 
      </p>
      <div className="hero-cta">
        <a href="#projects">
          Project
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
      <div className="hero-scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
