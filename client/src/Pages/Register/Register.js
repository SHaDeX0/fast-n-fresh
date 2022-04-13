import { React, useState } from 'react';
import './Register.css';
import Axios from 'axios';

const Register = () => {
	const x = document.getElementById('login');
	const y = document.getElementById('signup');
	const z = document.getElementById('bttn');

	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const displayInfo = () => {
		console.log(
			name +
				' ' +
				mobile +
				' ' +
				email +
				' ' +
				password +
				' ' +
				rePassword
		);

		Axios.post('http://localhost:5000/signup', {
			name: name,
			mobile: mobile,
			email: email,
			password: password,
		}).then(res => {
			console.log('values inserted ' + res);
		});
	};

	const signup = () => {
		if (x && y && z) {
			x.style.left = '-25em';
			y.style.left = '3.125em';
			z.style.left = '6.875em';
		}
	};

	const login = () => {
		if (x && y && z) {
			x.style.left = '3.125em';
			y.style.left = '28.125em';
			z.style.left = '0';
		}
	};

	return (
		<div className='SignInPage'>
			<div className='form-box'>
				<div className='button-box'>
					<div id='bttn'></div>
					<button
						type='button'
						className='toggle-btn'
						onClick={() => login()}
					>
						Log In
					</button>
					<button
						type='button'
						className='toggle-btn'
						onClick={() => signup()}
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
						onChange={event => {
							setEmail(event.target.value);
						}}
					/>
					<input
						type='text'
						className='input-field'
						placeholder='Enter Password'
						required
						onChange={event => {
							setPassword(event.target.value);
						}}
					/>
					<button
						type='Submit'
						className='submit-btn'
						onClick={displayInfo}
					>
						Log In
					</button>
				</form>

				<form id='signup' className='input-group'>
					<input
						type='text'
						className='input-field'
						placeholder='Name'
						required
						onChange={event => {
							setName(event.target.value);
						}}
					/>
					<input
						type='number'
						className='input-field'
						placeholder='Phone Number'
						required
						onChange={event => {
							setMobile(event.target.value);
						}}
					/>
					<input
						type='email'
						className='input-field'
						placeholder='Email Id'
						required
						onChange={event => {
							setEmail(event.target.value);
						}}
					/>
					<input
						type='text'
						className='input-field'
						placeholder='Enter Password'
						required
						onChange={event => {
							setPassword(event.target.value);
						}}
					/>
					<input
						type='text'
						className='input-field'
						placeholder='Re-Enter Password'
						required
						onChange={event => {
							setRePassword(event.target.value);
						}}
					/>
					<input type='checkbox' className='check-box' />
					<span>I agree to the Terms and Conditions</span>
					<button
						type='Submit'
						className='submit-btn'
						onClick={displayInfo}
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
