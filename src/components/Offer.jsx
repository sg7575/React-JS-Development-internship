import React from "react";
import "./Offer.css";

const offerItems = [
  {
    small: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    small: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-header">
        <h2>
          What we <span className="highlight-green">can</span>
          <br />
          <span className="underline-yellow">offer</span> you!
        </h2>
      </div>

      <div className="offer-list">
        {offerItems.map((item, index) => (
          <div className="offer-item" key={index}>
            <p className="offer-small">{item.small}</p>
            <h3 className="offer-title">{item.title}</h3>
            <span className="offer-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
