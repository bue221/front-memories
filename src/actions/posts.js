import { fecthPost, postPost1, putPost } from "../api";
import { CREATE_POST, FETCH_ALL_POST, UPDATE_POST } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fecthPost();
    dispatch({ type: FETCH_ALL_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const postPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await postPost1(newPost);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await putPost(id, updatePost);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
