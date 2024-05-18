import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import LegalServices from "../components/legalServices/LegalServices";
import AboutUs from "../components/aboutUs/AboutUs";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LegalServices />
      <AboutUs />
    </div>
  );
}

export default Home;
