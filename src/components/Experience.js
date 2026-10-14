import React from 'react';
import './Experience.css';
import { FaCode, FaShieldAlt, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        role: 'Full Stack Developer Intern',
        company: 'Digisailor',
        location: 'Tamil Nadu, India',
        period: 'Internship',
        type: 'Web Development',
        icon: <FaCode />,
        color: '#8b5cf6',
        gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))',
        responsibilities: [
            'Developed responsive full-stack web applications using React.js and Node.js',
            'Built RESTful APIs with Express.js and integrated with PostgreSQL/MongoDB databases',
            'Collaborated on UI/UX design and implemented pixel-perfect components from Figma designs',
            'Implemented user authentication systems with JWT and session management',
            'Participated in agile development workflows, code reviews, and team sprints',
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Git'],
        certificate: true,
    },
    {
        id: 2,
        role: 'Cyber Security Intern',
        company: 'Postulate Infotech Pvt Ltd',
        location: 'Tamil Nadu, India',
        period: 'Internship',
        type: 'Security',
        icon: <FaShieldAlt />,
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.08))',
        responsibilities: [
            'Gained practical knowledge in ethical hacking, network security, and vulnerability assessment',
            'Learned SSL/TLS encryption, TCP/IP protocols, and secure communication practices',
            'Practiced using security tools for penetration testing and system hardening',
            'Developed a secure client-server socket communication system with end-to-end encryption',
            'Explored malware analysis, intrusion detection, and cybersecurity best practices',
        ],
        technologies: ['Python', 'SSL/TLS', 'Network Security', 'Ethical Hacking', 'Linux'],
        certificate: true,
    },
];

const Experience = () => (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
        <div className="experience-inner">
            <div className="experience-header reveal">
                <h2 className="section-heading" id="experience-heading">Experience</h2>
                <div className="section-divider" />
                <p className="section-subtitle">Professional internship experience and hands-on learning</p>
            </div>

            <div className="experience-timeline">
                {experiences.map((exp, idx) => (
                    <div
                        className={`exp-card reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                        key={exp.id}
                        style={{ '--exp-color': exp.color, '--exp-gradient': exp.gradient, transitionDelay: `${idx * 0.15}s` }}
                    >
                        {/* Timeline connector */}
                        <div className="exp-timeline-dot" />

                        <div className="exp-card-inner">
                            <div className="exp-card-header">
                                <div className="exp-icon-wrap">
                                    {exp.icon}
                                </div>
                                <div className="exp-title-block">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <p className="exp-company">{exp.company}</p>
                                </div>
                                {exp.certificate && (
                                    <span className="exp-cert-badge">
                                        <FaCheckCircle /> Certified
                                    </span>
                                )}
                            </div>

                            <div className="exp-meta">
                                <span className="exp-period">
                                    <FaCalendarAlt />
                                    {exp.period}
                                </span>
                                <span className="exp-location">
                                    <FaMapMarkerAlt />
                                    {exp.location}
                                </span>
                                <span
                                    className="exp-type-badge"
                                    style={{ '--badge-color': exp.color }}
                                >
                                    {exp.type}
                                </span>
                            </div>

                            <ul className="exp-responsibilities">
                                {exp.responsibilities.map((r, i) => (
                                    <li key={i}>
                                        <span className="exp-bullet" />
                                        {r}
                                    </li>
                                ))}
                            </ul>

                            <div className="exp-techs">
                                {exp.technologies.map((t) => (
                                    <span className="exp-tech" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
