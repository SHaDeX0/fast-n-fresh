import React, { useContext, useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import GroupedButtons from './GroupedButtons'
import Axios from 'axios'
import { Context } from '../../Context'

const CustomCard = props => {
	const { userEmail, itemQty, menuItems, setMenuItems, items, setItems } = useContext(Context)

	const [elevation, setElevation] = useState(3)

	const setMenuAndCartItems = async id => {
		setMenuItems(menuItems.filter(item => item.id !== id))
		await setItems([...items, { id: id, qty: itemQty }])
	}

	const handleClick = id => {
		setMenuAndCartItems(id).then(res => {
			console.log(items)
			Axios.post('http://localhost:5000/cart', { email: userEmail, items: items })
				.then(res => {
					if (res.data.err) console.log(res.data.err)
					else {
						console.log('successfully added to cart')
						// console.log(res.data)
					}
				})
				.catch(err => console.log(err))
		})
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
