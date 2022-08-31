import React, { useContext, useEffect } from 'react'
import Axios from 'axios'
import { Context } from '../../Context'

const Cart = () => {
	const { userEmail } = useContext(Context)

	useEffect(() => {
		const getFoods = async () => {
			await Axios.post('http://localhost:5000/getcart', { email: userEmail })
				.then(res => console.log('this is the recieved data: ' + res.data))
				.catch(err => console.log(err))
		}
		getFoods()
	}, [])

	return <div>Cart</div>
}

export default Cart
