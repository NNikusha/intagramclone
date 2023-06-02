import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import LabelInputs from "../../components/LabelInputs/LabelInputs";
import SubmitButton from "../../components/Submit/Submit";
import VectorImg from "../../components/VectorImg/Vector";
import Separator from "../../components/Separator/Separator";
import SubmitButton3 from "../../components/SubmitButton3/SubmitButton3";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import {collection} from  "firebase/firestore";
import { db } from "../../firebase-config";
import { serverTimestamp } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameValid, setFullNameValid] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

   const addItemsIntoDb = async (object, item, userId) => {
    const itemRef = collection(db, item);
    const timestamp = serverTimestamp();
    const itemsObject = { ...object, userId, timestamp };
    await addDoc(itemRef, itemsObject);
  };
  
  

  const register = async (e) => {
    e.preventDefault();
  

    
    // Reset the validity state variables
    setFullNameValid(null);
    setUsernameValid(null);
    setEmailValid(null);
    setPasswordValid(null);
  
    const userObj = {
      firstName: username,
      surname: fullName,
      email:email,
      password: password,
    };


    if (!fullName) {
      console.log("Full Name is empty");
      setFullNameValid(false);
    } else {
      setFullNameValid(true);
    }
  
    if (!username) {
      console.log("Username is empty");
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
  
    if (!password) {
      console.log("Password is empty");
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  
    if (!email) {
      console.log("Email is empty");
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  
    // Validate the inputs
    if (fullName && username && password && email) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addItemsIntoDb(userObj, "users", user.uid);
      } catch (error) {
        console.log("Registration error:", error.message);
        if (error.code === "auth/weak-password") {
          console.log("სუსტი პაროლი");
          setPasswordValid(false);
        } else if (error.code === "auth/invalid-email") {
          console.log("მომხმარებელი ვერ მოიძებნა");
          setEmailValid(false);
        } else if (error.code === "auth/missing-email") {
          console.log("შეიყვანეთ მეილი");
          setEmailValid(false);
        } else if (error.code === "auth/missing-password") {
          console.log("შეიყვანეთ პაროლი");
          setPasswordValid(false);
        }
      }
    }
  };
  

  return (
    <form className="PageSignUp" onSubmit={register}>
      <div className="PageSignUpForm">
        <VectorImg />
        <div className="SignUpText">
          <p>Sign up to see photos and videos</p>
          <p>from your friends.</p>
        </div>
        <SubmitButton3 />
        <Separator />
        <LabelInputs
          inputType="text"
          placeholder="Mobile Number or Email"
          onChange={(event) => setEmail(event.target.value)}
          isValid={emailValid}
        />
        <LabelInputs
          inputType="text"
          placeholder="Full Name"
          onChange={(event) => setFullName(event.target.value)}
          isValid={fullNameValid}
        />
        <LabelInputs
          inputType="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          isValid={usernameValid}
        />
        <LabelInputs
          inputType="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          isValid={passwordValid}
        />
        <div className="SignUpText2">
          <div className="SignUpText2-1">
            <p>People who use our service may have uploaded</p>
            <p>
              your contact information to Instagram.{" "}
              <span className="SignUpLearnMore">Learn More</span>
            </p>
          </div>
          <div className="SignUpText2-1">
            <p>
              By signing up, you agree to our <span>Terms</span>,{" "}
              <span>Privacy</span>,{" "}
            </p>
            <p>
              <span>Policy</span>, and <span>Cookies Policy</span>.
            </p>
          </div>
        </div>
        <SubmitButton text="Sign Up" />
      </div>
      <div className="SignUpSecBox">
        <p>Have an account?</p>
        <Link className="SignUpLink" to={"/signin"}>
          Log In
        </Link>
      </div>
      <div className="ThirdBox">
        <div className="ThirdBoxText">
          <p>Get The App.</p>
        </div>
        <div className="TwoLogo">
          <img
            className="AppStore"
            src="/images/AppStore.png"
            alt="App Store"
          />
          <img
            className="GooglePlay"
            src="/images/GooglePlay.png"
            alt="Google Play"
          />
        </div>
      </div>
      <Footer />
    </form>
  );
};

export default SignUp;
