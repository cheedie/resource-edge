import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/dashboard-menu.svg";
import logo from "../assets/Logo.svg";
import { Avatar, CirclEmpty, Check, TalentManager, Employee } from "../assets";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="dashboard-section">
      <div className="nav-dashboard">
        <div className="dashboard-section-center">
          <div className="dashboard-header">
            <img src={menu} alt=""  />
            <img src={logo} alt="" />
            <div
              style={{ borderLeft: "1.5px solid #C1C7D0", height: "1.5rem" }}
            ></div>

            <h6
              style={{
                color: "#091E42",
                fontSize: "12px",
              }}
            >
              TM Dashboard
            </h6>
          </div>
          <div
            className="avatar-container"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <Avatar />
            {isModalOpen && (
              <div className="drop-down-overlay">
                <div className="drop-down-content">
                  <div className="drop-down-center">
                    <h6>OSITADINMA NWANGWU</h6>
                    <p>Profile</p>
                  </div>

                  <div className="drop-down-center">
                    <h6>Use Resource Edge as</h6>
                    <div className="designation-container">
                      <div
                        style={{
                          display: "flex",
                          paddingBottom: "1rem",
                          alignItems: "center",
                        }}
                      >
                        <TalentManager />
                        <h5>Talent Manager</h5>
                      </div>
                      <Check className="" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Employee />
                      <h5>Employee</h5>
                    </div>
                  </div>
                  <hr
                    style={{
                      border: "1px solid #E5E5E5",
                      margin: "1.5rem 0",
                    }}
                  />
                  <Link to="/" className="drop-down-center log-out-btn">
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard-user-details">
        <h2 className="dashboard-title">Hello, Ositadinma Nwangwu</h2>
        <p className="dashboard-paragraph">
          Welcome and good to have you back.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <h4 className="dashboard-title">Things to do</h4>
          <div className="employee-details-container">
            <div className="employee-details-content">
              <CirclEmpty className="circle-empty" />
              <p
                className="dashboard-paragraph"
                style={{
                  paddingLeft: "1rem",
                  lineHeight: "20px",
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
                fontSize: "14px",
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
