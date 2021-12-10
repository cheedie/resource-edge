import React from "react";
import { Link } from "react-router-dom";
import { FooterLogo, Facebook, Twitter, Linkedin, Instagram } from "../assets";

const Footer = () => {
  return (
    <main className="footer-container">
      <div className="section-center footer-section">
        <div className="footer-logo">
          <FooterLogo />
          <p>Throw paperwork into the trash.</p>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <Link to="#">
              <Facebook />
            </Link>
            <Link to="#">
              <Twitter />
            </Link>
            <Link to="#">
              <Linkedin />
            </Link>
            <Link to="#">
              <Instagram />
            </Link>
          </div>
          <p className="copy-right">
            Copyright &copy; Genesys DevStudio. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
