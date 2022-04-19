import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material'

const Card = props => {
	return (
		<div key={props.id}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component='img' height='140' image={props.img} />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{props.title}
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
		</div>
	)
}

export default Card
