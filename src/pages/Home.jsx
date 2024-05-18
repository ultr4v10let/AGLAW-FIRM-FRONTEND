import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import LegalServices from "../components/legalServices/LegalServices";
import AboutUs from "../components/aboutUs/AboutUs";
import ImageSlider from "../components/reusable/imageSlider/ImageSlider";
import ContactUs from "../components/contactUs/ContactUs";
import RadialGradientContainer from "../components/reusable/radialGradientContainer/RadialGradientContainer";

import { clientsAPI } from "../services/clients";
import { legalServicesAPI } from "../services/legalServices";
import { teamMembersAPI } from "../services/teamMembers";
import { newsAPI } from "../services/news";
import { galleryAPI } from "../services/gallery";

function Home() {
  const [clients, setClients] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [legalServices, setLegalServices] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    clientsAPI().then((res) => {
      setClients(res.data);
    });

    legalServicesAPI().then((res) => {
      setLegalServices(res.data);
    });

    teamMembersAPI().then((res) => {
      setTeamMembers(res.data);
    });

    newsAPI().then((res) => {
      setNews(res.data);
    });

    galleryAPI().then((res) => {
      setNews(res.data);
    });

  }, []);

  return (
    <div>
      <Navbar />
      <Hero buttonText="Our Services" withNav={true} />
      <RadialGradientContainer side="left">
        <AboutUs />
        <LegalServices />
        <ImageSlider />
      </RadialGradientContainer>
      <ContactUs />
    </div>
  );
}

export default Home;
