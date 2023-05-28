
import SubmitButton from "../../components/Submit/Submit";
import LabelInputs from "../../components/LabelInputs/LabelInputs";
import Separator from "../../components/Separator/Separator";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="PageSignIn">
      <div className="LeftSide">
        {/* <img src="/images/screenshot1.png" /> */}
      </div>
      <div className="RightSide">
        <form className="SignIn">
          <div>
            <img
              className="VectorInsta"
              src="/images/Vector.png"
              alt="Vector"
            />
          </div>
          <LabelInputs
            inputType="text"
            placeholder="Phone Number, Username, or Email"
          />
          <LabelInputs inputType="password" placeholder="Password" />{" "}
          <SubmitButton text="Log In" />
          <Separator />
          <div className="facebook-button">
            <div className="facebookic">
              <img src="/images/facebookic.png" alt="Facebook Icon" />
            </div>
            <p>Log in with Facebook</p>
          </div>
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
      {/* <Footer /> */}
    </div>
  );
};

export default SignIn;
