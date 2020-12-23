import axios from "axios";

const url = "http://localhost:8080/api/post";

export const fecthPost = () => axios.get(url);
export const postPost1 = (newPost) => axios.post(url, newPost);
