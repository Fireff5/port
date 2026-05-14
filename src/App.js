import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import './index.css';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-social">
            <a href="https://github.com/Fireff5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-rilwan-386698291/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/rilwan_uzumaki_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagramSquare />
            </a>
          </div>
          <p className="footer-text">
            © 2025 <span>Mohamed Rilwan</span> · Built with passion & React
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
