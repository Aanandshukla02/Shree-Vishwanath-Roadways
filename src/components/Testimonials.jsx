import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      feedback: "SVR ensured our factory goods reached on time, very reliable service.",
    },
    {
      name: "Priya Patel",
      feedback: "Professional team, well-maintained trucks, and hassle-free delivery.",
    },
    {
      name: "Arjun Mehta",
      feedback: "Great experience! Transparent pricing and safe transportation.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="feedback">“{review.feedback}”</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
