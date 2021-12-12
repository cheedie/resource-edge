import React from "react";
import { Link } from "react-router-dom";
import { LoginLogo, Error } from "../assets";

const NewPassword = () => {
  return (
    <section className="login-container">
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h6 className="title">Reset Password</h6>
          <p className="paragraph-text" style={{ paddingBottom: "1rem" }}>
            The password should have atleast 6 characters
          </p>
        </div>

        <form action="">
          <label htmlFor="password" className="form-label">
            New Password
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
            <span className="error-msg">
              <Error text="" />
              <p>Enter email address</p>
            </span>
          </div>
          <label
            htmlFor="password"
            className="form-label"
            style={{
              paddingTop: "1rem",
            }}
          >
            Confirm Password
          </label>
          <div className="input-container">
            <input
              type="password"
              name="password"
              id=""
              autoComplete="on"
              placeholder="Confirm password"
              className="form-input"
            />
            <span className="error-msg">
              <Error text="" />
              <p>Enter email address</p>
            </span>
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

export default NewPassword;
