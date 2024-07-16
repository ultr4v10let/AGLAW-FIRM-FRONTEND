import React from "react";
import "./Hero.css";
import justiceImage from "../../static/images/justice-image.png";
import justiceImageMobile from "../../static/images/justice-mobile.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";
import useWindowSize from "../../hooks/useWindowSize";

function Hero({
  backgroundImage = justiceImage,
  mobileBackground = justiceImageMobile,
  buttonText,
  onButtonClick = () => {},
  textColor = "black",
  withNav = false,
}) {
  const { windowWidth, windowHeight } = useWindowSize();
  return (
    <div
      className="hero-container"
      style={{
        height: withNav
          ? `calc(${windowHeight}px - ${
              windowWidth <= 1080 ? "70px" : "100px"
            })`
          : `calc(${windowHeight}px)`,
        backgroundImage: `url(${
          windowWidth <= 1080 ? mobileBackground : backgroundImage
        })`,
      }}
    >
      <div className="hero-text-container" style={{ color: textColor }}>
        <div className="hero-text-title">AG LAW FIRM</div>
        <div className="hero-text-subtitle">
          Your Partners in Strategic Solutions
        </div>
        {buttonText && (
          <div className="hero-button-container">
            <ButtonComponent
              style="transparent"
              height={windowWidth <= 1080 && "35px"}
              fontSize={windowWidth <= 1080 && "16px"}
              onClick={onButtonClick}
            >
              Our Services
            </ButtonComponent>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
