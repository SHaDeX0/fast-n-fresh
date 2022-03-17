import React from 'react';
import './Register.css';

const Regester = () => {
	return (
		<div class='SignInPage'>
			<div class='Regester'>
				<div class='button-box'>
					<div id='bttn'></div>
					<button type='button' class='toggle-btn'>
						Log In
					</button>
					<button type='button' class='toggle-btn'>
						Sign Up
					</button>
				</div>
				<form id='login' class='input-group'>
					<input
						type='text'
						class='input-field'
						placeholder='User Id'
						required
					/>
					<input
						type='text'
						class='input-field'
						placeholder='Enter Password'
						required
					/>
					<input type='checkbox' class='check-box' />
					<span>Remember Me</span>
					<button type='Submit' class='submit-btn'>
						Log In
					</button>
				</form>

				{/* <form id="signup" class="input-group"> 
				<input type="text" class="input-field" placeholder="User Id" required />
				<input type="email" class="input-field" placeholder="Email Id" required />
				<input type="text" class="input-field" placeholder="Enter Password" required />					
				<input type="checkbox" class="check-box" /><span>I agree to the Terms and Conditions</span>
				<button type="Submit" class="submit-btn">Sign Up</button>
			</form> */}
			</div>
		</div>
	);
};

export default Regester;
