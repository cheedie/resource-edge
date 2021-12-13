import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginLogo, FormCheck, Error } from "../assets";

const Login = () => {
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (value) => {
    const checker = /\S+@\S+\.\S+/;
    if (checker.test(value)) {
      setError(false);
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleSubmit = () => {
    if (!error && isChecked) {
      navigate("/password");
    } else {
      setError(true);
    }
  };

  return (
    <section className="login-container" style={{ paddingTop: "1rem" }}>
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container" style={{ marginTop: "1.5rem" }}>
        <div className="form-title">
          <h5 className="title">Log in</h5>
          <p className="paragraph-text" style={{ paddingBottom: "1rem" }}>
            Access your resource edge account
          </p>
        </div>
        <form>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id=""
              autoComplete="on"
              onChange={(e) => validateEmail(e.target.value)}
              placeholder="Enter email"
              className={`form-input ${error ? "error" : ""}`}
            />
            {isChecked && <FormCheck className="watch-icon" />}
          </div>

          {error && (
            <span className="error-msg">
              <Error />
              <p>Enter email address</p>
            </span>
          )}
          <div className="login-btn-container">
            <button
              className="btn btn-block sign-up-btn"
              disabled={error}
              onClick={handleSubmit}
            ></button>

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
