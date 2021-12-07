import React from "react";
import footerLogo from "../assets/Logo.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <main className="footer-container">
      <div className="section-center footer-section">
        <div className="footer-logo">
          <img src={footerLogo} alt="" />
          <p>Throw paperwork into the trash.</p>
        </div>
        <div className="social-icons">
          <a href="">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="">
            <img src={instagramIcon} alt="" />
          </a>
          <span className="copy-right">
            <p>Copyright &copy; Genesys DevStudio.</p>
            <p>All rights reserved.</p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Footer;
