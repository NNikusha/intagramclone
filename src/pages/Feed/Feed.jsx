import React from "react";
import LeftNavBar from "../../components/LeftNavbar/LeftNavbar";
import { Link } from "react-router-dom";
import Timeline from "../../components/Timeline/Timeline";

const Feed = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <LeftNavBar />
      </div>
      <div className="homepage__timeLine">
        <Link to="/signin">Sign In</Link>
        <Timeline />
      </div>
    </div>
  );
};

export default Feed;
