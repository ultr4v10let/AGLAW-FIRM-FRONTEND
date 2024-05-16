import React from "react";
import "./ItemsCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ItemsCarousel({ items }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      centerMode={true}
      slidesToSlide={1}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-5-px"
    >
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </Carousel>
  );
}

export default ItemsCarousel;
