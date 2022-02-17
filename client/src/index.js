import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Beverages from './Beverages';
// import Food from './Food';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';

render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			{/* <Route path='food' element={<Food />} /> */}
			<Route path='beverages' element={<Beverages />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contact />} />
			<Route path='gallery' element={<Gallery />} />
			<Route path='menu' element={<Menu />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);

reportWebVitals();
