import React from "react";
import "./LegalServices.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
import useWindowSize from "../../hooks/useWindowSize";
export default function LegalServices(data) {
  const { windowWidth } = useWindowSize();
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
      <ItemsCarousel
        items={items}
        numberOfDeskTopItems={windowWidth <= 1080 ? 1 : 3}
      />
    </div>
  );
}
