import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "./Hero.css";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      {/* ===== PARTICLES BACKGROUND ===== */}
      <Particles
        className="particles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, distance: 120, color: "#f39c12", opacity: 0.3 },
            color: { value: "#f39c12" },
          },
        }}
      />

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="logo-box">
          <img src="/Logo.png" alt="SVR Logo" className="nav-logo" />
          <div className="logo-text">
            <span className="logo-main">SVR</span>
            <span className="hindi-text">श्री जय माँ विन्ध्यवासिनी</span>
          </div>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "services", "why", "gallery", "contact"].map((sec) => (
            <li key={sec}>
              <motion.a
                href={`#${sec}`}
                className={activeSection === sec ? "active-link" : ""}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {sec === "why" ? "Why Us" : sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== HERO CONTENT ===== */}
      <div className="overlay">
        <motion.img
          src="/Logo.png"
          alt="SVR Logo"
          className="hero-logo"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Shree Vishwanath Roadways
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Trusted Transport Contractors & Fleet Owners
        </motion.p>
        <motion.a
          href="#contact"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        &#8595;
      </motion.div>
    </section>
  );
}

export default Hero;
