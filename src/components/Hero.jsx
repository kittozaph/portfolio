import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="profile" className="section hero-section">
      <div className="container hero-container grid grid-2">
        <div className="hero-text animate-fade-in-up">
          <p className="greeting gradient-text">Hello, I'm</p>
          <h1 className="hero-title">Affaiq Aini</h1>
          <h2 className="hero-subtitle">System Engineer</h2>
          <p className="hero-description delay-100">
            Passionate about building modern web applications, integrating IoT technologies, and crafting scalable robust solutions with Machine Learning.
          </p>
          
          <div className="btn-group delay-200">
            <button className="btn btn-primary" onClick={() => window.open('/assets/resume_affaiq-1.pdf')}>
              Download CV
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href='#contact'}>
              Contact Info
            </button>
          </div>

          <div className="socials delay-300">
            <a href="https://www.linkedin.com/in/affaiq-aini" target="_blank" rel="noreferrer" className="social-icon linkedin-icon">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/kittozaph" target="_blank" rel="noreferrer" className="social-icon github-icon">
              <img src="/assets/github.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up delay-100">
          <div className="hero-image-container glass-panel">
            <img src="/assets/pp.jpg" alt="Affaiq Aini" className="hero-image" />
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
