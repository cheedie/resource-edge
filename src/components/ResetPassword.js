import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginLogo, FormCheck, Error } from "../assets";

const ResetPassword = () => {
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const validateEmail = (value) => {
    const checker = /\S+@\S+\.\S+/;
    if (checker.test(value)) {
      setError(false);
      setIsChecked(true);
      setEmail("");
    } else {
      setIsChecked(false);
    }
  };

  const handleSubmit = () => {
    if (!error && isChecked) {
      navigate("/recoverymail");
    } else {
      setError(true);
    }
  };
  return (
    <section className="login-container" style={{ paddingTop: "1rem" }}>
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container" style={{ marginTop: "1.7rem" }}>
        <div className="form-title">
          <h5 className="title">Reset Password</h5>
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
              onChange={(e) => validateEmail(e.target.value)}
              placeholder="Enter email"
              className={`form-input ${error ? "error" : ""}`}
            />
            {isChecked && <FormCheck className="watch-icon" />}

            {error && (
              <span className="error-msg">
                <Error />
                <p>Enter email address</p>
              </span>
            )}
          </div>

          <div className="login-btn-container">
            <button
              disabled={error}
              onClick={handleSubmit}
              className="btn btn-block sign-in-btn"
            ></button>

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
