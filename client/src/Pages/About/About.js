import React, { useEffect } from 'react'
import Axios from 'axios'
import { AppBar, Box, Button, CardActions, Card, CircularProgress, Grid, IconButton, Toolbar, Typography, CardContent, CardMedia } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

const PeopleCard = props => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component='img' height='350vh' image={props.image} title={props.name} alt={props.name} />
        <CardContent>
          <Typography variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>TODO: Social Media</Button>
        </CardActions>
      </Card>
    </>
  )
}

const About = () => {
  const [devs, setDevs] = React.useState(null)

  const getDevsFromServer = async () => {
    await Axios.get('http://localhost:5000/aboutus')
      .then(({ data }) => {
        setDevs(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDevsFromServer()
  }, [])

  return (
    <>
      {devs ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ backgroundColor: 'orange', height: 65, maxHeight: 65 }}>
              <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                  <PeopleAltIcon fontSize='large' />
                </IconButton>
                <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
                  About Us
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container sx={{ flexGrow: 1 }} justifyContent='center' alignItems='center' mt={'10%'}>
              {devs.map(item => (
                <Grid item xs={6} key={item.id} sx={{ padding: 10 }}>
                  <PeopleCard image={item.image} name={item.name} details={item.details} phone={item.phone} email={item.email} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={3}>
            <CircularProgress size={100} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default About
