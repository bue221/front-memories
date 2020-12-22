import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
