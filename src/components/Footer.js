import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    
    <div className="footer">
      <p> &copy; BMW AG 2023 </p>
      <p className="pp">www.bmwmorocco.com</p>

      <div className="socialMedia">
      <a href="https://www.instagram.com/bmw/"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://www.facebook.com/bmwmoroccoofficial/"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="https://twitter.com/?lang=en"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  );
}

export default Footer;
