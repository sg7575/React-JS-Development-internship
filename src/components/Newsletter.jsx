import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-box">
        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p>To make your stay special and even more memorable</p>
        <button className="subscribe-btn">Subscribe Now</button>
      </div>
      <div className="shape-purple-footer" />
    </div>
  );
}
