import React from "react";
import "../style/card.css";
import { Link } from "react-router-dom";
// import image1 from "../photos/image1.png";

export default function Card({ img, name, price }) {
  return (
    <Link to="/Product" className="link">
      <div className="card-container">
        <div className="image-container">
          <img src={img} alt="image1" />
        </div>
        <div className="detail-container">
          <p className="detail-name">{name}</p>
          <p className="detail-price">{price}</p>
        </div>
      </div>
    </Link>
  );
}
