import React from "react";
import travelIcon from "../assets/travel.svg";
import assetIcon from "../assets/asset.svg";
import travelDetailsImg from "../assets/travel-details.svg";
import voucherIcon from "../assets/vouchers.svg";
import payrollIcon from "../assets/payroll.svg";
import payrollImg from "../assets/payroll-details.svg";
import unnLogo from "../assets/unn-img.svg";
import tenenceLogo from "../assets/tenence-img.svg";
import genesysLogo from "../assets/genesys-img.svg";
import privateEstateLogo from "../assets/private-estate-img.svg";

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
            <img src={travelIcon} alt="" />
            <h2 className="title">Travel & Logistics</h2>
            <p className="paragraph-text">
              Make travel requests, get approvals, and have access to travel
              information.
            </p>
          </div>
          <div className="travel-section">
            <img src={assetIcon} alt="" />
            <h2 className="title">Asset Management</h2>
            <p className="paragraph-text">
              Manage the acquisition, assignment, and disposition of assets
              seamlessly.
            </p>
          </div>
        </section>
        <section className="travel-details-img">
          <img src={travelDetailsImg} alt="" className="img" />
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
            <img src={voucherIcon} alt="" />
            <h2 className="title">RE Vouchers</h2>
            <p className="paragraph-text">
              Track and manage expenditure for multiple teams across your
              organisation using Resource Edge Vouchers.
            </p>
          </div>
          <div className="travel-section">
            <img src={payrollIcon} alt="" />
            <h2 className="title">Payroll</h2>
            <p className="paragraph-text">
              Our easy to use systems takes away the pain of managing complex
              payrolls for organisations of all sizes.
            </p>
          </div>
        </section>
        <section className="travel-details-img">
          <img src={payrollImg} alt="" className="img" />
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
