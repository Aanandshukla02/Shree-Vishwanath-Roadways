import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./ContactPopup.css";

function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    goods: "",
    weight: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "5f78390f-d292-49fc-bedd-2d0913721133"); 
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Inquiry sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickup: "",
          drop: "",
          goods: "",
          weight: "",
          message: "",
        });
      } else {
        setStatus(result.message || "❌ Error sending inquiry.");
      }
    } catch (error) {
      setStatus("⚠️ An error occurred. Try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button className="contact-float" onClick={() => setIsOpen(true)}>
        <FaEnvelope className="contact-icon" />
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <h2>Get a Quote</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Pickup Location"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Drop Location"
                value={formData.drop}
                onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Type of Goods"
                value={formData.goods}
                onChange={(e) => setFormData({ ...formData, goods: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Approx. Weight / Quantity (Optional)"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
              <textarea
                placeholder="Message / Special Instructions"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
            {status && <p className="status">{status}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPopup;
