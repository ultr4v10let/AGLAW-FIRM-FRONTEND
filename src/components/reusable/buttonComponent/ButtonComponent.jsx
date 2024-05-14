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
        height: size === "compact" ? "45px" : "55px",
        fontSize: size === "compact" ? "24px" : "28px",
        cursor: "pointer",
        fontFamily: "Kanit",
        border: "none",
        letterSpacing: "2px",
        background:
          type === "transparent"
            ? "rgba(0, 0, 0, 0.7)"
            : "linear-gradient(90deg, rgba(175,137,87,1) 20%, rgba(255,255,255,1) 50%, rgba(175,137,87,1) 80%)",
        color: type === "transparent" ? "white" : "black",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
