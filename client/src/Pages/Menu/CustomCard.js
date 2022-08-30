import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import GroupedButtons from './GroupedButtons'
import axios from 'axios'

const CustomCard = props => {
	const [elevation, setElevation] = useState(3)

	const handleClick = (id, qty) => {
		axios.post('/cart', { id, qty })
	}

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
					{/* <Typography component='div'>{props.desc}</Typography> */}
				</Typography>
			</CardContent>

			<CardActions>
				<GroupedButtons />
				<Button
					sx={{ m: 2 }}
					size='small'
					variant='contained'
					color='success'
					disableElevation
					onClick={() => handleClick(props.id)}
				>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	)
}

export default CustomCard
