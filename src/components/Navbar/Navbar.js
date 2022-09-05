import React from "react";
import "./navbar.scss";
import logo from "../../../src/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="navlinks">
        <li>
          <a href="#" className="navlink">
            home
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            about
          </a>
        </li>
        <li>
          <a href="#" className="navlink active">
            tours
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
