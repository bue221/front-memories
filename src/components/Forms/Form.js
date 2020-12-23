import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
//styles
//import { useStyles } from "./styles";
import FileBase from "react-file-base64";
//redux
import { useDispatch } from "react-redux";
import { postPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  //const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPost(postData));
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6">Create a memory</Typography>
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
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
