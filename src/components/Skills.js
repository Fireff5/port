import React from 'react';
import './Skills.css'; 

const Skills = () => {
  return (
    <section id="skills">
  <h3>My Skills</h3>
  
  <div className="skill-item">
    <div className="skill-header">
      <span>React</span>
      <span>90%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "90%" }}></div>
    </div>
  </div>

  <div className="skill-item">
    <div className="skill-header">
      <span>Cyber Security</span>
      <span>50%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "50%" }}></div>
    </div>
  </div>

  <div className="skill-item">
    <div className="skill-header">
      <span>C</span>
      <span>75%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "75%" }}></div>
    </div>
  </div>
 
   <div className="skill-item">
    <div className="skill-header">
      <span>HTML|CSS|JavaScript</span>
      <span>85%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "85%" }}></div>
    </div>
  </div>

  <div className="skill-item">
    <div className="skill-header">
      <span>Node.js</span>
      <span>75%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "75%" }}></div>
    </div>
  </div>

 <div className="skill-item">
    <div className="skill-header">
      <span>Java</span>
      <span>75%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "75%" }}></div>
    </div>
  </div>

 <div className="skill-item">
    <div className="skill-header">
      <span>Git Hub</span>
      <span>90%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: "90%" }}></div>
    </div>
  </div>

</section>

  );
};

export default Skills;