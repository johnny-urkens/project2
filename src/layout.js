import React from "react"
import { Typography } from "@material-ui/core"
import useStyles from './styles';
import {AppBar} from '@material-ui/core';
import { Drawer } from "@material-ui/core";
import { List} from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import {AddCircleOutlineOutlined, InfoOutlined, SubjectOutlined} from '@material-ui/icons'
import { useNavigate } from "react-router-dom";

export default function Layout({children}){
    const classes = useStyles();
    const navigate = useNavigate();
    const menuItems = [
        {
          text: 'ArticleList',
          icon: <SubjectOutlined color="secondary" />,
          path: '/'
        },
        {
            text: 'create article',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        },
        {
            text: 'info',
            icon: <InfoOutlined color ="secondary" />,
            path: '/info'
        }
      ]
    return(
     
  
    <div className={classes.flex}>
  <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{paper: classes.drawer}}>
      <Typography variant="h5">
        Navigation
      </Typography>
    
      <List>
        {menuItems.map(item => (
          <ListItem key={item.text} button onClick={()=> navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText  primary={item.text}/>
          </ListItem>
        ))}
      </List>
      
    </Drawer>
            <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Project2</Typography>
        </AppBar>

        <div>
        {children}
        </div>
        </div>
        </div>
       
    )}
