import React from "react";
import "./LegalServices.css";
import ItemsCarousel from "../itemsCarousel/ItemsCarousel";
import Image from "../../static/images/Rectangle.jpg";
export default function LegalServices() {
  const items = [
    <div className="container-1">
      <label>
        <img src={Image} alt="Ahmed" className="image-1" />
        <br></br>
        <h3 className="Text-1">قضايا التحكيم التجاري و الدولي</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        </p>
      </label>
    </div>,
    <div>
      <img src={Image} alt="Ahmed" className="image-1" />
    </div>,
    <div>
      <img src={Image} alt="Ahmed" className="image-1" />
    </div>,
    <div>
      <img src={Image} alt="Ahmed" className="image-1" />
    </div>,
    <div>
      <img src={Image} alt="Ahmed" className="image-1" />
    </div>,
  ];
  return (
    <>
      <div className="corousel-container">
        <ItemsCarousel items={items} />
      </div>
    </>
  );
}
