import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

const CustomCard = props => {
  return (
    <Grid container key={props.id}>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component='img' height='140' image={props.image} title={props.name} alt='food item image' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography>Todo : increment and decrement quantity </Typography>
            <Button variant='outlined' size='small' color='primary'>
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CustomCard
