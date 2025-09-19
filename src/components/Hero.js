import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile2.jpg';

const Hero = () => {
  return (
    <section className="hero">
       {/* Right Side - Profile Image */}
        <div className="hero-image">
          <img src={profilePic} alt="Mohamed Rilwan" />
        </div>
      <div className="hero-container">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h2>Hi, I'm <span>Mohamed Rilwan</span></h2>
          <h3>B.TECH-IT, Final Year Student</h3>
          <p>Frontend Developer | Cyber Security Learner | Tech Enthusiast</p>
          <a href="#contact" className="hero-btn">Get in Touch</a>
          <a 
           href="/Resume.pdf" 
           target="_blank" 
           rel="noopener noreferrer"
           className="hero-btn"
        >
           View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
