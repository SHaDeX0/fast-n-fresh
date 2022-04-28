import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'
import Menu from './Pages/Menu/Menu'
import Register from './Pages/Register/Register'

import { UserContext } from './UserContext'
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions'

const App = () => {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')

	useEffect(() => {
		setUserName(window.localStorage.getItem('userName'))
		setUserEmail(window.localStorage.getItem('userEmail'))
	}, [])

	useEffect(() => {
		window.localStorage.setItem('userName', userName)
		window.localStorage.setItem('userEmail', userEmail)
	}, [userName, userEmail])

	useEffect(() => {
		console.log(userName)
		console.log(userEmail)
	})

	return (
		<Router>
			<UserContext.Provider value={{ userName, setUserName, userEmail, setUserEmail }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='gallery' element={<Gallery />} />
					<Route path='menu' element={<Menu />} />
					<Route path='signup' element={<Register load='signup' />} />
					<Route path='login' element={<Register load='login' />} />
					<Route path='tandc' element={<TermsAndConditions />} />
				</Routes>
			</UserContext.Provider>
		</Router>
	)
}

export default App
