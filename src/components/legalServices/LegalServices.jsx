import React from "react";
import "./LegalServices.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import Image from "../../static/images/Rectangle.jpg";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
import RadialGradientContainer from "../reusable/radialGradientContainer/RadialGradientContainer";
export default function LegalServices() {
  const carouselConfig = [
    {
      image: Image,
      title: "القضايا الجنائية",
      description: "lorem impsum tekh bekh",
    },
    {
      image: Image,
      title: "القضايا الجنائية",
      description: "lorem impsum tekh bekh",
    },
  ];

  const items = carouselConfig.map((configItem) => (
    <LegalServicesCard
      icon={configItem.image}
      title={configItem.title}
      description={configItem.description}
    />
  ));

  return (
    <RadialGradientContainer side="right">
      <div className="corousel-container">
        <ItemsCarousel items={items} />
      </div>
    </RadialGradientContainer>
  );
}
