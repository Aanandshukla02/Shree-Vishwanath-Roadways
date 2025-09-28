import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "9033377799";
  const message = "Hello, I want to know more about your transport services!";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;
