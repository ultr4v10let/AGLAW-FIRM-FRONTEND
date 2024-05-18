import {useRef} from "react";
import "./ItemsCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ItemsCarousel({ items, onchange }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const currentItem = useRef(0);

  const calculateCurrentSlide = (action) =>{
    switch (action) {
      case "next":
        if(currentItem.current === items?.length - 1)
          currentItem.current = 0;
        else
          currentItem.current += 1
        break;
      case "prev":
        if(currentItem.current === 0)
          currentItem.current = items?.length - 1;
        else
          currentItem.current -= 1
        break;
    
      default:
        break;
    }
  }

  const detectCurrentslide = (prev, current) => {
    let action = Math.sign(prev - current);
      if(action === 1)
        calculateCurrentSlide("prev");
      else if(action === -1)
        calculateCurrentSlide("next");

  }

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      centerMode={true}
      slidesToSlide={1}
      responsive={responsive}
      focusOnSelect={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      shouldResetAutoplay={false}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-5-px"
      afterChange={(previousSlide, { currentSlide, onMove }) => {
        detectCurrentslide(previousSlide, currentSlide);
        if(onchange)
          onchange(currentItem.current);
      }}
    >
      {items.map((item, index) => (
        <div className="items-container" key={index}>{item}</div>
      ))}
    </Carousel>
  );
}

export default ItemsCarousel;
