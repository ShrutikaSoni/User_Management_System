import React from "react";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  return (
    <section className="home-section">
      <nav>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="profile-details">
          <img src="adminLogo.png" alt="Admin Logo" />
          <span className="admin_name">Admin</span>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
