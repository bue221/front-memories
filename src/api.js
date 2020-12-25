import axios from "axios";
//url
const url = "http://localhost:8080/api/post";
//llamados a la api
export const fecthPost = () => axios.get(url);
export const postPost1 = (newPost) => axios.post(url, newPost);
export const putPost = (id, data) => axios.put(`${url}/${id}`, data);
export const deleteThePost = (id) => axios.delete(`${url}/${id}`);
export const putPostLiked = (id) => axios.put(`${url}/${id}/likepost`);
