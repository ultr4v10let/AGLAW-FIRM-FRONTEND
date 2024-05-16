import React from "react";
import golfPatternBG from "../../../static/images/gold-pattern.png";

function RadialGradientContainer({ children, side = "right" }) {
  return (
    <div
      style={{
        background:
          side === "left"
            ? ` radial-gradient(700px at 0% 0% ,var(--gold) -100%, black)`
            : ` radial-gradient(700px at 100% 0% ,var(--gold) -100%, black)`,
        position: "relative",
        zIndex: "0",
      }}
      className="test"
    >
      <div
        style={{
          backgroundImage: `url(${golfPatternBG})`,
          position: "absolute",
          zIndex: "-1",
          top: "0px",
          right: "0px",
          width: "100%",
          height: "100%",
          backgroundSize: "fill",
          backgroundPosition: "center",
          transform: side === "left" ? "scaleX(-1)" : "scaleX(1)",
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
}

export default RadialGradientContainer;
