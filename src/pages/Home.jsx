import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ItemsCarousel from "../components/itemsCarousel/ItemsCarousel";

function Home() {
  // const items = [
  //   <div className="eshta">Item 1</div>,
  //   <div className="eshta">Item 2</div>,
  //   <div className="eshta">Item 3</div>,
  //   <div className="eshta">Item 4</div>,
  //   <div className="eshta">Item 5</div>,
  //   <div className="eshta">Item 6</div>,
  //   <div className="eshta">Item 7</div>,
  //   <div className="eshta">Item 8</div>
  // ]
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <ItemsCarousel items={items}/> */}
      {/* <h1>HomePage</h1> */}
    </div>
  );
}

export default Home;
