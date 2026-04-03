import React from "react";
import "./Footer.css";

export default function Header() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <ul>
            <li>1499w Fulton site, STE 20 Chicago, IL 63661</li>
            <li>(123) 456789000</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
}
