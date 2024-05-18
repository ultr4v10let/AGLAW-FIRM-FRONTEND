import React from "react";
import "./ButtonComponent.css";

function ButtonComponent({
  children,
  onClick,
  style = "default",
  height,
  fontSize,
  type = "text",
}) {
  return (
    <button
      className="button-component"
      type={type}
      style={{
        width: "100%",
        height: height ? height : "65px",
        fontSize: fontSize ? fontSize : "28px",
        cursor: "pointer",
        border: "none",
        letterSpacing: "2px",
        background:
          style === "transparent"
            ? "rgba(0, 0, 0, 0.7)"
            : "var(--gold-linear-gradient)",
        color: style === "transparent" ? "white" : "black",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
