import React from "react";
import "./NavItem.css";

export default function NavItem({ title }) {
  return (
    <div>
      <div className="navitem-container">
        <p className="navitem">{title}</p>
      </div>
    </div>
  );
}
