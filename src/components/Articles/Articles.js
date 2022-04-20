import React, { useMemo, useState } from 'react'
import Article from './Article/Article'
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress} from '@material-ui/core'
import ArticleDetail from './ArticleDetail';


const Articles = ({setCurrentId, artsPerPage, currentPage, sortedArticles}) => {
  const classes = useStyles();
  
  const articles = useSelector((state)=>state.articles)





const indexOfLastArticle = currentPage * artsPerPage;
const indexOfFirstArticle = indexOfLastArticle - artsPerPage;
const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

console.log("sort",sortedArticles)

  return (
  !articles.length ? <CircularProgress/> : (
    <Grid className={classes.container} container alignItems='stretch'  spacing={3}>
      {currentArticles.map((article)=> (
        <Grid key={article._id} item xs={12} sm={6}>
          
            <Article article={article} setCurrentId={setCurrentId}  />
            <ArticleDetail/>
        </Grid>
      ))}
    </Grid>
  )
  );
};

export default Articles;