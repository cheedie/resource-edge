import React from "react";
import menu from "../assets/dashboard-menu.svg";
import logo from "../assets/Logo.svg";
import { Avatar, DashboardMenu, Logo, CirclEmpty } from "../assets";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="nav-dashboard">
        <div className="dashboard-section-center">
          <div className="dashboard-header">
            <img src={menu} alt="" />
            <img src={logo} alt="" />
            {/* <DashboardMenu />
            <Logo /> */}

            <div
              style={{ borderLeft: "1.5px solid #C1C7D0", height: "1.5rem" }}
            ></div>

            <h6
              style={{
                color: "#091E42",
                fontSize: "0.8rem",
                fontWeight: "300",
              }}
            >
              TM Dashboard
            </h6>
          </div>
          <div className="avatar-container">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="dashboard-user-details">
        <h1 className="dashboard-title">Hello, Ositadinma Nwangwu</h1>
        <p className="dashboard-paragraph">
          Welcome and good to have you back.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <h4 className="title">Things to do</h4>
          <div className="employee-details-container">
            <div className="employee-details-content">
              <CirclEmpty className="circle-empty" />
              <p
                className="dashboard-paragraph"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                Upload your employee performance agreement
              </p>
            </div>

            <button
              className="btn"
              style={{
                color: "#0052CC",
                background: "transparent",
              }}
            >
              Begin
            </button>
          </div>
          <div className="employee-details-container">
            <div className="employee-details-content">
              <CirclEmpty />
              <p
                className="dashboard-paragraph"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                Start quarterly self review
              </p>
            </div>
            <button className="btn resume-btn">Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
