import React from 'react';
import './Skills.css';

const bars = [
  { name: 'React', pct: 90 },
  { name: 'HTML / CSS / JavaScript', pct: 85 },
  { name: 'Node.js', pct: 75 },
  { name: 'Java', pct: 75 },
  { name: 'C', pct: 75 },
  { name: 'Cyber Security', pct: 50 },
  { name: 'GitHub', pct: 90 },
];

const chips = [
  { emoji: '⚛️', label: 'React' },
  { emoji: '🟨', label: 'JavaScript' },
  { emoji: '🐍', label: 'Python' },
  { emoji: '☕', label: 'Java' },
  { emoji: '🟢', label: 'Node.js' },
  { emoji: '🔐', label: 'SSL / TLS' },
  { emoji: '🛡️', label: 'Ethical Hacking' },
  { emoji: '🔗', label: 'TCP/IP' },
  { emoji: '🐱', label: 'GitHub' },
  { emoji: '🎨', label: 'CSS3' },
  { emoji: '🗄️', label: 'SQL' },
  { emoji: '🖥️', label: 'Linux' },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-inner">
      <h2 className="section-heading">Skills</h2>
      <div className="section-divider" />
      <p className="section-subtitle">Technologies & tools I work with</p>

      <div className="skills-layout">
        {/* Animated bars */}
        <div className="skills-bars">
          {bars.map((s) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-percent">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="skills-chips-section">
          <p className="chips-label">Tech Stack</p>
          <div className="chips-grid">
            {chips.map((c) => (
              <div className="chip" key={c.label}>
                <span className="chip-emoji">{c.emoji}</span>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;