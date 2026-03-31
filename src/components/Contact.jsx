import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="title-section animate-fade-in-up">
          <p>Get in Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container glass-panel animate-fade-in-up delay-100">
          <div className="contact-item">
            <span className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <a href="mailto:affaiqaini@gmail.com" className="contact-link">
              affaiqaini@gmail.com
            </a>
          </div>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="contact-icon-img" />
            <a href="https://www.linkedin.com/in/affaiq-aini" target="_blank" rel="noreferrer" className="contact-link">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
