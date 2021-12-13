import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Watch, EditFilled, LoginLogo, WatchFilled, Error } from "../assets";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setError(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section className="login-container">
      <div className="login-title">
        <LoginLogo className="login-svg" />
      </div>
      <div className="form-container">
        <div className="form-title">
          <h5 className="title">Log in</h5>
          <p className="paragraph-text">Access your resource edge account</p>
        </div>
        <div className="user-details">
          <div>
            <h5 className="title">Ositadinma Nwangwu</h5>
            <EditFilled />
          </div>
          <p className="paragraph-text">o.nwangwu@genesystechhub.com</p>
        </div>
        <form action="">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-container">
            <input
              type={toggle ? "text" : "password"}
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
            <span onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <WatchFilled className="watch-icon" />
              ) : (
                <Watch className="watch-icon" />
              )}
            </span>
            {error && (
              <span className="error-msg">
                <Error />
                <p>Enter password</p>
              </span>
            )}
          </div>

          <div className="login-btn-container">
            <button
              onClick={handleSubmit}
              className="btn btn-block sign-in-btn"
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

export default Password;
