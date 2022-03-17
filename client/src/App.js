import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
	return (
		<>
			<header>
				<div class='main'>
					<Link to='/' class='logo'>
						<img src='logo1.png' />
					</Link>
					<ul>
						<li class='active'>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='#'>Menu</Link>
							<ul>
								<li>
									<Link to='/food'>Food</Link>
								</li>
								<li>
									<Link to='/beverages'>Beverages</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='/gallery'>Gallery</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</ul>
				</div>
				<div class='title'>
					<h1>FAST 'N FRESH</h1>
				</div>
				<div class='button'>
					<Link to='/menu' class='btn'>
						ORDER NOW
					</Link>
				</div>
			</header>
		</>
	);
}

export default App;
