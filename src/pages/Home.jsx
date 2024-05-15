import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Card from "../components/reusable/Card/Card";
import Footer from "../components/footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <br />
      <br />
      <br />
      <Card></Card>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
