import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../static/images/navbarlogo.png";
import SearchInput from "../reusable/searchInput/SearchInput";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <nav className="navbar-container">
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={() => {
          console.log("SEARCH");
        }}
      />
      <div className="navbar-buttons">
        <a href="#">الرئيسية</a>
        <a href="#aboutUs">من نحن </a>
        <a href="#legalServices">الخدمات القانونية</a>
        <a href="#">الاخبار</a>
        <a href="#">الميديا</a>
        <a href="#contactUs">تواصل معنا</a>
      </div>
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} alt="" width="180" />
      </div>
    </nav>
  );
}

export default Navbar;
