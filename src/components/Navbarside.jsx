import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarside.css';


const Navbarside = () => {
  return (
        
    <header>
      <nav className="navbar">
        <a className="logo" href="#">Mobill<span>.</span></a>
        <ul className="menu-links">
          <li><Link to="/login">SIGN IN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbarside;
