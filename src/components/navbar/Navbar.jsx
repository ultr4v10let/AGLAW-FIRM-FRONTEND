import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../static/images/navbarlogo.png";
import SearchInput from "../reusable/searchInput/SearchInput";
import logoSmall from "../../static/images/ag-law-logo-small.png";
import closeIcon from "../../static/icons/close-icon.svg";
import hamburgerIcon from "../../static/icons/hamburger-icon.svg";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarToggleHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  const mobileNavbarItems = [
    {
      title: "الرئيسية",
      link: "#",
      withDivider: true,
    },
    {
      title: "من نحن ",
      link: "#whoWeAre",
      withDivider: true,
    },
    {
      title: "الخدمات القانونية",
      link: "#legalServices",
      withDivider: true,
    },
    {
      title: "الاخبار",
      link: "#",
      withDivider: true,
    },
    {
      title: "الميديا",
      link: "#gallery",
      withDivider: true,
    },
    {
      title: "تواصل معنا",
      link: "#m-contactUs",
      withDivider: false,
    },
  ];

  //Disable scrolling when hamburger menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  const renderMobileMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.title} onClick={navbarToggleHandler}>
        <li>
          <a href={item.link}>{item.title}</a>
        </li>
        {item.withDivider && <div className="mobile-menu-divider" />}
      </div>
    ));
  };
  return (
    <>
      <nav className="navbar-container">
        {/* <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearch={() => {
            console.log("SEARCH");
          }}
        /> */}
        <div className="navbar-buttons">
          <a href="#">الرئيسية</a>
          <a href="#whoWeAre">من نحن </a>
          <a href="#legalServices">الخدمات القانونية</a>
          {/* <a href="#">الاخبار</a> */}
          <a href="#gallery">الميديا</a>
          <a href="#contactUs">تواصل معنا</a>
        </div>
        <div className="navbar-logo-container">
          <img className="navbar-logo-desktop" src={logo} alt="" />
        </div>
      </nav>
      <div className="navbar-logo-container-mobile-controls">
        <img
          className="navbar-logo"
          src={logoSmall}
          alt="logo"
          width={40}
          height={43}
        />
        <img
          className="navbar-logo"
          src={hamburgerIcon}
          alt="navbar-icon"
          width={26}
          height={24}
          onClick={navbarToggleHandler}
        />
      </div>
      <nav
        className={`navbar-container-mobile ${
          isNavOpen ? "hamburgerOpened" : "hamburgerClosed"
        }`}
      >
        <div className="navbar-logo-container-mobile">
          <img
            className="navbar-logo"
            src={closeIcon}
            alt="nav icon"
            width={22}
            height={22}
            onClick={navbarToggleHandler}
            style={{ marginLeft: "auto" }}
          />
        </div>
        <div className="navbar-mobile-search-container">
          <SearchInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSearch={() => {
              console.log("SEARCH");
            }}
          />
        </div>
        <div className="navbar-buttons-mobile">
          {renderMobileMenuItems(mobileNavbarItems)}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
