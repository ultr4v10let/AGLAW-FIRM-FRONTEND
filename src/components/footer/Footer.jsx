import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../static/images/navbarlogo.png";
import TextField from "../reusable/textfield/TextField";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="footer-logo-container">
          <img className="footer-logo-desktop" src={logo} alt="" />
        </div>
        <div className="footer-address-content">
          <div>
            Head Office Address: 358 90th street 3rd level beside hedaya store infront of concord plaza
          </div>
          <div>
            New Cairo, Egypt
          </div>
          <div>
            Email: info@aglaw-firm.com
          </div>
          <div>
            Phone Number : +201022588888,  +201080988888
          </div>
        </div>
        {/* <div className="footer-social-media">
          <a href="https://facebook.com" className="button facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" className="button instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" className="button linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
