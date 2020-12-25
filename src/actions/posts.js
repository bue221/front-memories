import {
  deleteThePost,
  fecthPost,
  postPost1,
  putPost,
  putPostLiked,
} from "../api";
import {
  CREATE_POST,
  FETCH_ALL_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../types";

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

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await deleteThePost(id);
    dispatch({ type: DELETE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const putPostLike = (id) => async (dispatch) => {
  try {
    const { data } = await putPostLiked(id);
    console.log(data);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
