import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Cart from './Pages/Cart/Cart'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import Register from './Pages/Register/Register'
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Context } from './Context'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

const App = () => {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const [itemQty, setItemQty] = useState('')
	const [menuItems, setMenuItems] = useState([])
	const [items, setItems] = useState([])

	useEffect(() => {
		setUserName(window.localStorage.getItem('userName'))
		setUserEmail(window.localStorage.getItem('userEmail'))
	}, [])

	useEffect(() => {
		window.localStorage.setItem('userName', userName)
		window.localStorage.setItem('userEmail', userEmail)
	}, [userName, userEmail])

	return (
		<Router>
			<Context.Provider
				value={{
					userName,
					setUserName,
					userEmail,
					setUserEmail,
					itemQty,
					setItemQty,
					menuItems,
					setMenuItems,
					items,
					setItems,
				}}
			>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='gallery' element={<Gallery />} />
					<Route path='menu' element={<Menu />} />
					<Route path='cart' element={<Cart />} />
					<Route path='signup' element={<Register load='signup' />} />
					<Route path='login' element={<Register load='login' />} />
					<Route path='tandc' element={<TermsAndConditions />} />
				</Routes>
			</Context.Provider>
		</Router>
	)
}

export default App
