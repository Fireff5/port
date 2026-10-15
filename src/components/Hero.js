import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePic from '../assets/profile2.jpg';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

const roles = [
  'Full Stack Developer',
  'React.js Enthusiast',
  'Web Developer',
  'Cyber Security Learner',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Animated Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      {/* Floating code particles */}
      <div className="hero-particles" aria-hidden="true">
        {['&lt;/&gt;', '{ }', '()', '=>', '[ ]', '#', '**', '&&'].map((sym, i) => (
          <span key={i} className={`particle particle-${i + 1}`} dangerouslySetInnerHTML={{ __html: sym }} />
        ))}
      </div>

      <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
        {/* LEFT - Text */}
        <div className="hero-text">
          <div className="hero-badge" aria-label="Availability status">
            <span className="badge-dot" />
            <span>Available for Work</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-greeting">Hi, I'm</span>
            <br />
            <span className="hero-name-gradient">Mohamed Rilwan</span>
          </h1>

          <div className="hero-role-wrapper" aria-live="polite" aria-atomic="true">
            <span className="hero-role-prefix">I'm a </span>
            <span className="hero-role">
              {displayed}
              <span className="cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-desc">
            B.Tech IT Graduate passionate about building modern, responsive, and scalable
            web applications. I love clean code, exceptional user experiences, and solving
            real-world problems through software.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              <FaArrowRight />
              View My Work
            </a>
            <a href="/MyResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Fireff5" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-rilwan-386698291/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-stats" aria-label="Quick statistics">
            {[
              { num: '4+', label: 'Projects' },
              { num: '6+', label: 'Certificates' },
              { num: '2+', label: 'Yrs Coding' },
            ].map(({ num, label }) => (
              <div className="hero-stat" key={label}>
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Profile Image */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring hero-image-ring-1" />
            <div className="hero-image-ring hero-image-ring-2" />
            <div className="hero-image-frame">
              <img src={profilePic} alt="Mohamed Rilwan – Full Stack Developer" />
            </div>
            {/* Floating badges */}
            <div className="hero-float-badge badge-react">
              <span>⚛️</span> React
            </div>
            <div className="hero-float-badge badge-node">
              <span>🟢</span> Node.js
            </div>
            <div className="hero-float-badge badge-java">
              <span>☕</span> Java
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
