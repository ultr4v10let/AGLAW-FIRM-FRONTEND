import React from "react";
import "./LegalServices.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
export default function LegalServices(data) {
  const carouselConfig = data.data;

  const items = carouselConfig.map((configItem) => (
    <LegalServicesCard
      icon={configItem.image}
      title={configItem.title}
      description={configItem.description}
    />
  ));

  return (
    <div className="corousel-container">
      <div
        id="legalServices"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <div className="legal-services-title">الخدمات القانونية</div>
      <ItemsCarousel items={items} numberOfDeskTopItems={3} />
    </div>
  );
}
