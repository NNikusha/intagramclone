import React from "react";
import "./Submit.css";
const SubmitButton = ({ text }) => {
  return (
    <button className="submit-button">
      <span>{text}</span>
    </button>
  );
};

export default SubmitButton;
