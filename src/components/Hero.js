import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePic from '../assets/profile2.jpg';

const roles = [
  'Web Developer',
  'Cyber Security Learner',
  'React Enthusiast',
  'Tech Explorer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-grid" />

      <div className="hero-content">
        {/* Left — Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" />
            Available for Work
          </div>

          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="hero-name-gradient">Mohamed Rilwan</span>
          </h1>

          <p className="hero-role">
            {displayed}
            <span className="cursor" />
          </p>

          <p className="hero-desc">
            B.Tech IT Final Year Student passionate about building secure, scalable
            web applications and diving deep into the world of cyber security.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              Get in Touch ✦
            </a>
            <a
              href="/Resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View Resume ↗
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">6+</span>
              <span className="hero-stat-label">Certificates</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-label">Years Coding</span>
            </div>
          </div>
        </div>

        {/* Right — Animated Profile */}
        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img src={profilePic} alt="Mohamed Rilwan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
