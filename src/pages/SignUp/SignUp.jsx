import LabelInputs from "../../components/LabelInputs/LabelInputs";
import SubmitButton from "../../components/Submit/Submit";
import VectorImg from "../../components/VectorImg/Vector";
import Separator from "../../components/Separator/Separator";
import SubmitButton3 from "../../components/SubmitButton3/SubmitButton3";
import Footer from "../../components/Footer/Footer";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="PageSignUp">
      <div className="PageSignUpForm">
        <VectorImg />
        <div className="SignUpText">
          <p>Sign up to see photos and videos</p>
          <p>from your friends.</p>
        </div>
        <SubmitButton3 />
        <Separator />
        <LabelInputs inputType="text" placeholder="Mobile Number or Email" />
        <LabelInputs inputType="text" placeholder="Full Name" />
        <LabelInputs inputType="text" placeholder=" Username" />
        <LabelInputs inputType="password" placeholder="Password" />
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
              By signing up, you agree to our <span>Terms</span> ,{" "}
              <span>Privacy</span>{" "}
            </p>
            <p>
              {" "}
              <span>Policy</span> and <span>Cookies Policy</span> .
            </p>
          </div>
        </div>
        <SubmitButton text="Sign Up" />
      </div>
      <div className="SignUpSecBox">
        <p> Have an account? </p>
        <Link className="SignUpLink" to={"/"}>
          Log In{" "}
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
      <Link className="SignUpLink" to={"/"}>
        Sign Up
      </Link>
      <Footer/>
    </div>
  );
};

export default SignUp;
