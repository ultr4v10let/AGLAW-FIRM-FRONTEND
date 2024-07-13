import React from "react";
import "./Clients.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
import useWindowSize from "../../hooks/useWindowSize";
export default function Clients(data) {
  const { windowWidth } = useWindowSize();
  const carouselConfig = data.data;

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
      <ItemsCarousel
        items={items}
        numberOfDeskTopItems={windowWidth <= 1080 ? 1 : 3}
      />
      {/* This is am empty div just for mobile redirection */}
      <div id="m-contactUs"></div>
    </div>
  );
}
