import axios from 'axios';


const url ='https://project2-reactapp.herokuapp.com/Articles';

export const fetchArticles = ()=> axios.get(url);

export const createArticle = (newArticle) => axios.post(url, newArticle);
export const getArticle = (id)=> axios.get(`${url}/${id}`);

export const likeArticle = (id) => axios.patch(`${url}/${id}/likeArticle`);
export const updateArticle = (id, updatedArticle) => axios.patch(`${url}/${id}`, updatedArticle);
export const deleteArticle = (id) => axios.delete(`${url}/${id}`);