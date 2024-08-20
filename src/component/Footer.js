import React from 'react';
import "../../public/style/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Blog App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
