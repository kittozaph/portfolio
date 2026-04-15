import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'System Engineer',
      company: 'Arc Technologies Sdn Bhd',
      duration: 'January 2025 - Present',
      desc: 'Designing IoT system architectures, handling product requirement documents, deploying virtual machine environments, and setting up industrial system testing environments.'
    },
    {
      title: 'System Programmer',
      company: 'Karuna Sarawak Sdn Bhd',
      duration: 'June 2024 - December 2024',
      desc: 'Developed web-based systems using Laravel (PHP). Customized Odoo ERP workflows and built Python backend automation scripts.'
    },
    {
      title: 'Research Assistant (IT)',
      company: 'UiTM Sarawak',
      duration: 'October 2022 - March 2024',
      desc: 'Specialized in IoT applications for soft-shell crab farming. Optimized deep learning recognition models and handled hardware integration.'
    },
    {
      title: 'IT Support/Technician',
      company: 'Kompande Group',
      duration: '2021 - 2022',
      desc: 'Performed fiber-optic network installation and troubleshooting for clients across multiple outstation districts.'
    }
  ];

  const tools = [
    { name: 'Python', category: 'Language' },
    { name: 'JavaScript / TS', category: 'Language' },
    { name: 'PHP / Laravel', category: 'Backend' },
    { name: 'ReactJS', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'OpenCV / PyTorch', category: 'Machine Learning' },
    { name: 'IoT Systems', category: 'Hardware' },
    { name: 'AWS Cloud', category: 'Cloud' },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>Explore My</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-wrapper grid grid-2">
          {/* Work Experience */}
          <div className="timeline-container animate-fade-in-up delay-100">
            <h3 className="section-subtitle gradient-text">Work History</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item glass-panel">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-date">{exp.duration}</span>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Toolkit */}
          <div className="toolkit-container animate-fade-in-up delay-200">
            <h3 className="section-subtitle gradient-text">Toolkit & Skills</h3>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <div key={index} className="skill-item glass-panel">
                  <div className="skill-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="skill-details">
                    <h4>{skill.name}</h4>
                    <p>{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
