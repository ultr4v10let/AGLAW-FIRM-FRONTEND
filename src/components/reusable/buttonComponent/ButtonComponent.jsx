import React from "react";
import "./ButtonComponent.css";

function ButtonComponent({
  children,
  onClick,
  type = "default",
  height,
  fontSize,
}) {
  return (
    <button
      className="button-component"
      style={{
        width: "100%",
        height: height ? height : "65px",
        fontSize: fontSize ? fontSize : "28px",
        cursor: "pointer",
        border: "none",
        letterSpacing: "2px",
        background:
          type === "transparent"
            ? "rgba(0, 0, 0, 0.7)"
            : "var(--gold-linear-gradient)",
        color: type === "transparent" ? "white" : "black",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
