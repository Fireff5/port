import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#experience',   label: 'Experience' },
  { href: '#certificates', label: 'Certs' },
  { href: '#contact',      label: 'Contact' },
];

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        {/* Logo */}
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          aria-label="Mohamed Rilwan – Home"
        >
          <span className="logo-text">MR</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links" role="list">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              role="listitem"
              className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
              <span className="nav-link-underline" />
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Hire Me
          </a>
          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
