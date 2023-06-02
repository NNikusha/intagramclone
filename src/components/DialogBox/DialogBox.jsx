import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./DialogBox.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({ onClose, userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = async () => {
    // Add your logic here to handle the submitted photo and caption
    console.log("Selected File:", selectedFile);
    console.log("Caption:", caption);

    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    // Upload photo to Firebase Storage and get the photo URL
    const photoUrl = await uploadPhoto();

    // Save photo data to Firestore
    if (photoUrl) {
      const photoData = {
        userId,
        photoUrl,
        caption,
        timestamp: serverTimestamp(),
      };

      try {
        const docRef = await addDoc(collection(db, "photos"), photoData);
        console.log("Photo document ID:", docRef.id);
      } catch (error) {
        console.log("Error adding photo:", error);
      }
    }

    // Clear the form after submission
    setSelectedFile(null);
    setCaption("");

    // Close the dialog box
    onClose();
  };

  const uploadPhoto = async () => {
    // Implement your logic to upload the selectedFile to Firebase Storage
    // and return the photo URL
    // Example implementation using Firebase Storage:
    // const storageRef = ref(storage, 'photos/' + selectedFile.name);
    // const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    // const snapshot = await getUploadTaskSnapshot(uploadTask);
    // const photoUrl = await getDownloadURL(snapshot.ref);

    // Return the example URL for testing purposes
    return "https://example.com/photos/photo.jpg";
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <h3 className="dialog-header">Create new post</h3>
        <div className="dialog-centre">
          <div className="dialog-inner">
            <PhotoLibraryIcon />
            <p className="instruction">Drag photos and videos here</p>
            <input type="file" onChange={handleFileChange} />
            <input
              type="text"
              value={caption}
              onChange={handleCaptionChange}
              placeholder="Write a caption..."
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
