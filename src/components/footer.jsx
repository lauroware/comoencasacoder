import React from "react";
import iconoFacebook from "../assets/IconoFacebook.png";
import iconoWhatsapp from "../assets/IconoWhatsapp.jpg";
import iconoInstagram from "../assets/IconoInstagram.png";
import "../styles/footer.css"; // Importa el archivo CSS

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.facebook.com/comoencasanorteysur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">
          <img src={iconoFacebook} alt="Facebook" className="icon" />
        </button>
      </a>
      <a
        href="https://www.instagram.com/comoencasa_norteysur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">
          <img src={iconoInstagram} alt="Instagram" className="icon" />
        </button>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=005491123153229"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">
          <img src={iconoWhatsapp} alt="WhatsApp" className="icon" />
        </button>
      </a>
    </footer>
  );
}

export default Footer;
