const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

const db = mysql.createConnection({
	user: 'admin',
	password: 'Password',
	database: 'fast_n_fresh',
	host: 'fast-n-fresh.cfp2pum9jqtd.us-east-1.rds.amazonaws.com',
	port: '3306',
});

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.listen(5000, () => {
	console.log('Listening at port 5000...');
});
