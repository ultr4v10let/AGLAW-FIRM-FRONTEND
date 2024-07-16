import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import LegalServices from "../components/legalServices/LegalServices";
import AboutUs from "../components/aboutUs/AboutUs";
import ImageSlider from "../components/reusable/imageSlider/ImageSlider";
import GalleryImageSlider from "../components/reusable/imageSlider/GalleryImageSlider";
import Clients from "../components/clients/Clients";
import ContactUs from "../components/contactUs/ContactUs";
import {
  clientsAPI,
  legalServicesAPI,
  teamMembersAPI,
  newsAPI,
  galleryAPI,
} from "../services/Services";
import RadialGradientContainer from "../components/reusable/radialGradientContainer/RadialGradientContainer";

function Home() {
  const [clients, setClients] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [legalServices, setLegalServices] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);

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
      setGallery(res.data);
    });
  }, []);

  const ourServicesButtonOnClick = (e) => {
    e.preventDefault();
    window.location.href='#legalServices';
    }

  return (
    <div>
      <Navbar />
      <Hero buttonText="Our Services" withNav={true} onButtonClick={ourServicesButtonOnClick} />
      <RadialGradientContainer side="left">
        <AboutUs />
        {legalServices.length > 0 && <LegalServices data={legalServices} />}
        {teamMembers.length > 0 && <ImageSlider data={teamMembers} />}
        {gallery.length > 0 && <GalleryImageSlider data={gallery} />}
        {clients.length > 0 && <Clients data={clients} />}
        <ContactUs />
      </RadialGradientContainer>
    </div>
  );
}

export default Home;
