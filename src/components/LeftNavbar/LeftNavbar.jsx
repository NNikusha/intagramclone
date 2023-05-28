import React, { useState } from "react";
import "./LeftNavbar.css";

import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineVideoCamera,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineMenu,
  AiFillHome,
  AiFillCompass,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

const LeftNavbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="left-navbar">
      <img src="/images/Vector.png" alt="Instagram Logo" className="Vector" />
      <div className="nav-menu">
        <div onClick={() => setMenu("Home")}>
          {menu === "Home" ? <AiFillHome /> : <AiOutlineHome />}
          <p>Home</p>
        </div>
        <div>
          <CiSearch />
          <p>Search</p>
        </div>
        <div onClick={() => setMenu("Explore")}>
          {menu === "Explore" ? <AiFillCompass /> : <AiOutlineCompass />}
          <p>Explore</p>
        </div>
        <div>
          <AiOutlineVideoCamera />
          <p>Reels</p>
        </div>
        <div>
          <RiMessengerLine />
          <p>Messages</p>
        </div>
        <div>
          <AiOutlineHeart />
          <p>Notifications</p>
        </div>
        <div>
          <AiOutlinePlusCircle />
          <p>Create</p>
        </div>
        <div>
          <FaRegUserCircle />
          <p>Profile</p>
        </div>
      </div>
      <div className="menu-div">
        <AiOutlineMenu />
        <p>More</p>
      </div>
    </div>
  );
};

export default LeftNavbar;
