import React from 'react';
import './Register.css';

const Regester = () => {
	return (
		<body>
		<div class='SignInPage'>
			<div class='form-box'>
				<div class='button-box'>
					<div id='bttn'></div>
					<button type='button' class='toggle-btn'onclick="login()">Log In</button>
					<button type='button' class='toggle-btn'onclick="signup()">Sign Up</button>
				</div>
				<form id='login' class='input-group'>
					<input type='text'class='input-field'placeholder='User Id'required/>
					<input type='text'class='input-field'placeholder='Enter Password'required/>
					<input type='checkbox' class='check-box' />
					<span>Remember Me</span>
					<button type='Submit' class='submit-btn'>Log In</button>
				</form>

				<form id="signup" class="input-group"> 
					<input type="text" class="input-field" placeholder="User Id" required />
					<input type="email" class="input-field" placeholder="Email Id" required />
					<input type="text" class="input-field" placeholder="Enter Password" required />					
					<input type="checkbox" class="check-box" /><span>I agree to the Terms and Conditions</span>
					<button type="Submit" class="submit-btn">Sign Up</button>
				</form>
			</div>
		</div>
		
		
			{/* <script>
				var x = document.getElementById("login");
				var y = document.getElementById("signup");
				var z = document.getElementById("bttn");

				function signup(){
					x.style.left = "-400px";
					y.style.left = "50px";
					z.style.left = "110px";
				}
				
				function login(){
					x.style.left = "50px";
					y.style.left = "450px";
					z.style.left = "0px";
				}
			</script>  */}

		</body>

	);
};

export default Regester;
