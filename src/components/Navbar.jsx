import { useState, useEffect } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, targetSelector) => {
    e.preventDefault();
    setOpen(false);
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <img src="/logo.svg" alt="RYP Logo" className="nav-logo-img" />
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          className={`nav-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
