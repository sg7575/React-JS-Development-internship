import React from "react";
import "./Team.css";

const teamPhotos = [
  "https://pbs.twimg.com/profile_images/1864669997080940544/FHW63Uop_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1119619467019993089/ec9x9HLL_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1833528888368005120/4Y4hEvd5_400x400.jpg",
  "https://pbs.twimg.com/profile_images/859982100904148992/hv5soju7_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1024066946856366087/yEYZOKKH_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1556233726907953152/gfTzT4VQ_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg",
];

export default function Team() {
  return (
    <div className="team">
      <div className="team-grid">
        {teamPhotos.map((src, index) => (
          <img
            key={index}
            className="team-photo"
            src={src}
            alt={`team member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
