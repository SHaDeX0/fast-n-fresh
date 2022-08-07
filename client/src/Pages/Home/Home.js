import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import HomeIcon from '@mui/icons-material/Home'
import './Home.css'

const Home = () => {
	const { userName, setUserName } = useContext(UserContext)
	let navigate = useNavigate()

	const logout = () => {
		setUserName('')
	}

	const linkToMenu = () => {
		navigate('/menu')
	}

	return (
		<>
			<header
				style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./background.jpg)' }}
			>
				<div className='main'>
					<Link to='/' className='logo'>
						<img src='logo5.png' alt='fast-n-fresh-logo' />
					</Link>
					<ul>
						<li className='active'>
							<Link to='/'>
								<HomeIcon />
							</Link>
						</li>
						<li>
							<Link to='/menu'>Menu</Link>
						</li>
						<li>
							<Link to='/gallery'>Gallery</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>

						{userName ? (
							<>
								<li>
									<Link to='/login' onClick={() => logout()}>
										Logout
									</Link>
								</li>
								<li>{userName}</li>
							</>
						) : (
							<>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/signup'>Sign Up</Link>
								</li>
							</>
						)}
					</ul>
				</div>
				<div className='title'>
					<h1 style={{ fontSize: '4.375em' }}>FAST 'N FRESH</h1>
				</div>
				<button className='button' onClick={() => linkToMenu()}>
					ORDER NOW
				</button>
			</header>
		</>
	)
}

export default Home
