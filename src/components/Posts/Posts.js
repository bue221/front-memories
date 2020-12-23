import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
//redux
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
