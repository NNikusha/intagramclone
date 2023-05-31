import React from "react";
import "./SuggestLine.css";
import { Avatar } from "@mui/material";


const SuggestLine = () => {
  return (
    <div className="suggestions__usernames">
      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">redian_</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>
    </div>
  );
};

export default SuggestLine;
