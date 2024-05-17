import React from "react";
import "./ContactUs.css";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import backgroundImage from "../../static/images/contact-us-BG.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";

function ContactUs() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <div className="conatct-us-container" id="contactUs">
      <Hero backgroundImage={backgroundImage} textColor="white" />
      <form onSubmit={formSubmitHandler} className="contact-us-form-container">
        <div className="contact-us-title">تواصل معنا</div>
        <input
          type="submit"
          style={{ position: "absolute", left: "-9999px" }}
        />
        <div className="contact-us-input-container">
          <label>الأسم</label>
          <input className="contact-us-text-input" type="text" />
        </div>
        <div className="contact-us-input-container">
          <label>البريد الإلكتروني</label>
          <input className="contact-us-text-input" type="email" />
        </div>
        <div className="contact-us-input-container">
          <label>الهاتف</label>
          <input className="contact-us-text-input" type="text" />
        </div>
        <div className="contact-us-input-container">
          <label style={{ marginBottom: "10px" }}>الرسالة</label>
          <textarea className="contact-us-text-area"></textarea>
        </div>
        <div className="contact-us-submit-container">
          <ButtonComponent
            height="40px"
            fontSize="20px"
            onClick={formSubmitHandler}
          >
            إرسال
          </ButtonComponent>
        </div>
      </form>
      <div className="contact-us-footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
