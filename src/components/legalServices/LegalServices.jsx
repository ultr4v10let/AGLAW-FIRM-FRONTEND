import React from "react";
import "./LegalServices.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import criminalIcon from "../../static/icons/criminal.png";
import commercialIcon from "../../static/icons/commercial.png";
import familyIcon from "../../static/icons/family.png";
import globeIcon from "../../static/icons/globe.png";
import LegalServicesCard from "../reusable/legalServicesCard/LegalServicesCard";
export default function LegalServices() {
  const carouselConfig = [
    {
      image: criminalIcon,
      title: "القضايا الجنائية",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae error officia veniam eligendi odit sed fugit asperiores ipsa! Minus esse culpa adipisci recusandae fugiat, et laborum autem deserunt ea delectus!",
    },
    {
      image: commercialIcon,
      title: "قضايا تجارية وتأسيس شركات",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae error officia veniam eligendi odit sed fugit asperiores ipsa! Minus esse culpa adipisci recusandae fugiat, et laborum autem deserunt ea delectus!",
    },
    {
      image: globeIcon,
      title: "قضايا التحكيم التجاري و الدولي",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae error officia veniam eligendi odit sed fugit asperiores ipsa! Minus esse culpa adipisci recusandae fugiat, et laborum autem deserunt ea delectus!",
    },
    {
      image: familyIcon,
      title: "دعاوي محاكم الاسرة والمحاكم الإقتصادية",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae error officia veniam eligendi odit sed fugit asperiores ipsa! Minus esse culpa adipisci recusandae fugiat, et laborum autem deserunt ea delectus!",
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
    <div className="corousel-container">
      <div
        id="legalServices"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <div className="legal-services-title">الخدمات القانونية</div>
      <ItemsCarousel items={items} />
    </div>
  );
}
