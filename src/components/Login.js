import React from "react";
import { Link } from "react-router-dom";
import loginLogo from "../assets/login-logo.svg";
const Login = () => {
  const handleClick = (e) => {};
  return (
    <section className="login-container" style={{ paddingTop: "1rem" }}>
      <div className="login-title">
        <img src={loginLogo} alt="" />
      </div>
      <div className="form-container" style={{ marginTop: "2rem" }}>
        <div className="form-title">
          <h5 className="title">Log in</h5>
          <p className="paragraph-text" style={{ paddingBottom: "1rem" }}>
            Access your resource edge account
          </p>
        </div>
        <form action="">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id=""
            autoComplete="on"
            onClick={handleClick}
            placeholder="Enter email"
            className="form-input"
          />
          <div className="login-btn-container">
            <Link to="/password" className="btn btn-block sign-up-btn"></Link>

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

export default Login;
