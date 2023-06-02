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
import DialogBox from "../DialogBox/DialogBox";
import DialogBoxMenu from "../DialogBoxMenu/DialogBoxMenu";

const LeftNavbar = () => {
  const [menu, setMenu] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false); // Track dialog visibility
  const [isMenuDialogOpen, setMenuDialogOpen] = useState(false); // Track menu dialog visibility

  // Function to open the dialog box
  const openDialog = (option) => {
    if (option === "More") {
      setMenuDialogOpen(true);
    } else {
      setDialogOpen(true);
    }
  };

  // Function to close the dialog boxes
  const closeDialog = () => {
    setDialogOpen(false);
    setMenuDialogOpen(false);
  };

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
        <div onClick={() => openDialog("Create")}>
          <AiOutlinePlusCircle />
          <p>Create</p>
        </div>
        <div onClick={() => openDialog("Profile")}>
          <FaRegUserCircle />
          <p>Profile</p>
        </div>
      </div>
      <div className="menu-div" onClick={() => openDialog("More")}>
        <AiOutlineMenu />
        <p>More</p>
      </div>

      {isDialogOpen && <DialogBox onClose={closeDialog} />}
      {isMenuDialogOpen && <DialogBoxMenu onClose={closeDialog} />}
    </div>
  );
};

export default LeftNavbar;
