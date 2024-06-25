import { useState, useEffect } from "react";
import "./Hero.css";
import justiceImage from "../../static/images/justice-image.png";
import justiceImageMobile from "../../static/images/justice-mobile.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";

function Hero({
  backgroundImage = justiceImage,
  mobileBackground = justiceImageMobile,
  buttonText,
  onButtonClick = () => {},
  textColor = "black",
  withNav = false,
}) {
  const getWindowDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window;
    return {
      height,
      width,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="hero-container"
      style={{
        height: withNav
          ? `calc(${windowDimensions.height}px - ${
              windowDimensions.width <= 1080 ? "70px" : "100px"
            })`
          : `calc(${windowDimensions.height}px)`,
        backgroundImage: `url(${
          windowDimensions.width <= 1080 ? mobileBackground : backgroundImage
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
              height={windowDimensions.width <= 1080 && "35px"}
              fontSize={windowDimensions.width <= 1080 && "16px"}
              onClick={onButtonClick}
            >
              Our Service
            </ButtonComponent>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
