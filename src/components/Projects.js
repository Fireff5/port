import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiPostgresql, SiTypescript } from 'react-icons/si';

const tagIcons = {
  React: <SiReact />,
  'React + TypeScript': <SiTypescript />,
  'Node.js': <SiNodedotjs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Python: <SiPython />,
  PostgreSQL: <SiPostgresql />,
};

const projects = [
  {
    num: '01',
    type: 'Full-Stack',
    badge: 'Live',
    title: 'E-Commerce Mobile Shop',
    desc: 'Full-stack e-commerce platform with user authentication, product listings, shopping cart, and Stripe payment integration. Built for a seamless shopping experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    demo: 'https://ecommerce-mobileshop.netlify.app/',
    code: 'https://github.com/Fireff5/MobileShop',
    featured: true,
  },
  {
    num: '02',
    type: 'Full-Stack',
    badge: null,
    title: 'College Event Management System',
    desc: 'Full-stack platform for managing college events with user auth, event listings, registration, certificate generation, and a comprehensive admin dashboard.',
    tags: ['React + TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    demo: null,
    code: 'https://github.com/Fireff5/College-Event-Management',
    featured: true,
  },
  {
    num: '03',
    type: 'Security',
    badge: null,
    title: 'Secure Socket Communication',
    desc: 'Client-server network app with SSL/TLS encryption for safe real-time data transfer over TCP/IP sockets. Supports multiple simultaneous clients.',
    tags: ['Python', 'SSL/TLS', 'TCP/IP', 'Sockets'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    demo: null,
    code: 'https://github.com/Fireff5/Secure-Communication',
    featured: false,
  },
  {
    num: '04',
    type: 'Frontend',
    badge: null,
    title: 'Personal Portfolio Website',
    desc: 'Responsive personal portfolio with smooth animations, dark glassmorphism design, animated hero section, typing effect, and a live contact form using Web3Forms.',
    tags: ['React', 'CSS3', 'Web3Forms'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    demo: null,
    code: 'https://github.com/Fireff5/port',
    featured: false,
  },
];

const typeColors = {
  'Full-Stack': '#8b5cf6',
  Security: '#ec4899',
  Frontend: '#06b6d4',
};

const Projects = () => (
  <section id="projects" className="projects-section" aria-labelledby="projects-heading">
    <div className="projects-inner">
      <div className="projects-header reveal">
        <h2 className="section-heading" id="projects-heading">Projects</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Things I've built that I'm proud of</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card ${p.featured ? 'featured' : ''} reveal`}
            key={p.num}
            style={{ '--p-gradient': p.gradient, transitionDelay: `${i * 0.1}s` }}
          >
            {/* Gradient header bar */}
            <div className="project-header-bar" />

            <div className="project-body">
              <div className="project-meta">
                <span
                  className="project-type-badge"
                  style={{ '--badge-color': typeColors[p.type] || '#8b5cf6' }}
                >
                  {p.type}
                </span>
                {p.badge === 'Live' && (
                  <span className="project-live-badge">
                    <span className="live-dot" />
                    Live
                  </span>
                )}
                {!p.demo && p.type === 'Security' && (
                  <span className="project-secure-badge">
                    <FaLock /> Secure
                  </span>
                )}
                <span className="project-num">{p.num}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>
                    {tagIcons[t] && <span className="tag-icon">{tagIcons[t]}</span>}
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-btn project-btn-disabled" aria-label="No live demo available">
                    No Live Demo
                  </span>
                )}
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-secondary">
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
