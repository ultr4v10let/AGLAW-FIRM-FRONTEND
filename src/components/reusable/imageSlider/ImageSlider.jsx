import { useState } from "react";
import ItemsCarousel from "../../itemsCarousel/ItemsCarousel";
import justiceScaleImage from "../../../static/images/woman-scale.png";
import ahmedbasha from "../../../static/images/AhmedBasha.png";
import RadialGradientContainer from "../radialGradientContainer/RadialGradientContainer";
import "./ImageSlider.css";

const ImageSlider = () => {
  const data = [
    {
      id: 1,
      name: "Ahmed Abd El-Gawad",
      title:
        "نائب رئيس حزب مستقبل وطن وأمين التنظيم,نائب رئيس مجلس إدارة قناة المحور,عضو مجلس الشيوخ",
      description: "www",
      image: ahmedbasha,
    },
    {
      id: 2,
      name: "Ahmed Abd El-Gawad",
      title:
        "نائب رئيس حزب مستقبل وطن وأمين التنظيم,نائب رئيس مجلس إدارة قناة المحور,عضو مجلس الشيوخ",
      description: "www",
      image: ahmedbasha,
    },
    {
      id: 3,
      name: "Ahmed Abd El-Gawad",
      title:
        "نائب رئيس حزب مستقبل وطن وأمين التنظيم,نائب رئيس مجلس إدارة قناة المحور,عضو مجلس الشيوخ",
      description: "www",
      image: ahmedbasha,
    },
    {
      id: 4,
      name: "Ahmed Abd El-Gawad",
      title:
        "نائب رئيس حزب مستقبل وطن وأمين التنظيم,نائب رئيس مجلس إدارة قناة المحور,عضو مجلس الشيوخ",
      description: "www",
      image: ahmedbasha,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const createImages = () => {
    const images = [];
    data.map((img) => {
      images.push(<img className="img-class" src={img.image} />);
    });
    return images;
  };

  const createTitleSection = () => {
    const titlesArray = [];
    const titles = data[currentSlide].title.split(",");
    titles.map((title) =>
      titlesArray.push(<div className="data-title-sections">{title}</div>)
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
