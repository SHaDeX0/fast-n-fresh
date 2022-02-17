import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Beverages from './Pages/Beverages';
import Food from './Pages/Food';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery';
import Menu from './Pages/Menu';
import SignIn from './Pages/SignIn/SignIn';
import reportWebVitals from './reportWebVitals';

render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='food' element={<Food />} />
			<Route path='beverages' element={<Beverages />} />
			<Route path='about' element={<About />} />
			<Route path='gallery' element={<Gallery />} />
			<Route path='menu' element={<Menu />} />
			<Route path='signup' element={<SignIn />} />
			<Route path='login' element={<SignIn />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);

reportWebVitals();
