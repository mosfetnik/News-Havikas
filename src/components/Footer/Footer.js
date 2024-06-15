import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Optional: Include your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>NEWS </span>HAVIKAS</h1>
          <p>
          Trusted source for global news. Accurate, timely, and comprehensive coverage. Stay informed and engaged with NewsSphere.
          </p>
          <div className="contact">
            <span><strong>Email:</strong> info@company.com</span>
          </div>
        </div>

  

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} softelevation.in. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
