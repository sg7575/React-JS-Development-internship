import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h2>Elementum</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Studio</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">FAQs</a>
        </li>
      </ul>
      <div className="menu-icon">&#9776;</div>
    </div>
  );
}
