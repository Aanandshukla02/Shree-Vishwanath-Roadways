// Contact.jsx
import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Have questions or need transport services? Reach out to us — we’re here to help!
      </p>

      <div className="contact-info">
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Our Office</h3>
          <a
            href="https://www.google.com/maps/place/GIDC+Vapi,+Gujarat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plot No. 136-9A, Near National Plywoods, II Phase GIDC Vapi-396195
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <div className="inline-links">
            <a href="tel:9033377799">+919033377799</a>
          </div>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <div className="inline-links">
            <a href="mailto:shreevishwanathroadways@gmail.com">
              shreevishwanathroadways@gmail.com
            </a>
            <a href="mailto:shreevishwanathroadways81@gmail.com">
              shreevishwanathroadways81@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.757182593757!2d72.925!3d20.371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e3b000000001%3A0xabcdef123456789!2sGIDC%20Vapi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635678901234!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
