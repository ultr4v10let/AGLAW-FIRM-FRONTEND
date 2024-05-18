import React, { useRef } from "react";
import "./ContactUs.css";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import backgroundImage from "../../static/images/contact-us-BG.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0e1uwaq", "template_d51lhfk", form.current, {
        publicKey: "FB5W43K1EhcwU2HRw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Error: something went wrong while trying to send your email, please try again later."
          );
        }
      );
  };
  return (
    <div className="conatct-us-container">
      <div
        id="contactUs"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <Hero
        backgroundImage={backgroundImage}
        textColor="white"
        withNav={true}
      />
      <form
        ref={form}
        onSubmit={formSubmitHandler}
        className="contact-us-form-container"
      >
        <div className="contact-us-title">تواصل معنا</div>
        <div className="contact-us-input-container">
          <label>الأسم</label>
          <input className="contact-us-text-input" type="text" name="name" />
        </div>
        <div className="contact-us-input-container">
          <label>البريد الإلكتروني</label>
          <input className="contact-us-text-input" type="email" name="email" />
        </div>
        <div className="contact-us-input-container">
          <label>الهاتف</label>
          <input className="contact-us-text-input" type="text" name="mobile" />
        </div>
        <div className="contact-us-input-container">
          <label style={{ marginBottom: "10px" }}>الرسالة</label>
          <textarea className="contact-us-text-area" name="message" />
        </div>
        <div className="contact-us-submit-container">
          <ButtonComponent
            height="40px"
            fontSize="20px"
            type="submit"
            value="send"
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
