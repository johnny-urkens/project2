import * as api from '../api/index'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_ONE } from '../constants/actionTypes';

export const getArticles = ()=> async (dispatch) => {
    try {
        const {data} = await api.fetchArticles();
        dispatch({type:FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message);
    }
};

export const createArticle = (article) => async (dispatch) =>{
    try {
        const { data } =await api.createArticle(article);

        dispatch({type:CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
};

export const likeArticle = (id) => async (dispatch) => {
    try {
      const { data } = await api.likeArticle(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteArticle = (id) => async (dispatch) => {
    try {
      await api.deleteArticle(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateArticle = (id, article) => async (dispatch) => {
    console.log("act",id)
    try {
      const { data } = await api.updateArticle(id, article);
  
      dispatch({ type: UPDATE, payload: data });
      console.log("d",data)
    } catch (error) {
      console.log(error.message);
    }
  };
  // export const getArticle = (id) => async (dispatch) => {
  //   try {
  //     const { data } = await api.getArticle(id);
  
  //     dispatch({ type: FETCH_ONE, payload: data });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };