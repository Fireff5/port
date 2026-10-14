import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaMapMarkerAlt, FaGraduationCap, FaShieldAlt, FaCode } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    text: 'B.Tech Information Technology',
    sub: 'Final Year Graduate',
    color: '#8b5cf6',
  },
  {
    icon: <FaCode />,
    title: 'Web Development',
    text: 'React, Node.js, Express',
    sub: 'Full-Stack Developer',
    color: '#3b82f6',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cyber Security',
    text: 'Ethical Hacking & Network Security',
    sub: 'Continuous Learner',
    color: '#06b6d4',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    text: 'Tamil Nadu, India',
    sub: 'Open to Remote Work',
    color: '#ec4899',
  },
];

const About = () => (
  <section id="about" className="about-section" aria-labelledby="about-heading">
    <div className="about-inner">
      <div className="about-header reveal">
        <h2 className="section-heading" id="about-heading">About Me</h2>
        <div className="section-divider" />
        <p className="section-subtitle">A little about who I am and what drives me</p>
      </div>

      <div className="about-grid">
        {/* Image + Bio */}
        <div className="about-left reveal-left">
          <div className="about-image-wrapper">
            <div className="about-image-glow" />
            <img src={profilePic} alt="Mohamed Rilwan" className="about-image" />
          </div>
        </div>

        {/* Bio + Cards */}
        <div className="about-right reveal-right">
          <div className="about-bio">
            <p>
              Hey! I'm <strong>Mohamed Rilwan</strong>, a passionate{' '}
              <span className="about-highlight">Full-Stack Web Developer</span> and{' '}
              <span className="about-highlight">Cyber Security Learner</span> based in Tamil Nadu, India.
            </p>
            <p>
              I recently completed my B.Tech in Information Technology and I'm eager to build
              secure, scalable, and user-friendly web applications. I love crafting beautiful,
              performant experiences and exploring the security landscape — from ethical hacking to network defense.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, earning certifications,
              or leveling up my problem-solving skills. I'm currently open to full-time opportunities
              and exciting collaborations.
            </p>

            <div className="about-socials">
              <a href="https://github.com/Fireff5" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-rilwan-386698291/" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-linkedin" aria-label="LinkedIn">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/rilwan_uzumaki_/" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-insta" aria-label="Instagram">
                <FaInstagramSquare /> <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="about-cards">
            {infoCards.map((card) => (
              <div className="about-card" key={card.title} style={{ '--card-color': card.color }}>
                <div className="about-card-icon">{card.icon}</div>
                <div className="about-card-body">
                  <p className="about-card-title">{card.title}</p>
                  <p className="about-card-text">{card.text}</p>
                  <p className="about-card-sub">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
