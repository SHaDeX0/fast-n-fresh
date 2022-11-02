import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { Context } from '../../Context'

const Cart = () => {
	const { userEmail } = useContext(Context)
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		Axios.post('http://localhost:5000/getcart', { email: userEmail })
			.then(res => {
				console.log('this is the recieved data: ')
				setCartItems(JSON.parse(res.data.cart.items))
			})
			.catch(err => console.log(err))
	}, [userEmail])

	return (
		<div>
			{cartItems
				? cartItems.map((item, i) => {
						return (
							<div key={i}>
								<h1>{item.id}</h1>
								<h2>{item.qty}</h2>
							</div>
						)
				  })
				: null}
		</div>
	)
}

export default Cart
