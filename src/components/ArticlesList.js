import React, {useEffect, useState} from 'react'

import {Container, Grow, Grid} from '@material-ui/core';
import Articles from './Articles/Articles';

import {getArticles} from '../actions/articles'
import { useDispatch } from 'react-redux';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';




  const Layout = () => {
  
  
  const [currentId, setCurrentId]=useState(0);
  const dispatch = useDispatch();
  const articles = useSelector((state)=>state.articles)
  const sortedArticles = useMemo (()=>{
    const sortedArticles = articles.slice()
    sortedArticles.sort((a ,b)=> b.createdAt.localeCompare(a.createdAt))
   return sortedArticles
   },[articles])
 
 
  useEffect(()=>{
    dispatch(getArticles());
  },[currentId,dispatch]);

  
  const [artsPerPage] = useState(10);
  const [currentPage, setCurrenPage]= useState(1);
  const paginate = (pageNumber)=> setCurrenPage(pageNumber);

  return (
 

  <Container maxWidth="lg" >


    <div>
    <Grow in>
     
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={12}>
          <Pagination artsPerPage={artsPerPage} totalArts={articles.length} paginate={paginate}/>
            <Articles setCurrentId={setCurrentId} artsPerPage={artsPerPage} currentPage={currentPage} sortedArticles={sortedArticles}/>
          </Grid>
        </Grid>
       
     

    </Grow>
    </div>
  </Container>
  



  );
};

export default Layout;