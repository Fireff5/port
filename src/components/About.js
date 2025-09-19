import React from 'react';
import './About.css'; 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      <p>
        I'm a passionate developer with a love for building beautiful and functional web applications.
        I enjoy learning new technologies and constantly improving my skills.
      </p>
      <a
        href="https://github.com/Fireff5"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mohamed-rilwan-386698291/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/rilwan_uzumaki_/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
      <FaInstagramSquare />
      </a>
    </section>
  );
};

export default About;
