import React from "react";
import "./ButtonComponent.css";

function ButtonComponent({
  children,
  onClick,
  size = "default",
  type = "default",
}) {
  return (
    <button
      className="button-component"
      style={{
        width: "100%",
        height: size === "compact" ? "55px" : "65px",
        fontSize: size === "compact" ? "24px" : "28px",
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
