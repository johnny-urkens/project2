import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeArticle,deleteArticle } from '../../../actions/articles';
import {  Link } from "react-router-dom";



const Article = ({article, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
 


  

  return (
   
    <Card className={classes.card}>
      <CardMedia className={classes.media}  image={article.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={article.title}/>
      <div className={classes.overlay}>
        <Typography variant="h6" >{article.title}</Typography>
        <Typography variant="body2" >{moment(article.createdAt).fromNow()}</Typography>
      </div>
     
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{article.tags.map((tag)=> `#${tag} `)}</Typography>

      </div>
      <Typography className={classes.title} variant="h5" gutterBottom component="h2">{article.subTitle}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{article.content.substring(0,200)}</Typography>
      </CardContent>
      <div className={classes.overlay2}>
        {/* <Button style ={{color:'white'}} size="small" onClick={() => setCurrentId(article._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button> */}
           <Link to={`/Articles/${article._id}`}  className="button muted-button" >
           <MoreHorizIcon fontSize="medium" />
      </Link>
        
      </div>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" onClick={() => dispatch(likeArticle(article._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {article.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteArticle(article._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Article;