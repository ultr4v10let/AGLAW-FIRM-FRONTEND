import React from "react";
import "./SearchInput.css";
import searchIcon from "../../../static/icons/search.svg";

function SearchInput({ inputValue, setInputValue, onSearch }) {
  const inputOnChangeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <div className="search-input-container">
      <input type="text" value={inputValue} onChange={inputOnChangeHandler} />
      <div className="search-icon-container" onClick={onSearch}>
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}

export default SearchInput;
