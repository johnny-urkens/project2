import React, {useState, useEffect} from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createArticle, updateArticle } from '../../actions/articles';
import { useParams } from 'react-router-dom';


const Form = () => {
  const [articleData, setArticleData] = useState({
    title:'',
    subTitle:'',
    content:'',
    tags:'',
    selectedFile:'',
  });
  const [currentId, setCurrentId]= useState(0)
  const classes = useStyles();
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log("formid", id)
 useEffect(()=>{
   if(id) setCurrentId(id);
 },[id]);
  const article = useSelector((state) => (currentId ? state.articles.find((content) => content._id === currentId): null ));

  useEffect(()=>{
    if (article) setArticleData(article);
  },[article]);


  const handleSubmit = async (e) =>{
    e.preventDefault();

    if (currentId === 0){
      console.log(articleData);
      dispatch(createArticle(articleData));
      clear();
    }else{
      dispatch(updateArticle(currentId, articleData));
      console.log("up",articleData);
      clear();
    }
  };

  const clear = () =>{
    setCurrentId(0);
    setArticleData({title:'',subTitle:'',content:'', tags:'',selectedFile:''});

  };
  const canSave = Boolean(articleData.content) && Boolean(articleData.title) && Boolean(articleData.subTitle)
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ? `Editing "${article.title}"` : 'Creating an article'}</Typography>
      <TextField name="title" variant="outlined" label="title" fullWidth value={articleData.title} onChange={(e)=> setArticleData({...articleData, title: e.target.value})}/>
      <TextField name="subTitle" variant="outlined" label="subTitle" fullWidth value={articleData.subTitle} onChange={(e)=> setArticleData({...articleData, subTitle: e.target.value})}/>
      <TextField name="content" variant="outlined" label="content" fullWidth value={articleData.content} onChange={(e)=> setArticleData({...articleData, content: e.target.value})}/>
      <TextField name="tags" variant="outlined" label="Tags" fullWidth value={articleData.tags} onChange={(e)=> setArticleData({...articleData, tags: e.target.value.split(',')})}/>
      <div className={classes.fileInput}>
        <FileBase
          type="file"
          multiple = {false}
          onDone = {({base64})=> setArticleData({...articleData, selectedFile: base64})}
        />
      </div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={!canSave}>submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >clear</Button>
      </form>

    </Paper>
  )
}

export default Form;
