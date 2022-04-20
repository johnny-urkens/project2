import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './Article/styles'
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import moment from 'moment';
import {  Link } from "react-router-dom";

const ArticleDetail = () => {
  
  const [articleData, setArticleData] = useState({
    title:'',
    subTitle:'',
    content:'',
    tags:'',
    selectedFile:'',
    createdAt:'',
  });
  const classes = useStyles();

  const dispatch = useDispatch();
  const {id} = useParams();
  
  const [detailId, setDetailId] =useState(id)
  const article = useSelector((state) => (detailId ? state.articles.find((content) => content._id === detailId): null ));
  

  useEffect(()=>{
    if (article) setArticleData(article);
  },[article]);
  
  if (id){
  return (
  <Card className={classes.card}>
     <CardMedia className={classes.media}  image={articleData.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={articleData.title}/>
     <div className={classes.overlay}>
        
      
      </div>
      <CardContent>
      <Typography variant="body2" >{moment(articleData.createdAt).fromNow()}</Typography>
      <Typography variant="h6" >{articleData.title}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">{articleData.content}</Typography>
      <Link to={`/create/${articleData._id}`}  className="button muted-button" >
           Edit Article
      </Link>
      </CardContent>
      <div className={classes.overlay2}>
        {/* <Button style ={{color:'white'}} size="small" onClick={() => setCurrentId(article._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button> */}

        
      </div>
  </Card>
  )
}
}
export default ArticleDetail