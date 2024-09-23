import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Using react-icons for the WhatsApp icon

const Whatsapp = () => {
  const phoneNumber = "918755830399"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        zIndex: "1000",
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default Whatsapp;
