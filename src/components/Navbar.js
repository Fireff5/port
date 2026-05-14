import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          MR<span>.</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#certificates" className="nav-link" onClick={closeMenu}>Certificates</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
