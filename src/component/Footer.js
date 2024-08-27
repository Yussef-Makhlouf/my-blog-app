import React from 'react';
import "../../public/style/Footer.css";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link  href="/">Home</Link> </li>
            <li><Link href="/aboutUs">About Us</Link> </li>
            <li><Link  href="/contactUs">Contact Us</Link> </li>
            <li><Link  href="/blog">Blog</Link> </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <p>Connect with us on social media</p>
          <div className="social-icons">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              {/* <Image src="/facebook-icon.png" alt="Facebook" /> */}
            </Link> 
            <Link  href="https://twitter.com" target="_blank" rel="noreferrer">
              {/* <Image src="/twitter-icon.png" alt="Twitter" /> */}
            </Link> 
            <Link  href="https://instagram.com" target="_blank" rel="noreferrer">
              {/* <Image src="/instagram-icon.png" alt="Instagram" /> */}
            </Link> 
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
