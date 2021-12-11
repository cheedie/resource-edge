import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, ReLogo, Menu, Cross } from "../assets";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <main className="navbar-container">
      <div className="section-center nav-center">
        <div className="nav-items">
          <Logo className="desktop-logo" />
          <ReLogo className="mobile-logo" />
          <div>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? (
                <Cross className="close-btn" />
              ) : (
                <Menu className="menu-btn" />
              )}
            </button>
          </div>
        </div>
        <div className={showLinks ? "nav-links-mobile" : "navlinks-container"}>
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
          </ul>
          <div className="nav-btn-container">
            <Link className="btn sign-up-btn" to="/login">
              sign up
            </Link>
            <Link className="btn sign-in-btn" to="/login">
              sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
