import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Employee Management System",
      image: "/assets/project-1.jpg",
      github: "https://github.com/kittozaph/laravelproject"
    },
    {
      title: "Product Management System",
      image: "/assets/project-2.jpg",
      github: "https://github.com/kittozaph/voyager/tree/master"
    },
    {
      title: "YOLOv7 Custom Object Detection",
      image: "/assets/project-3.jpg",
      github: "https://github.com/kittozaph/yolov7_custom"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>Browse My Recent</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid grid grid-3">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
