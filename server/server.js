const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: 'admin',
	password: 'Password',
	database: 'fast_n_fresh',
	host: 'fast-n-fresh.cfp2pum9jqtd.us-east-1.rds.amazonaws.com',
	port: '3306',
});

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/signup', (req, res) => {
	const name = req.body.name;
	const mobile = req.body.mobile;
	const email = req.body.email;
	const password = req.body.password;

	db.query(
		'INSERT INTO users(email, password, name, mobile) VALUES (?, ?, ?, ?)',
		[email, password, name, mobile],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('Values Inserted!');
			}
		}
	);
});

app.listen(5000, () => {
	console.log('Listening at port 5000...');
});
