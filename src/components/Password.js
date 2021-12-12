import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Watch, EditFilled, LoginLogo, WatchFilled } from "../assets";

const Password = () => {
  const [toggle, setToggle] = useState(false);
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
          <div onClick={() => setToggle(!toggle)} className="input-container">
            <input
              type="password"
              name="password"
              id=""
              autoComplete="on"
              placeholder="Enter password"
              className="form-input"
            />

            {toggle ? (
              <WatchFilled className="watch-icon" />
            ) : (
              <Watch className="watch-icon" />
            )}
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
