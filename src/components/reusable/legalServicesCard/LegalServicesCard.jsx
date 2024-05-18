import React from "react";

function LegalServicesCard({ icon, title, description }) {
  return (
    <div className="container-1">
      <label>
        <img src={icon} alt="icon" className="image-1" />
        <br></br>
        <h3 className="Text-1">{title}</h3>
        <p>{description}</p>
      </label>
    </div>
  );
}

export default LegalServicesCard;
