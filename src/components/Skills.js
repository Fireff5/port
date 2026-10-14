import React from 'react';
import './Skills.css';
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaLinux, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiSpringboot, SiC,
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#61dafb',
    gradient: 'linear-gradient(135deg, rgba(97,218,251,0.1), rgba(59,130,246,0.1))',
    skills: [
      { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    ],
  },
  {
    title: 'Backend',
    color: '#68d391',
    gradient: 'linear-gradient(135deg, rgba(104,211,145,0.1), rgba(6,182,212,0.1))',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68d391' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
      { name: 'Java', icon: <FaJava />, color: '#f89820' },
      { name: 'Python', icon: <FaPython />, color: '#4584b6' },
    ],
  },
  {
    title: 'Databases',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.1), rgba(236,72,153,0.1))',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
    ],
  },
  {
    title: 'Tools & Security',
    color: '#fb7185',
    gradient: 'linear-gradient(135deg, rgba(251,113,133,0.1), rgba(139,92,246,0.1))',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
      { name: 'Linux', icon: <FaLinux />, color: '#fcc624' },
      { name: 'Cyber Security', icon: <MdSecurity />, color: '#06b6d4' },
      { name: 'C', icon: <SiC />, color: '#a8b4c0' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section" aria-labelledby="skills-heading">
    <div className="skills-inner">
      <div className="skills-header reveal">
        <h2 className="section-heading" id="skills-heading">Skills & Technologies</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Technologies and tools I work with to bring ideas to life</p>
      </div>

      <div className="skills-grid reveal">
        {skillCategories.map((category) => (
          <div
            className="skill-category"
            key={category.title}
            style={{ '--cat-color': category.color, '--cat-gradient': category.gradient }}
          >
            <div className="skill-category-header">
              <span className="skill-category-dot" />
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-pills">
              {category.skills.map((skill) => (
                <div
                  className="skill-pill"
                  key={skill.name}
                  style={{ '--skill-color': skill.color }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;