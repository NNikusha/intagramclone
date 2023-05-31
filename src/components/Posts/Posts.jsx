import React from "react";
import { Avatar } from "@mui/material";
import "./Posts.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FavoriteBorder } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";

const Post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="posts">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span> {timestamp} </span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutline className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorder className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
};

export default Post;
