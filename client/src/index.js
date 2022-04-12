import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery';
import Menu from './Pages/Menu';
import Register from './Pages/Register/Register';
import reportWebVitals from './reportWebVitals';

render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='about' element={<About />} />
			<Route path='gallery' element={<Gallery />} />
			<Route path='menu' element={<Menu />} />
			<Route path='register' element={<Register />} />
			//TODO: Terms and Conditions
		</Routes>
	</Router>,
	document.getElementById('root')
);

reportWebVitals();
