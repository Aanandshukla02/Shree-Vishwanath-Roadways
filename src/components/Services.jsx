// Services.js
import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Road Transportation</h3>
          <p>Nationwide road transport with a well-maintained fleet of trucks and trailers ensuring reliable deliveries across India.</p>
        </div>
        <div className="card">
          <h3>Rail Cargo</h3>
          <p>Cost-effective freight movement through India’s railway network, ideal for bulk consignments and long-distance delivery.</p>
        </div>
        <div className="card">
          <h3>Air Freight</h3>
          <p>Fast and secure air cargo services for urgent and time-sensitive consignments with end-to-end tracking.</p>
        </div>
        <div className="card">
          <h3>Full Truck Load (FTL)</h3>
          <p>Dedicated trucks for large shipments ensuring faster transit time and enhanced safety of goods.</p>
        </div>
        <div className="card">
          <h3>Part Truck Load (PTL)</h3>
          <p>Economical solution for small shipments by sharing truck space while ensuring safe handling.</p>
        </div>
        <div className="card">
          <h3>Warehousing & Distribution</h3>
          <p>Secure warehousing facilities and streamlined distribution to manage supply chains effectively.</p>
        </div>
        <div className="card">
          <h3>Door-to-Door Delivery</h3>
          <p>Hassle-free pickup and delivery services ensuring end-to-end convenience for clients.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
