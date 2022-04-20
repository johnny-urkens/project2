import React from 'react'
import WeatherList from './Weather/weather_list'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import useStyles from './Articles/styles'

const Info = () => {
  const classes = useStyles();
  return (
    <div>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    <Card className={classes.card}>
      <CardContent>
    <h3>Dit ben ik</h3>
    <Typography variant="body2" color="textSecondary" component="p">Ik ben Johnny Urkens student in het 3de jaar werktraject app.</Typography>
    <Typography variant="body2" color="textSecondary" component="p">Ik ben 51 jaar,ben getrouwd en heb 2 zonen.</Typography>
    <Typography variant="body2" color="textSecondary" component="p">Ik heb het mezelf misschien wat moeilijk gemaakt door niet te vertrekken van de posts app die we in de les gezien hebben.</Typography>
    <Typography variant="body2" color="textSecondary" component="p">Het heeft me zoals ze zeggen "bloed, zweet en tranen" gekost om het uiteindelijk redelijk in orde te krijgen.</Typography>
    <Typography variant="body2" color="textSecondary" component="p">De App is opgesplitst in een frontend en backend waarvan de backend een connectie maakt met een database</Typography>
    <Typography variant="body2" color="textSecondary" component="p">Op het moment van dit schrijven is nog niet alles helemaal naar wens, indien ik nog tijd heb, probeer ik dat nog in orde te brengen.</Typography>
    <Typography variant="body2" color="textSecondary" component="p"> Johnny Urkens R0790759</Typography>
        </CardContent>
        
    </Card>
   
    <WeatherList/>
   
    </Grid>
    </div>
  )
}

export default Info