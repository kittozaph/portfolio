import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Resource Management Integration & Monitoring",
      description: "A scalable system integrating multiple sensors to monitor operational resources, providing real-time data insights and predictive analytics.",
      tags: ["IoT", "Python", "AWS", "Dashboard"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Water Leakage System Integration & Monitoring",
      description: "Hardware-integrated sensor network designed for early detection of water leakages featuring automated alerts to prevent infrastructural damage.",
      tags: ["Arduino", "Python", "PHP", "Alerts"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    },
    {
      title: "Event Management System",
      description: "Comprehensive web application tailored for planning, ticketing, and managing event operations seamlessly from end to end.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M16 18h.01"></path>
        </svg>
      )
    },
    {
      title: "Car Rental Booking System",
      description: "User-friendly online platform allowing customers to search, book, and manage vehicle rentals alongside dynamic admin controls.",
      tags: ["ReactJS", "Express", "MySQL", "Stripe"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      )
    },
    {
      title: "POS System (Point of Sale)",
      description: "A feature-rich point-of-sale solution for retail operations including inventory tracking, employee management, and sales analytics.",
      tags: ["PHP", "NextJS", "TypeScript"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      )
    },
    {
      title: "Digital Business Card System",
      description: "A sleek web architecture enabling professionals to share dynamic contact details efficiently via QR codes and NFC profiles.",
      tags: ["ReactJS", "HTML/CSS", "MongoDB"],
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>My Professional</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid grid grid-3">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
