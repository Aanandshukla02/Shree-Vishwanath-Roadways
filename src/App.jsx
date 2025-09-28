import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer/>
    </div>
  );
}

export default App;
