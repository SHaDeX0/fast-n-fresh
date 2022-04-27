import { React, useContext, useEffect, useState } from 'react'
import './Register.css'
import Axios from 'axios'
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
	const { setUserName, setUserEmail } = useContext(UserContext)

	const nav = useNavigate()

	const [name, setName] = useState('')
	const [mobile, setMobile] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePassword] = useState('')
	// TODO Encrypt password

	useEffect(() => {
		if (props.load === 'login') return
		signup()
	}, [props])

	const postUser = () => {
		if (password !== rePassword) {
			alert("Passwords don't match!")
			return
		}
		if (!document.getElementById('tAndC').checked) {
			alert('Please agree to our Terms and Conditions!')
			return
		}
		Axios.post('http://localhost:5000/signup', {
			name: name,
			mobile: mobile,
			email: email,
			password: password,
		})
			.then((res) => {
				if (res.data.err) {
					alert(res.data.err)
				} else if (res.data.message) {
					alert(res.data.message)
				} else {
					console.log(res.data)
					setUserName(res.data[0].name)
					setUserEmail(res.data[0].email)

					nav('/')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const getUser = () => {
		Axios.post('http://localhost:5000/getUser', {
			email: email,
			password: password,
		})
			.then((res) => {
				if (res.data.message) {
					console.log(res.data.message)
				} else if (res.data.err) {
					console.log(res.data.err)
				} else {
					setUserName(res.data[0].name)
					setUserEmail(res.data[0].email)
					nav('/')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const signup = () => {
		document.getElementById('login').style.left = '-20em'
		document.getElementById('signup').style.left = '3.125em'
		document.getElementById('bttn').style.left = '6.875em'
	}

	const login = () => {
		document.getElementById('login').style.left = '3.125em'
		document.getElementById('signup').style.left = '28.125em'
		document.getElementById('bttn').style.left = '0'
	}

	return (
		<div className='SignInPage'>
			<div className='form-box'>
				<div className='button-box'>
					<div id='bttn'></div>
					<button type='button' className='toggle-btn' onClick={() => login()}>
						Log In
					</button>
					<button type='button' className='toggle-btn' onClick={() => signup()}>
						Sign Up
					</button>
				</div>
				<form
					id='login'
					className='input-group'
					onSubmit={(e) => {
						e.preventDefault()
					}}
				>
					<input
						type='email'
						className='input-field'
						placeholder='E-mail Id'
						required
						onChange={(event) => {
							setEmail(event.target.value)
						}}
					/>
					<input
						type='password'
						className='input-field'
						placeholder='Enter Password'
						required
						onChange={(event) => {
							setPassword(event.target.value)
						}}
					/>
					<button type='Submit' className='submit-btn' onClick={getUser}>
						Log In
					</button>
				</form>

				<form
					id='signup'
					className='input-group'
					onSubmit={(e) => {
						e.preventDefault()
					}}
				>
					<input
						type='text'
						className='input-field'
						placeholder='Name'
						required
						onChange={(event) => {
							setName(event.target.value)
						}}
					/>
					<input
						type='number'
						className='input-field'
						placeholder='Phone Number'
						required
						onChange={(event) => {
							setMobile(event.target.value)
						}}
					/>
					<input
						type='email'
						className='input-field'
						placeholder='E-mail Id'
						required
						onChange={(event) => {
							setEmail(event.target.value)
						}}
					/>
					<input
						type='password'
						className='input-field'
						placeholder='Enter Password'
						required
						onChange={(event) => {
							setPassword(event.target.value)
						}}
					/>
					<input
						type='password'
						className='input-field'
						placeholder='Re-Enter Password'
						required
						onChange={(event) => {
							setRePassword(event.target.value)
						}}
					/>
					<input id='tAndC' type='checkbox' className='check-box' />
					<span>I agree to the Terms and Conditions</span>
					<button type='Submit' className='submit-btn' onClick={postUser}>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
