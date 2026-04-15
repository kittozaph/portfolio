import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>Get To Know More</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content grid grid-2">
          <div className="about-text-wrapper animate-fade-in-up delay-100">
            <p className="about-text">
              With a strong foundation in Information Technology and a passion for innovation,
              I bring over 3 years of experience as a System Engineer and Developer. My technical toolkit includes proficiency in Python,
              which I've leveraged to create robust Machine Learning and IoT-based solutions.
              <br /><br />
              Additionally, I have extensive experience with full-stack web development, having built dynamic systems utilizing HTML, CSS,
              JavaScript (ReactJS, TypeScript), and PHP with the Laravel Framework. I'm also well-versed in database management using MySQL.
              <br /><br />
              Whether designing system architectures, deploying virtual environments, developing computer vision models, or troubleshooting fiber-optic networks,
              I am dedicated to delivering comprehensive and reliable technical results.
            </p>
          </div>

          <div className="about-cards-wrapper grid animate-fade-in-up delay-200">
            <div className="about-card glass-panel">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Experience</h3>
              <p>3 years <br />System Engineering</p>
            </div>
            <div className="about-card glass-panel">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3>Education</h3>
              <div className="education-list">
                <p>• M.Sc Information Technology</p>
                <p>• B.Sc. (Hons.) Chemistry with Management</p>
                <p>• Diploma in Industrial Chemistry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
