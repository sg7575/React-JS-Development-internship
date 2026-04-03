import React from "react";
import "./Progress.css";

export default function Progress() {
  return (
    <div className="progress-section">
      <div className="progress-left">
        <div className="triangle" />
        <img
          className="progress-image"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
          alt="progress"
        />
      </div>

      <div className="progress-right">
        <h2>
          <span className="underline-green">See how</span> we can help you
          progress
        </h2>
        <p>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>
        <a href="#" className="read-more">
          Read more
        </a>
      </div>
    </div>
  );
}
