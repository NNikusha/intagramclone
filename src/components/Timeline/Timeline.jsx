import React from "react";
import Post from "../Posts/Posts"
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="timeline__right"></div>
    </div>
  );
};

export default Timeline;
