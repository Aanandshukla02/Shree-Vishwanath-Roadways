// Footer.js
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
          <p>📍 Vapi, Gujarat, India</p>
          <p>📞 +91-9033377799</p>
          <p>✉️ shreevishwanathroadways81@gmail.com</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <li><a href="#track">Track Shipment</a></li> */}
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
