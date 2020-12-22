import axios from "axios";

const url = "http://localhost:8080/api/post";

export const fecthPost = () => axios.get(url);
export const postPost = (newPost) => axios.post(url, newPost);
