import React from "react";
import "./LabelInputs.css";

const LabelInputs = ({ inputType, placeholder,onChange }) => {
  return (
    <div className="inputs">
      <input type={inputType} placeholder={placeholder} onChange={onChange}
 />
    </div>
  );
};

export default LabelInputs;
