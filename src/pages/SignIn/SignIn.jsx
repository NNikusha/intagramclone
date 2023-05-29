import SubmitButton from "../../components/Submit/Submit";
import LabelInputs from "../../components/LabelInputs/LabelInputs";
import Separator from "../../components/Separator/Separator";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import { Link } from "react-router-dom";
import VectorImg from "../../components/VectorImg/Vector";
import SubmitButton2 from "../../components/SubmitButton/SubmitButton";

const SignIn = () => {
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
          <form className="SignIn">
            <VectorImg />
            <LabelInputs
              inputType="text" placeholder="Phone Number, Username, or Email"/>
            <LabelInputs inputType="password" placeholder="Password" />{" "}
            <SubmitButton text="Log In" />
            <Separator />
            <SubmitButton2/>
            <div className="Forgot">Forgot Password?</div>
          </form>
          <div className="SecBox">
            <p> Don't Have an Account ? </p>
            <Link className="SignUpLink" to={"/"}>
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
