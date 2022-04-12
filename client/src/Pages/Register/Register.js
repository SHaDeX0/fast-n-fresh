import React from 'react';
import './Register.css';

const Register = () => {
	const [username, setUsername] = React.useState('');

	const handleChange = event => {
		setUsername(event.target.value);
		console.log(username);
	};

	const x = document.getElementById('login');
	const y = document.getElementById('signup');
	const z = document.getElementById('bttn');

	function signup() {
		x.style.left = '-400px';
		y.style.left = '50px';
		z.style.left = '110px';
	}

	function login() {
		x.style.left = '50px';
		y.style.left = '450px';
		z.style.left = '0px';
	}

	return (
		<>
			<div className='SignInPage'>
				<div className='form-box'>
					<div className='button-box'>
						<div id='bttn'></div>
						<button
							type='button'
							className='toggle-btn'
							onClick={login}
						>
							Log In
						</button>
						<button
							type='button'
							className='toggle-btn'
							onClick={signup}
						>
							Sign Up
						</button>
					</div>
					<form id='login' className='input-group'>
						<input
							type='text'
							className='input-field'
							placeholder='User Id'
							required
							onChange={handleChange}
						/>
						<input
							type='text'
							className='input-field'
							placeholder='Enter Password'
							required
						/>
						<input type='checkbox' className='check-box' />
						<span>Remember Me</span>
						<button type='Submit' className='submit-btn'>
							Log In
						</button>
					</form>

					<form id='signup' className='input-group'>
						<input
							type='text'
							className='input-field'
							placeholder='User Id'
							required
						/>
						<input
							type='email'
							className='input-field'
							placeholder='Email Id'
							required
						/>
						<input
							type='text'
							className='input-field'
							placeholder='Enter Password'
							required
						/>
						<input type='checkbox' className='check-box' />
						<span>I agree to the Terms and Conditions</span>
						<button type='Submit' className='submit-btn'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
