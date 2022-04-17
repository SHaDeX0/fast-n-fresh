import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery'
import Menu from './Pages/Menu'
import Register from './Pages/Register/Register'
import { UserContext } from './UserContext'

const App = () => {
	const [userName, setUserName] = useState('')

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
