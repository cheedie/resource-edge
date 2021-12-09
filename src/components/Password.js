import React from "react";
import { Link } from "react-router-dom";
import loginLogo from "../assets/login-logo.svg";
import edit from "../assets/edit-filled.svg";
import watch from "../assets/watch.svg";

const Password = () => {
  return (
    <section className="login-container">
      <div className="login-title">
        <img src={loginLogo} alt="" />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h5 className="title">Log in</h5>
          <p className="paragraph-text">Access your resource edge account</p>
        </div>
        <div className="user-details">
          <h5 className="title">Ositadinma Nwangwu</h5>
          <p className="paragraph-text">o.nwangwu@genesystechhub.com</p>
          <img src={edit} alt="" />
        </div>
        <form action="">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-container">
            <input
              type="password"
              name="password"
              id=""
              autoComplete="on"
              placeholder="Enter password"
              className="form-input"
            />
            <img src={watch} alt="" className="watch-icon" />
          </div>

          <div className="login-btn-container">
            <Link to="/dashboard" className="btn btn-block sign-in-btn"></Link>

            <hr
              style={{
                border: "1px solid #DFE1E6",
                marginBottom: "1rem",
              }}
            />

            <Link className="forgot-password-btn" to="/resetpassword">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Password;
