import React from "react";
import "./Card.css";

function Card({ children }) {
  return <div className="service-card-container">{children}</div>;
}

export default Card;
