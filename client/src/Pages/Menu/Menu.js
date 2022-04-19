// import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, CardActions, CardContent, CardMedia, Typography, CardActionArea, Card, Grid } from '@mui/material'
import Card from './Card'

const Menu = () => {
	// const [foodItems, setFoodItems] = useState([])

	// const getFoodItems = async () => {
	// 	await Axios.get('http://localhost:5000/menu')
	// 		.then(res => {
	// 			setFoodItems(res.data)
	// 		})
	// 		.catch(err => console.log(err))
	// }

	// useEffect(() => {
	// 	getFoodItems()
	// }, [])

	// return (
	// 	<>
	// 		{foodItems.map(item => (
	// 			<ol key={item.id}>
	// 				<li>Name : {item.name}</li>
	// 				{item.description ? (
	// 					<li>Description : {item.description}</li>
	// 				) : (
	// 					<></>
	// 				)}
	// 				<li>Price : {item.price}</li>
	// 				<br />
	// 			</ol>
	// 		))}
	// 	</>
	// )
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia component='img' height='140' image='/static/images/cards/contemplative-reptile.jpg' alt='green iguana' />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Diet Coke
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

export default Menu
