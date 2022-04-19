import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress, Grid } from '@mui/material'
import CustomCard from './CustomCard'

const Menu = () => {
	const [foodItems, setFoodItems] = useState(null)

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
		<>
			{foodItems ? (
				foodItems.map(item => (
					<div id='cards' key={item.id}>
						<CustomCard id={item.id} image={item.image} name={item.name} />
						<br />
					</div>
				))
			) : (
				<Grid container>
					<Grid item>
						<CircularProgress size={100} />
					</Grid>
				</Grid>
			)}
		</>
	)
}

export default Menu
