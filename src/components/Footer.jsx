import React, { useState } from "react";
import "./Footer.css";
import Privacy from "./Privacy";
import Terms from "./Terms";

function Footer() {
  const [showPopup, setShowPopup] = useState(null);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Shree Vishwanath Roadways</h3>
          <p>
            Trusted logistics & transportation across India. Safe, reliable, and cost-effective solutions by Road, Rail & Air. Your consignments are always in expert hands.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps/place/GIDC+Vapi,+Gujarat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plot No. 136-9A, Near National Plywoods, II Phase GIDC, Vapi -
              396195, Gujarat
            </a>
          </p>
          <p>📞 <a href="tel:+919033377799">+91 90333 77799</a></p>
          <p>
            ✉️{" "}
            <a href="mailto:shreevishwanathroadways81@gmail.com">
              shreevishwanathroadways81@gmail.com
            </a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:shreevishwanathroadways@gmail.com">
              shreevishwanathroadways@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <span
                className="popup-link"
                onClick={() => setShowPopup("terms")}
              >
                Terms & Conditions
              </span>
            </li>
            <li>
              <span
                className="popup-link"
                onClick={() => setShowPopup("privacy")}
              >
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shree Vishwanath Roadways. All Rights
          Reserved.
        </p>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(null)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setShowPopup(null)}
            >
              ✖
            </button>
            {showPopup === "terms" && <Terms />}
            {showPopup === "privacy" && <Privacy />}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
