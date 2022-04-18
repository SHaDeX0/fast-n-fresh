import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Home = () => {
	const { userName, setUserName } = useContext(UserContext)

	const logout = () => {
		setUserName('')
	}

	return (
		<>
			<header>
				<div className='main'>
					<Link to='/' className='logo'>
						<img src='logo5.png' alt='fast-n-fresh-logo' />
					</Link>
					<ul>
						<li className='active'>
							<Link to='/'>Home</Link>
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
									<Link
										to='/register'
										onClick={() => logout()}
									>
										Logout
									</Link>
								</li>
								<li>{userName}</li>
							</>
						) : (
							<>
								<li>
									<Link to='/register'>Login</Link>
								</li>
								<li>
									<Link to='/register'>Sign Up</Link>
								</li>
							</>
						)}
					</ul>
				</div>
				<div className='title'>
					<h1>FAST 'N FRESH</h1>
				</div>
				<div className='button'>
					<Link to='/menu' className='btn'>
						ORDER NOW
					</Link>
				</div>
			</header>
		</>
	)
}

export default Home
