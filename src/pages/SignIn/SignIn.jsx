import SubmitButton from "../../components/Submit/Submit";
import LabelInputs from "../../components/LabelInputs/LabelInputs";
import Separator from "../../components/Separator/Separator";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import { Link } from "react-router-dom";
import VectorImg from "../../components/VectorImg/Vector";
import SubmitButton2 from "../../components/SubmitButton/SubmitButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.log("Email is not valid");
      } else if (error.code === "auth/missing-password") {
        console.log("Password is missing");
      } else if (error.code === "auth/wrong-password") {
        console.log("Wrong password");
      } else {
        console.log("Login error:", error.message);
      }
    }
  };
  return (
    <div className="PageSignIn">
      <div className="PageSignInUp">
        <div className="LeftSide">
          <div>
            <img className="screenshot1" src="/images/screenshot2.png" />
            <img className="frame1" src="/images/frame.png" alt="frame" />
          </div>
          <div>
            <img
              className="screenshot2"
              src="/images/screenshot1.png"
              alt="feed"
            />
            <img className="frame2" src="/images/frame.png" alt="frame" />
          </div>
        </div>
        <div className="RightSide">
          <form className="SignIn" onSubmit={login}>
            <VectorImg />
            <LabelInputs
              inputType="text"
              placeholder="Phone Number, Username, or Email"
              onChange={(event) => setLoginEmail(event.target.value)}
              showIcon={false}
            />
            <LabelInputs
              inputType="password"
              placeholder="Password"
              onChange={(event) => setLoginPassword(event.target.value)}
              showIcon={false}
            />{" "}
            <SubmitButton text="Log in" />
            <Separator />
            <SubmitButton2 />
            <div className="Forgot">Forgot Password?</div>
          </form>
          <div className="SecBox">
            <p> Don't Have an Account ? </p>
            <Link className="SignUpLink" to={"/signup"}>
              Sign Up
            </Link>
          </div>
          <div className="ThirdBox">
            <div className="ThirdBoxText">
              <p>Get The App. </p>
            </div>
            <div className="TwoLogo">
              <img className="AppStore" src="/images/AppStore.png" />
              <img className="GooglePlay" src="/images/GooglePlay.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
