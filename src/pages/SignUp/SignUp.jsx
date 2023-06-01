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
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.log("Registration error:", error.message);
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
        />
        <LabelInputs
          inputType="text"
          placeholder="Full Name"
          onChange={(event) => setFullName(event.target.value)}
        />
        <LabelInputs
          inputType="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <LabelInputs
          inputType="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
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
        <SubmitButton  text="Sign Up" />
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
          <img className="AppStore" src="/images/AppStore.png" alt="App Store" />
          <img className="GooglePlay" src="/images/GooglePlay.png" alt="Google Play" />
        </div>
      </div>
      <Footer />
    </form>
  );
};

export default SignUp;
