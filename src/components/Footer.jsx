import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Shree Vishwanath Roadways</h3>
          <p>
            Leading logistics and transport solutions provider across India. 
            Committed to safe, timely, and efficient delivery of goods by Road, Rail, and Air.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            📍 <a 
                  href="https://www.google.com/maps/place/GIDC+Vapi,+Gujarat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
               >
               Vapi, Gujarat
               </a>
          </p>
          <p>
            📞 <a href="tel:+919033377799">+91-9033377799</a>
          </p>
          <p>
            ✉️ <a href="mailto:shreevishwanathroadways81@gmail.com">
                   shreevishwanathroadways81@gmail.com
               </a>
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shree Vishwanath Roadways. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
