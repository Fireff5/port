import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const infoCards = [
  { icon: '🎓', title: 'Education', text: 'B.Tech IT — Final Year' },
  { icon: '🔒', title: 'Cyber Security', text: 'Ethical hacking & network security' },
  { icon: '💻', title: 'Web Dev', text: 'React, Node.js, full-stack' },
  { icon: '📍', title: 'Location', text: 'Tamil Nadu, India · Open to Remote' },
];

const About = () => (
  <section id="about" className="about-section">
    <div className="about-inner">
      <h2 className="section-heading">About Me</h2>
      <div className="section-divider" />

      <div className="about-grid">
        {/* Bio */}
        <div className="about-bio">
          <p>
            Hey! I'm <strong>Mohamed Rilwan</strong>, a passionate{' '}
            <span className="about-highlight">Full-Stack Web Developer</span> and{' '}
            <span className="about-highlight">Cyber Security Learner</span> in the final
            year of my B.Tech IT degree.
          </p>
          <p>
            I love crafting beautiful, performant web applications and exploring the
            security landscape — from ethical hacking to network defense. Every line of
            code I write is driven by a desire to build things that are secure,
            scalable, and delightful to use.
          </p>
          <p>
            When I'm not coding you'll find me exploring new frameworks, earning
            certifications, or leveling up my problem-solving skills.
          </p>

          <div className="about-socials">
            <a href="https://github.com/Fireff5" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohamed-rilwan-386698291/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://www.instagram.com/rilwan_uzumaki_/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaInstagramSquare /> Instagram
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="about-cards">
          {infoCards.map((card) => (
            <div className="about-card" key={card.title}>
              <span className="about-card-icon">{card.icon}</span>
              <p className="about-card-title">{card.title}</p>
              <p className="about-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
