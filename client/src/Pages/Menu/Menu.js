import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Menu.css'

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
				<ol key={item.id}>
					<li>Name : {item.name}</li>
					{item.description ? (
						<li>Description : {item.description}</li>
					) : (
						<></>
					)}
					<li>Price : {item.price}</li>
					<br />
				</ol>
			))}
		</>
	)
}

export default Menu
