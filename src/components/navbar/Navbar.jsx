import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../static/images/navbar-logo.svg";
import SearchInput from "../reusable/searchInput/SearchInput";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} alt="" width="180" />
      </div>
      <div className="navbar-buttons">
        <a href="#">تواصل معنا</a>
        <a href="#">الميديا</a>
        <a href="#">الاخبار</a>
        <a href="#">الخدمات القانونية</a>
        <a href="#">من نحن</a>
        <a href="#">الرئيسية</a>
      </div>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={() => {
          console.log("SEARCH");
        }}
      />
    </nav>
  );
}

export default Navbar;
