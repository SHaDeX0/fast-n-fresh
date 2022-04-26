import React, { useState } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import GroupedButtons from './GroupedButtons'
const CustomCard = props => {
  const [elevation, setElevation] = useState(5)
  return (
    <Grid container key={props.id} spacing={1} xs={3}>
      <Grid item sx={{ m: 3 }}>
        <Card variation='elevation' sx={{ minWidth: 300 }} onMouseOver={() => setElevation(10)} onMouseOut={() => setElevation(3)} elevation={elevation}>
          <CardActionArea>
            <CardMedia component='img' height='180' image={props.image} title={props.name} alt='food item image' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <GroupedButtons />
            <Button sx={{ m: 2 }} size='small' variant='contained' color='success' disableElevation>
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CustomCard
