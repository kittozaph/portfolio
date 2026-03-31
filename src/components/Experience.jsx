import React from 'react';
import './Experience.css';

const Experience = () => {
  const skills = [
    { name: 'HTML', level: 'Basic' },
    { name: 'CSS', level: 'Basic' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'MySQL', level: 'Basic' },
    { name: 'PHP', level: 'Basic' },
    { name: 'Git', level: 'Basic' }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>Explore My</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-container glass-panel animate-fade-in-up delay-100">
          <h3 className="experience-subtitle gradient-text">Toolkit</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="skill-details">
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
