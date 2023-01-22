import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">CodingMaster</div>
      <div className="navbar-right">
        <NavItem title="Home" />
        <NavItem title="Blog" />
        <NavItem title="Contact Us" />
        <NavItem title="Login/Signup " />
      </div>
    </div>
  );
}
