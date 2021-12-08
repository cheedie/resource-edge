import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import mobileLogo from "../assets/re-logo.svg";
import menuBtn from "../assets/menu.svg";
import closeBtn from "../assets/cross.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <main className="navbar-container">
      <div className="section-center nav-center">
        <div className="nav-items">
          <img src={logo} alt="" className="desktop-logo" />
          <img src={mobileLogo} alt="" className="mobile-logo" />
          <div>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? (
                <img src={closeBtn} alt="" className="close-btn" />
              ) : (
                <img src={menuBtn} alt="" className="menu-btn" />
              )}
            </button>
          </div>
        </div>
        <div className={showLinks ? "nav-links-mobile" : "navlinks-container"}>
          <ul className="nav-links">
            <li>
              <a href="" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                About
              </a>
            </li>
          </ul>
          <div className="nav-btn-container">
            <button type="submit" className="btn sign-up-btn">
              sign up
            </button>
            <button type="submit" className="btn sign-in-btn">
              sign in
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
