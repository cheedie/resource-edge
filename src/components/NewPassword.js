import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginLogo, Error } from "../assets";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setError(true);
    } else if (password !== confirmPassword) {
      setConfirmError(true);
      setError(false);
    } else {
      navigate("/resetpasswordsuccessful");
    }
  };
  return (
    <section className="login-container">
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h5 className="title">Reset Password</h5>
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
              className={`form-input ${error ? "error" : ""}`}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
            {error && (
              <span className="error-msg">
                <Error text="" />
                <p>Enter password</p>
              </span>
            )}
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
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmError(false);
              }}
              className={`form-input ${error || confirmError ? "error" : ""}`}
            />
            {error && (
              <span className="error-msg">
                <Error text="" />
                <p>Enter password</p>
              </span>
            )}
            {confirmError && (
              <span className="error-msg">
                <Error text="" />
                <p>Confrim password doesnt match</p>
              </span>
            )}
          </div>

          <div className="login-btn-container">
            <button
              className="btn btn-block sign-in-btn"
              onClick={handleSubmit}
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

export default NewPassword;
