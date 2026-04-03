import React from "react";
import "./Testimonials.css";

const leftPhotos = [
  {
    src: "https://pbs.twimg.com/profile_images/1864669997080940544/FHW63Uop_400x400.jpg",
    size: "large",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1119619467019993089/ec9x9HLL_400x400.jpg",
    size: "small",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1833528888368005120/4Y4hEvd5_400x400.jpg",
    size: "medium",
  },
];

const rightPhotos = [
  {
    src: "https://pbs.twimg.com/profile_images/859982100904148992/hv5soju7_400x400.jpg",
    size: "small",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
    size: "medium",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg",
    size: "large",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testi-side testi-left">
        {leftPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`customer ${index + 1}`}
            className={`testi-photo ${photo.size}`}
          />
        ))}
      </div>

      <div className="testi-center">
        <h2>
          What our customer <br />
          says <span className="underline-yellow">About Us</span>
        </h2>
        <div className="testi-card">
          <span className="quote-open">"</span>
          <p>
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable.
          </p>
          <span className="quote-close">"</span>
        </div>
      </div>

      <div className="testi-side testi-right">
        {rightPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`customer ${index + 1}`}
            className={`testi-photo ${photo.size}`}
          />
        ))}
      </div>
    </div>
  );
}
