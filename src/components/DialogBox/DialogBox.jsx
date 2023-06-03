import React, { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, doc, setDoc, where, query, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import "./DialogBox.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";
export const updateItems = async (item , updatedUsers) => {
    try {
      for (const user of updatedUsers) {
        const usersRef = collection(db, item);
        const userDocRef = doc(usersRef, user.id);
        await setDoc(userDocRef, user);
      }
      console.log("All updates completed successfully.");
    } catch (error) {
      console.log("Error updating users:", error);
    }
  };

  export const addItemsIntoDb = async (object, item) => {
    const itemRef = collection(db, item);
    
    await addDoc(itemRef, object);
  };
  export const readUsers = async (item, id) => {
    const expensesRef = collection(db, item);
    const expenses = [];
    const q = query(expensesRef, where("userId", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((doc) => {
      const document = {
        firstName: doc.data().firstName,
        email: doc.data().email,
        password: doc.data().password,
        userId: doc.data().userId,
        timestamp: doc.data().timestamp,
        id: doc.id,
      };
      expenses.push(document);
    });
    return expenses;
  };
const DialogBox = ({ onClose, userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [users, setUsers] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      
      if (user) {
        const userData = await readUsers("users", user.uid);
        setCurrentUser(userData[0]);
      } else {
        setCurrentUser(undefined);
      }
    });
    return unsubscribe;
  }, []);

  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersArray = [];
      snapshot.forEach((doc) => {
        const document = {
            firstName: doc.data().firstName,
            email: doc.data().email,
            password: doc.data().password,
            userId: doc.data().userId,
            timestamp: doc.data().timestamp,
            id: doc.id,
        };
        usersArray.push(document);
      });
      setUsers(usersArray);
    });

    return () => unsubscribe();
  }, []);

//   console.log(image)

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

  
const convertPfpToBase64 = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result?.toString());

      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dialog-overlay">
      <form className="dialog-content" onSubmit={(e) =>{
        e.preventDefault()
                addItemsIntoDb({
                    picture: image,
                    caption: caption
                }, "posts")
                setImage("")
                setCaption("")
            }}>
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <h3 className="dialog-header">Create new post</h3>
        <div className="dialog-centre">
          <div className="dialog-inner">
            {
                image === "" ?
                <>
                <PhotoLibraryIcon className="photo-library-icon" />
            <p className="instruction">Drag photos and videos here</p>
            <button className="file-input-button">

            <input type="file" className="file-input" onChange={(e) => convertPfpToBase64(e)} />
            Select from computer
            </button>
                </> :
                <img src={image} alt="" />
            }
            <input
              type="text"
              placeholder="Write a caption..."
              className="caption-input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              />
            <button  className="submit-button" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DialogBox;
