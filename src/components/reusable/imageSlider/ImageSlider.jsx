import { useState } from "react";
import ItemsCarousel from "../../itemsCarousel/ItemsCarousel";
import "./ImageSlider.css";

const ImageSlider = ({ data }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const createImages = () => {
    const images = [];
    data.map((img) => {
      images.push(<img key={img?.id} className="img-class" src={img.image} />);
    });
    return images;
  };

  const createTitleSection = () => {
    const titlesArray = [];
    const titles = data[currentSlide].title.split(",");
    titles.map((title, index) =>
      titlesArray.push(<div key={index} className="data-title-sections">{title}</div>)
    );
    return titlesArray;
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
      <div className="teammember-title">أعضاء الفريق</div>
      <ItemsCarousel
        items={createImages()}
        onchange={(slide) => setCurrentSlide(slide)}
      ></ItemsCarousel>
      <div className="data-section">
        <div className="data-title">{data[currentSlide].name}</div>
        <div className="data-title-description">{createTitleSection()}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
