import React from "react";
import "./SubmitButton3.css";

const SubmitButton3 = ({ text }) => {
  return (
    <div className="facebook-button3">
      <div className="facebookic3">
        <img
          src="/images/whitebook.png"
          alt="Facebook Icon"
        />
      </div>
      <p>Log in with Facebook</p>
    </div>
  );
};

export default SubmitButton3;
