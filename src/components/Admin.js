import React from "react";
import unnLogo from "../assets/unn-img.svg";
import tenenceLogo from "../assets/tenence-img.svg";
import genesysLogo from "../assets/genesys-img.svg";
import privateEstateLogo from "../assets/private-estate-img.svg";
import { Travel, Asset, Vouchers, Payroll } from "../assets";
import travelDetails from "../assets/travel-details.svg";
import payrollDetails from "../assets/payroll-details.svg";

const Admin = () => {
  return (
    <main className="admin-container">
      <div className="section-center">
        <section className="admin-header">
          <div className="admin-section">
            <h2 className="title">Admin & Logistics</h2>
            <p className="paragraph-text">
              Manage and track company assets as well as logistics for
              travelling employees
            </p>
          </div>
          <div className="travel-section">
            <Travel />

            <h2 className="title">Travel & Logistics</h2>
            <p className="paragraph-text">
              Make travel requests, get approvals, and have access to travel
              information.
            </p>
          </div>
          <div className="travel-section">
            <Asset />
            <h2 className="title">Asset Management</h2>
            <p className="paragraph-text">
              Manage the acquisition, assignment, and disposition of assets
              seamlessly.
            </p>
          </div>
        </section>
        <section className="travel-details-img">
          <img src={travelDetails} alt="travel details" className="img" />
        </section>
        <section className="admin-header">
          <div className="admin-section">
            <h2 className="title">Finance</h2>
            <p className="paragraph-text">
              Generate invoices, track expenditure, and manage complex payrolls
              for multiple teams and companies.
            </p>
          </div>
          <div className="travel-section">
            <Vouchers />
            <h2 className="title">RE Vouchers</h2>
            <p className="paragraph-text">
              Track and manage expenditure for multiple teams across your
              organisation using Resource Edge Vouchers.
            </p>
          </div>
          <div className="travel-section">
            <Payroll />

            <h2 className="title">Payroll</h2>
            <p className="paragraph-text">
              Our easy to use systems takes away the pain of managing complex
              payrolls for organisations of all sizes.
            </p>
          </div>
        </section>
        <section className="travel-details-img">
          <img src={payrollDetails} alt="" className="img" />
        </section>
        <section className="company-logo">
          <div>
            <img src={unnLogo} alt="" />
            <img src={genesysLogo} alt="" />
          </div>
          <div>
            <img src={privateEstateLogo} alt="" />
            <img src={tenenceLogo} alt="" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Admin;
