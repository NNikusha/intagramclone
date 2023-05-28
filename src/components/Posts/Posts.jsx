import React from "react";
import { Avatar } from "@mui/material";
import "./Posts.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = () => {
  return (
    <div className="posts">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>R</Avatar>
          nika • <span> 12h </span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image"></div>
      <div className="post__footer"></div>
    </div>
  );
};

export default Post;
