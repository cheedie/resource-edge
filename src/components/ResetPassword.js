import React from "react";
import { Link } from "react-router-dom";
import loginLogo from "../assets/login-logo.svg";

const ResetPassword = () => {
  return (
    <section className="login-container" style={{ paddingTop: "1rem" }}>
      <div className="login-title">
        <img src={loginLogo} alt="" />
      </div>
      <div className="form-container" style={{ marginTop: "1.7rem" }}>
        <div className="form-title">
          <h6 className="title">Reset Password</h6>
          <p className="paragraph-text" style={{ paddingBottom: "1rem" }}>
            To enable us reset your password, enter your email below
          </p>
        </div>

        <form action="">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id=""
              autoComplete="on"
              placeholder="Enter email"
              className="form-input"
            />
          </div>

          <div className="login-btn-container">
            <Link
              to="/resetpasswordsuccessful"
              className="btn btn-block sign-in-btn"
            ></Link>

            <hr
              style={{
                border: "1px solid #DFE1E6",
                marginBottom: "1.3rem",
              }}
            />
            <Link className="forgot-password-btn" to="/login">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
