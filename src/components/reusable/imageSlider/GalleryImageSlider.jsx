import { useState } from "react";
import ItemsCarousel from "../../itemsCarousel/ItemsCarousel";
import justiceScaleImage from "../../../static/images/woman-scale.png";
import ahmedbasha from "../../../static/images/AhmedBasha.png";
import RadialGradientContainer from "../radialGradientContainer/RadialGradientContainer";
import "./GalleryImageSlider.css";

const GalleryImageSlider = ({ data }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const createImages = () => {
    const images = [];
    data.map((img) => {
      images.push(<img key={img?.id} className="img-class" src={img.image} />);
    });
    return images;
  };

  return (
    <div className="image-slider-container">
      <div
        id="whoWeAre"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <div className="legal-services-title"> Gallery </div>
      <ItemsCarousel
        items={createImages()}
        onchange={(slide) => setCurrentSlide(slide)}
      ></ItemsCarousel>
      <div className="gallery-data-section">
        <div className="data-title-description">{data[currentSlide].description}</div>
      </div>
    </div>
  );
};

export default GalleryImageSlider;
