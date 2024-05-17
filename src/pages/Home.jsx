import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import ItemsCarousel from "../components/itemsCarousel/ItemsCarousel";
import AboutUs from "../components/aboutUs/AboutUs";

import { clientsAPI } from "../services/clients";
import { legalServicesAPI } from "../services/legalServices";
import { teamMembersAPI } from "../services/teamMembers";
import { newsAPI } from "../services/news";

import ContactUs from "../components/contactUs/ContactUs";

function Home() {
  const [clients, setClients] = useState()
  const [teamMembers, setTeamMembers] = useState()
  const [legalServices, setLegalServices] = useState()
  const [news, setNews] = useState()

  const items = [
    <div className="eshta">Item 1</div>,
    <div className="eshta">Item 2</div>,
    <div className="eshta">Item 3</div>,
    <div className="eshta">Item 4</div>,
    <div className="eshta">Item 5</div>,
    <div className="eshta">Item 6</div>,
    <div className="eshta">Item 7</div>,
    <div className="eshta">Item 8</div>,
  ];

  useEffect(
    ()=>{
      clientsAPI().then(
        (res) => {
          setClients(res.data)
        }
      )

      legalServicesAPI().then(
        (res) => {
          setLegalServices(res.data)
        }
      )

      teamMembersAPI().then(
        (res) => {
          setTeamMembers(res.data)
        }
      )

      newsAPI().then(
        (res) => {
          setNews(res.data)
        }
      )
    }
  ,[])

  return (
    <div>
      <Navbar />
      <Hero buttonText="Our Services" withNav={true} />
      <AboutUs />
      <ContactUs />
      {/* <ItemsCarousel items={items}/> */}
      {/* <h1>HomePage</h1> */}
    </div>
  );
}

export default Home;
