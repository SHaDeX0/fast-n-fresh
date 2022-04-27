import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'
import Menu from './Pages/Menu/Menu'
import Register from './Pages/Register/Register'
import { UserContext } from './UserContext'

const App = () => {
	const [userName, setUserName] = useState('')

	useEffect(() => {
		setUserName(window.localStorage.getItem('userName'))
	}, [])

	useEffect(() => {
		window.localStorage.setItem('userName', userName)
	}, [userName])

	return (
		<Router>
			<UserContext.Provider value={{ userName, setUserName }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='gallery' element={<Gallery />} />
					<Route path='menu' element={<Menu />} />
					<Route path='register' element={<Register />} />
					{/*TODO: Terms and Conditions*/}
				</Routes>
			</UserContext.Provider>
		</Router>
	)
}

export default App
