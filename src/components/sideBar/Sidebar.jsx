import React, { useState } from "react";
import "./Sidebar.css";
import "boxicons/css/boxicons.min.css";


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo-details">
        <img src='MobillwithoutBg1.png' alt="Logo" />
      </div>
      <br />

      <ul className="nav-links">

        <li>
          <a href="/users">
            <i className="bx bxs-user-account"></i>
            <span className="links_name">Users</span>
          </a>
        </li>

        <li>
          <a href="/permissions">
            <i className="bx bx-cog"></i>
            <span className="links_name">Permissions</span>
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

export default Sidebar;
