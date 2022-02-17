const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: 'root',
	password: 'root',
	database: 'fast-n-fresh',
	host: 'localhost',
});

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.listen(5000, () => {
	console.log('Listening at port 5000...');
});
