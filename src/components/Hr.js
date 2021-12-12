import React from "react";
import { EmployeeManagement, PerformanceManagement, TimeOff } from "../assets";
import employeeDirectory from "../assets/employee-directory.svg";
const Hr = () => {
  return (
    <main className="hr-container">
      <div className="section-center">
        <section className="hr-header">
          <h2 className="title">Human Resources</h2>
          <p className="paragraph-text">
            Onboard new employees, manage the employee lifecycle and measure
            employee performance.
          </p>
        </section>
        <section className="hr-details-container">
          <div className="hr-detail">
            <EmployeeManagement />
            <h2 className="title">Employee Management</h2>
            <p className="paragraph-text">
              From Hiring & Onboarding to Retiring, the Resource Edge Employee
              Management module eliminates all the complexities & paperwork
              involved in managing your team.
            </p>
          </div>
          <div className="hr-detail">
            <PerformanceManagement />
            <h2 className="title">Performance Management</h2>
            <p className="paragraph-text">
              Manage and track employee performance with our easy-to-use tools
              for goal setting, performance agreements and performance reviews.
            </p>
          </div>
          <div className="hr-detail">
            <TimeOff />
            <h2 className="title">Paid time off</h2>
            <p className="paragraph-text">
              Employees can request for paid time off, vacations, sick leaves or
              educational leaves and get approvals all within Resource Edge. HR
              managers can equally ensure compliance.
            </p>
          </div>
        </section>
        <div className="employee-directory">
          <img src={employeeDirectory} alt="" className="img" />
        </div>
      </div>
    </main>
  );
};

export default Hr;
