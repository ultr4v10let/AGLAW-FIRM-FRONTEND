import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import LegalServices from "../components/legalServices/LegalServices";
import AboutUs from "../components/aboutUs/AboutUs";
import ImageSlider from "../components/reusable/imageSlider/ImageSlider";
import ContactUs from "../components/contactUs/ContactUs";
import { clientsAPI, legalServicesAPI, teamMembersAPI, newsAPI, galleryAPI} from "../services/Services"
import RadialGradientContainer from "../components/reusable/radialGradientContainer/RadialGradientContainer";

function Home() {
  const [clients, setClients] = useState();
  const [teamMembers, setTeamMembers] = useState([]);
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
        {teamMembers.length > 0 && <ImageSlider  data={teamMembers}/>}
      </RadialGradientContainer>
      <ContactUs />
    </div>
  );
}

export default Home;
