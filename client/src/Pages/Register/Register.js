import React from 'react';
import './Register.css';
import Axios from 'axios';

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
		x.style.left = '-25em';
		y.style.left = '3.125em';
		z.style.left = '6.875em';
	}

	function login() {
		x.style.left = '3.125em';
		y.style.left = '28.125em';
		z.style.left = '0px';
	}
	return (
		
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
							type='email'
							className='input-field'
							placeholder='E-mail Id'
							required
							onChange={handleChange}
						/>
						<input
							type='text'
							className='input-field'
							placeholder='Enter Password'
							required
						/>
						<button type='Submit' className='submit-btn'>
							Log In
						</button>
					</form>

					<form id='signup' className='input-group'>
						<input
							type='text'
							className='input-field'
							placeholder='Name'
							required
						/>
						<input
							type='number'
							className='input-field'
							placeholder='Phone Number'
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
						<input
							type='text'
							className='input-field'
							placeholder='Re-Enter Password'
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
		
	);
};

export default Register;
