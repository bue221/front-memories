import { fecthPost, postPost as post } from "../api";
import { CREATE_POST, FETCH_ALL_POST } from "../types";

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
    const { data } = await post(newPost);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
