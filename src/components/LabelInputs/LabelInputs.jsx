import React, { useState } from "react";
import "./LabelInputs.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const LabelInputs = ({
  inputType,
  placeholder,
  onChange,
  showIcon = true,
  isValid,
  showCheckIcon = true,
  showPasswordIcon = false,
  showCancelIcon = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  const handleInputFocus = () => {
    if (inputValue === "") {
      setInputValue(" ");
    }
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === "") {
      setInputValue("");
    }
  };

  return (
    <div className={`inputs ${showIcon && isValid !== null ? "with-icon" : ""}`}>
      <input
        type={inputType === "password" && showPassword ? "text" : inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {showIcon && inputType === "password" && showPasswordIcon && inputValue && (
        <div className="show-password-icon" onClick={togglePasswordVisibility}>
          Show
        </div>
      )}
      {showIcon && isValid && showCheckIcon && <CheckCircleOutlineOutlinedIcon className="icon check" />}
      {showIcon && inputValue.trim() !== "" && !isValid && showCancelIcon && (
        <CancelOutlinedIcon className="icon cancel" />
      )}
    </div>
  );
};

export default LabelInputs;
