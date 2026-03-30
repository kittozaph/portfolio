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
            <span className="contact-icon">📧</span>
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
