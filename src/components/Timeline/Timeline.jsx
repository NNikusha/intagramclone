import React, { useEffect, useState } from "react";
import Post from "../Posts/Posts"
import "./Timeline.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Timeline = () => {
   const [posts, setPosts] = useState();
   console.log(posts)
   useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postsArray = [];
      snapshot.forEach((doc) => {
        const document = {
          picture: doc.data().picture,
          caption: doc.data().caption
        };
        postsArray.push(document);
      });
      setPosts(postsArray);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="timeline">
        <div className="timeline__posts">
        {posts?.map((post,index) => (
            <Post
             caption={post.caption}
              postImage={post.picture}
            />
          ))}
        </div>
      <div className="timeline__right"></div>
    </div>
  );
};

export default Timeline;
