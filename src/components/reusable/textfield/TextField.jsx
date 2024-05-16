import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextField({ name, value, placeHolder, className, onChange }) {
  return (
    <div className={`text-field-container ${className}`.trim()}>
      <input
        className={"text-field-input"}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  name: "",
  placeHolder: "",
  value: "",
  className: "",
  onChange: () => {},
};
export default TextField;
