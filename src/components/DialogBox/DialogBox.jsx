import React from "react";
import "./DialogBox.css";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseIcon from "@mui/icons-material/Close";


const DialogBox = ({ onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <button className="close-button" onClick={onClose}>
        <CloseIcon />
        </button>
        <h3 className="dialog-header">Create new post</h3>
        <div className="dialog-centre">

        <div className="dialog-inner">
        <PhotoLibraryIcon/> 
          <p className="instruction">Drag photos and videos here</p>
          <button className="select-button">Select from computer</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
