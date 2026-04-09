import React from "react";
import "./Tomorrow.css";

export default function Tomorrow() {
  return (
    <div className="tomorrow">
      <div className="tomorrow-left">
        <div className="pink-square" />
        <h2>
          <span className="underline">Tomorrow</span> should
          <br />
          be better than today
        </h2>
        <p>
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
        <a href="/" className="read-more">
          Read more
        </a>
      </div>

      <div className="tomorrow-right">
        <div className="blob-pink" />
        <img
          className="tomorrow-image"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
          alt="tomorrow"
        />
        <div className="red-square" />
      </div>
    </div>
  );
}
