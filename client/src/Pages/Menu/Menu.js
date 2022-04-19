import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomCard from './CustomCard'

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
		<>
			{foodItems.map(item => (
				<div id='cards' key={item.id}>
					<CustomCard id={item.id} image={item.image} name={item.name} />
					<br />
				</div>
			))}
		</>
	)
}

export default Menu
