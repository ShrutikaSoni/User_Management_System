import React from "react";
import "./CustNavbar.css";
import "boxicons/css/boxicons.min.css";

const CustNavbar = () => {
  return (
    <section className="home-section">
      <nav>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="profile-details">
          <img src="adminLogo.png" alt="Admin Logo" />
          <span className="admin_name">Customer</span>
        </div>
      </nav>
    </section>
  );
};

export default CustNavbar;
