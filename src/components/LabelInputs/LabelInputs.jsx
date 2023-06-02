import React from "react";
import "./LabelInputs.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const LabelInputs = ({ inputType, placeholder, onChange, showIcon = true, isValid }) => {
  return (
    <div className={`inputs ${showIcon && isValid !== null ? "with-icon" : ""}`}>
      <input type={inputType} placeholder={placeholder} onChange={onChange} />
      {showIcon && isValid !== null && (
        <>
          {isValid ? (
            <CheckCircleOutlineOutlinedIcon className="icon check" />
          ) : (
            <CancelOutlinedIcon className="icon cancel" />
          )}
        </>
      )}
    </div>
  );
};

export default LabelInputs;
