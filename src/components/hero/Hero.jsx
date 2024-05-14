import React from "react";
import "./Hero.css";
import justiceImage from "../../static/images/justice-image.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";

function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        height: `calc(${window.innerHeight}px - 100px)`,
        backgroundImage: `url(${justiceImage})`,
      }}
    >
      <div className="hero-text-container">
        <div className="hero-text-title">AG LAW FIRM</div>
        <div className="hero-text-subtitle">
          Your Partners in Strategic Solutions
        </div>
        <div className="hero-button-container">
          <ButtonComponent type="transparent">Our Service</ButtonComponent>
        </div>
      </div>
    </div>
  );
}

export default Hero;
