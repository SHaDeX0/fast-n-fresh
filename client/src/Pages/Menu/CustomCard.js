import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import GroupedButtons from './GroupedButtons'
const CustomCard = props => {
	const [elevation, setElevation] = useState(3)
	return (
		<Card
			variation='elevation'
			sx={{ maxHeight: 330, maxWidth: 300 }}
			onMouseOver={() => setElevation(10)}
			onMouseOut={() => setElevation(3)}
			elevation={elevation}
		>
			<CardMedia component='img' height='180vh' image={props.image} title={props.name} alt='food item image' />

			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{props.name}
				</Typography>
				{/* <Typography variant='h6' component='div'>
					{props.desc}
				</Typography> */}
			</CardContent>

			<CardActions>
				<GroupedButtons />
				<Button sx={{ m: 2 }} size='small' variant='contained' color='success' disableElevation>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	)
}

export default CustomCard
