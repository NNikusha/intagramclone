import React from "react";
import "./LabelInputs.css";

const LabelInputs = ({ inputType, placeholder }) => {
  return (
    <div className="inputs">
      <input type={inputType} placeholder={placeholder} />
    </div>
  );
};

export default LabelInputs;
