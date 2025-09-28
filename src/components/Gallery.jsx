// Gallery.js
import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Our Fleet</h2>
      <div className="images">
        <img src="/1.png" alt="Truck 1" />
        <img src="/2.png" alt="Truck 2" />
        <img src="/3.png" alt="Truck 3" />
        <img src="/4.png" alt="Truck 4" />
      </div>
    </section>
  );
}

export default Gallery;
