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
          <div>
            <input
              type="password"
              name="password"
              id=""
              autoComplete="on"
              placeholder="Enter password"
              className="form-input input-container"
            />
            {/* <div onClick={() => setToggle(!toggle)}>
            <img src={toggle? watch : close } alt="" className="watch-icon" />
<Watch  />
            </div> */}
            <div onClick={() => setToggle(!toggle)} className="watch-icon">
              {toggle ? <WatchFilled /> : <Watch />}
            </div>
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
