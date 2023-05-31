import React from "react";
import { Avatar } from "@mui/material";
import "./UserSuggest.css"

const UserSuggest = () => {
    return (
        <div className="Usersuggestions__username">
        <div className="username__left">
          <span className="user_avatar">
            <Avatar style={{ width: "56px", height: "56px" }}>N</Avatar>
          </span>
          <div className="mainUsername__info">
            <span className="username">nikusha_tavartkiladze</span>
            <span className="relation">nikatavartkiladze</span>
          </div>
        </div>
        <button className="follow__button">Switch</button>
      </div>
    );
}
export default UserSuggest;