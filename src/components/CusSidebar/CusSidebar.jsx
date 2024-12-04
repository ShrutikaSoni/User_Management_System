import React, { useState } from "react";
import "./CusSidebar.css";
import "boxicons/css/boxicons.min.css";


const CusSidebar = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo-details">
        <img src='MobillwithoutBg1.png' alt="Logo" />
      </div>
      <br />

      <ul className="nav-links">

        <li>
          <a href="/customer">
            <i className="bx bxs-user-account"></i>
            <span className="links_name">Users</span>
          </a>
        </li>

        <li>
          <a href="/">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>

    </div>
  );
};

export default CusSidebar;
