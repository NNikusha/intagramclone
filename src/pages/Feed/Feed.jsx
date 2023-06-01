import React from "react";
import LeftNavBar from "../../components/LeftNavbar/LeftNavbar";
import { Link } from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";
import Story from "../../components/Story/Story";
import Sugesstions from "../../components/Sugesstions/Sugesstions";
import MinFooter from "../../components/MinFooter/MinFooter";
import { useParams } from "react-router-dom";

const Feed = () => {
    const { uid } = useParams();

  return (
    <div className="homepage">
        <LeftNavBar />
        <Link to="/signin">Sign In</Link>
        <div className="homepageCentre">
          <Story/>
        <Sugesstions/>
        <Timeline />
        {/* <MinFooter/> */}
        </div>
    </div>
  );
};

export default Feed;
