import React, { useContext, useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import GroupedButtons from './GroupedButtons'
import { Context } from '../../Context'

const CustomCard = props => {
	const { itemQty, setMenuItems, setItems } = useContext(Context)

	const [elevation, setElevation] = useState(3)

	const handleClick = id => {
		setMenuItems(menuItems => menuItems.filter(item => item.id !== id))
		setItems(items => [...items, { id: id, qty: itemQty }])
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
