import React from "react";
import "./AboutUs.css";
import Card from "../reusable/Card/Card";
import justiceScaleImage from "../../static/images/woman-scale.png";
import ButtonComponent from "../reusable/buttonComponent/ButtonComponent";
import useWindowSize from "../../hooks/useWindowSize";

function AboutUs() {
  const { windowWidth } = useWindowSize();
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
            <div>
              نحن نفتخر بتقديم خدمات قانونية واستشارية عالية الجودة تلبي
              احتياجات عملائنا بكل احترافية ودقة. فتأسس مكتبنا بناءً على رؤية
              تقديم الحلول القانونية المتكاملة والمبتكرة التي تساعد عملائنا على
              تحقيق أهدافهم القانونية والتجارية بكفاءة وسرعة
            </div>

            <div>
              نحن ندرك أن فهم القانون وتطبيقه بشكل صحيح يمكن أن يكون أمرًا
              معقدًا. لذلك، نلتزم بتبسيط الأمور لعملائنا من خلال تقديم مشورة
              قانونية واضحة وشاملة. هدفنا هو أن نوفر لكم الدعم اللازم لاتخاذ
              القرارات المهمة بثقة ووعي كامل بجميع الخيارات المتاحة
            </div>
            <div>
              في مكتب أحمد عبد الجواد للمحاماة و الاستشارات القانونية ، نؤمن
              بأهمية بناء علاقات طويلة الأمد مع عملائنا، ونحرص على أن تكون جميع
              تعاملاتنا قائمة على الثقة والشفافية. نحن هنا لنكون شريككم القانوني
              الموثوق به في كل خطوة من خطوات نجاحكم
            </div>
          </div>
          <div className="consultancy-button">
            <ButtonComponent
              height={windowWidth <= 1080 && "35px"}
              fontSize={windowWidth <= 1080 && "16px"}
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
