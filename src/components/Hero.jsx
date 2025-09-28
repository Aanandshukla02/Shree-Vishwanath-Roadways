import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero" id="home">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="logo">
          <img src="/Logo.png" alt="SVR Logo" className="nav-logo" />
          <span>SVR</span>
        </div>

        {/* Hamburger button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* ===== HERO CONTENT ===== */}
      <div className="overlay">
        <img src="/Logo.png" alt="SVR Logo" className="hero-logo" />
        <h1 className="title">Shree Vishwanath Roadways</h1>
        <p className="subtitle">Trusted Transport Contractors & Fleet Owners</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>

      {/* Scroll Down Arrow */}
      <div className="scroll-down">&#8595;</div>
    </section>
  );
}

export default Hero;
