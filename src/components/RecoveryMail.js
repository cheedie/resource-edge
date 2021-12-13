import React from "react";
import { Link } from "react-router-dom";
import { LoginLogo, CheckCircle } from "../assets";

const RecoveryMail = () => {
  return (
    <section className="login-container">
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container" style={{ marginTop: "1.5rem" }}>
        <div className="form-title">
          <h5 className="title">Reset Password</h5>
          <CheckCircle style={{ marginTop: "2rem" }} />

          <p
            className="paragraph-text"
            style={{ paddingBottom: "2rem", paddingTop: "1.5rem" }}
          >
            A recovery email has been sent to your email address.
          </p>
        </div>

        <div className="login-btn-container">
          <hr
            style={{
              border: "1px solid #DFE1E6",
              marginBottom: "1.5rem",
            }}
          />
          <Link className="forgot-password-btn" to="/newpassword">
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecoveryMail;
