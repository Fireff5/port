import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Welcome to My Portfolio</h1>

        {/* Dark mode toggle */}
        <button onClick={toggleDarkMode} className="dark-toggle">
          {isDarkMode ? '🌞' : '🌙'}
        </button>

        {/* Menu button (hamburger) */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
