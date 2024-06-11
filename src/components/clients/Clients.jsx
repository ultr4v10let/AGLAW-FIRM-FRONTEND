import React from "react";
import "./Clients.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
export default function Clients(data) {
  const carouselConfig = data.data

  const items = carouselConfig.map((configItem) => (
    <LegalServicesCard
      icon={configItem.image}
      title={configItem.name}
      description={configItem.description}
    />
  ));

  return (
    <div className="clients-corousel-container">
      <div
        id="clients"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <div className="clients-title">عملائنا</div>
      <ItemsCarousel items={items} numberOfDeskTopItems={3} />
    </div>
  );
}
