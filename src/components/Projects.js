import React from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    type: 'Frontend',
    title: 'Portfolio Website',
    desc: 'Responsive personal portfolio with smooth animations, dark glassmorphism design, animated hero, and a live contact form using Web3Forms.',
    tags: ['React', 'CSS3', 'Web3Forms'],
    demo: null,
    code: 'https://github.com/Fireff5/port',
  },
  {
    num: '02',
    type: 'Security',
    title: 'Secure Socket Communication',
    desc: 'Client-server network app with SSL/TLS encryption for safe real-time data transfer over TCP/IP sockets with multi-client support.',
    tags: ['Python', 'SSL/TLS', 'TCP/IP', 'Sockets'],
    demo: null,
    code: 'https://github.com/Fireff5/Secure-Communication',
  },
  {
    num: '03',
    type: 'Full-Stack',
    title: 'E-Commerce Mobile Shop',
    desc: 'Full-stack e-commerce platform with user authentication, product listings, shopping cart, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'Express', 'Stripe'],
    demo: 'https://ecommerce-mobileshop.netlify.app/',
    code: 'https://github.com/Fireff5/MobileShop',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-inner">
      <h2 className="section-heading">Projects</h2>
      <div className="section-divider" />
      <p className="section-subtitle">Things I've built that I'm proud of</p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.num}>
            <span className="project-number">{p.num}</span>
            <span className="project-type">{p.type}</span>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-actions">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
                  Live Demo ↗
                </a>
              )}
              <a href={p.code} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-secondary">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
