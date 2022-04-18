import Axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Button, CardActions, CardContent, CardMedia, Typography, CardActionArea, Card, Grid } from '@mui/material'

const Menu = () => {
	const [foodItems, setFoodItems] = useState([])

	const getFoodItems = async () => {
		await Axios.get('http://localhost:5000/menu')
			.then(res => {
				setFoodItems(res.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getFoodItems()
	}, [])

	return (
		
		// <div className="wrapper">
		// <Carditems img=" " title="Diet Coke" />
		// <Carditems />
		// <Carditems />
		// </div>

		<>
			{foodItems.map(item => (
				<ol key={item.id}>
					<li>Name : {item.name}</li>
					{item.description ? (
						<li>Description : {item.description}</li>
					) : (
						<> </>
					)}
					<li>Price : {item.price}</li>
					<br />
				</ol>
			))}
		</>
	 )


	//prat code 


// 	function Carditems(props){
// 	return (
// 		<div>
// 			<Grid container spacing={3}>
// 				<Grid item xs={3}>
// 					<Card sx={{ maxWidth: 345 }}>
// 						<CardActionArea>
// 							<CardMedia component='img' height='140' image={props.img}  />
// 							<CardContent>
// 								<Typography gutterBottom variant='h5' component='div'>
// 									{props.title}
// 								</Typography>
// 							</CardContent>
// 						</CardActionArea>
// 						<CardActions>
// 							<Typography>Todo : increment and decrement quantity </Typography>
// 							<Button variant='outlined' size='small' color='primary'>
// 								Add to cart
// 							</Button>
// 						</CardActions>
// 					</Card>
// 				</Grid>
// 			</Grid>
// 		</div>
// 	)
// 	}
 }

export default Menu
