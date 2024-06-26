import { useState, useEffect } from "react";
import "./AboutUs.css";
import Card from "../reusable/Card/Card";
import justiceScaleImage from "../../static/images/woman-scale.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";

function AboutUs() {
  const getWindowDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window;
    return {
      height,
      width,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="about-us-container">
      <div
        id="aboutUs"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <div className="about-us-title">AG Law Firm</div>
      <div className="about-us-description">
        {" "}
        هي شركة محاماة متميزة تقدم خدمات قانونية شاملة لمجموعة متنوعة من
        العملاء. يستفيد محامونا المتميزون من معرفتهم القانونية الواسعة لتقديم
        التوجيه الاستراتيجي والحلول المخصصة حتى للتحديات الأكثر تعقيدًا. نحن
        ملتزمون ببناء علاقات قوية مع العملاء، وتعزيز الشراكات المبنية على الثقة
        والشفافية والتفاني المشترك لتحقيق النجاح.
      </div>
      <div className="about-us-cards-container">
        <Card>
          <div className="about-us-card-text-container">
            <div className="about-us-card-text-1">استشارات</div>
            <div className="about-us-card-text-2">قانونية</div>
          </div>
        </Card>
        <Card>
          <div className="about-us-card-text-container">
            <div className="about-us-card-text-1">مكتب محاماة</div>
            <div className="about-us-card-text-2">ذو خبرة اكثر من 30 عاما</div>
          </div>
        </Card>
        <Card>
          <div className="about-us-card-text-container">
            <div className="about-us-card-text-1">نبذة عن</div>
            <div className="about-us-card-text-2">المستشارين</div>
          </div>
        </Card>
      </div>
      <div className="consultancy-container">
        <div className="consultancy-container-left">
          <div className="consultancy-text">
            تلتزم شركة AG Elite Law Counsel بشدة بفهم احتياجات عملائنا وتحدياتهم
            الفريدة. نحن نعزز النهج التعاوني، ونعمل بشكل وثيق مع عملائنا لتطوير
            استراتيجيات قانونية مخصصة تحقق النتائج المرجوة. يجلب محامونا ذوو
            الخبرة ثروة من الخبرة في مجالات الممارسة المتنوعة.
          </div>
          <div className="consultancy-button">
            <ButtonComponent
              height={windowDimensions.width <= 1080 && "35px"}
              fontSize={windowDimensions.width <= 1080 && "16px"}
            >
              <strong>اطلب استشارة فورية</strong>
            </ButtonComponent>
          </div>
        </div>
        <div className="consultancy-container-right">
          <img
            className="consultancy-container-img"
            src={justiceScaleImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
