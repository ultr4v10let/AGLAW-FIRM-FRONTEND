import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import TextField from "../reusable/textfield/TextField";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis orci eu ante cursus, quis molestie justo pulvinar. Aliquam
          commodo felis vel euismod convallis. Donec consectetur placerat eros.
        </div>
        <div className="footer-social-media">
          <a href="https://facebook.com" className="button facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" className="button instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" className="button twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" className="button linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-footer-content">
          Surround yourself with beauty
        </div>
        <div className="lower-footer-textinput-button-container">
          <TextField
            value={email}
            onChange={handleEmailChange}
            placeHolder=" Email Address "
          />
          <div className="button-container">
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="lower-footer-content2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis orci eu ante cursus, quis molestie justo pulvinar. quis
          molestie justo pulvinar. Aliquam commodo felis vel euismod convallis.
          Donec consectetur placerat eros.
        </div>
      </div>
    </div>
  );
};

export default Footer;
