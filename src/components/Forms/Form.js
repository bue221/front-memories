import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
//styles
import { useStyles } from "./styles";

import FileBase from "react-file-base64";
//redux
import { useDispatch, useSelector } from "react-redux";
import { postPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    currentId ? state.post.find((p) => p._id === currentId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(postPost(postData));
    }
    clear();
  };
  const clear = () => {
    setPostData({
      author: "",
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };

  useEffect(() => {
    if (posts) {
      setPostData(posts);
    }
  }, [posts]);

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} a memory
        </Typography>
        <TextField
          name="author"
          label="Creator"
          fullWidth
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <TextField
          name="tag"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button color="primary" size="large" type="submit" fullWidth>
          {currentId ? "Edit" : "Create"}
        </Button>
        <Button color="secondary" size="large" onClick={clear} fullWidth>
          clear
        </Button>
      </form>
    </>
  );
};

export default Form;
