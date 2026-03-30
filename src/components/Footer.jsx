import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Affaiq Aini. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
