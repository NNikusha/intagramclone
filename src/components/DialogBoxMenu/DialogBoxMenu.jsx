import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import "./DialogBoxMenu.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
const DialogBoxMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="dialog-box-overlay" onClick={onClose}>
      <div className="dialog-box">
        <ul>
          <li>
            <SettingsOutlinedIcon /> Settings
          </li>
          <li>
            <AccessTimeOutlinedIcon /> Your activity
          </li>
          <li>
            <BookmarkBorderOutlinedIcon /> Saved
          </li>
          <li>
            <DarkModeOutlinedIcon /> Switch appearance
          </li>
          <li>
            <LiveHelpOutlinedIcon /> Report problem
          </li>
        </ul>
        <hr />
        <ul>
          <li>Switch account</li>
        </ul>
        <hr />
        <ul>
          <li onClick={handleLogout}>Log out</li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default DialogBoxMenu;
