import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

const CustomCard = props => {
	return (
		<div key={props.id}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component='img' height='140' image={props.image} alt='food item image' />
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
		</div>
	)
	// return (
	// 	<div>
	// 		<Grid container spacing={3}>
	// 			<Grid item xs={3}>
	// 				<Card sx={{ maxWidth: 345 }}>
	// 					<CardActionArea>
	// 						<CardMedia component='img' height='140' image='/static/images/cards/contemplative-reptile.jpg' alt='green iguana' />
	// 						<CardContent>
	// 							<Typography gutterBottom variant='h5' component='div'>
	// 								Diet Coke
	// 							</Typography>
	// 						</CardContent>
	// 					</CardActionArea>
	// 					<CardActions>
	// 						<Typography>Todo : increment and decrement quantity </Typography>
	// 						<Button variant='outlined' size='small' color='primary'>
	// 							Add to cart
	// 						</Button>
	// 					</CardActions>
	// 				</Card>
	// 			</Grid>
	// 		</Grid>
	// 	</div>
	// )
}

export default CustomCard
