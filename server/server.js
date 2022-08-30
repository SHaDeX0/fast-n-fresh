const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const images = require('./images.json')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
	user: 'admin',
	password: 'Password',
	database: 'fast_n_fresh',
	host: 'fast-n-fresh.cfp2pum9jqtd.us-east-1.rds.amazonaws.com',
	port: '3306',
})

app.post('/getUser', (req, res) => {
	const { email, password } = req.body

	db.query(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, result) => {
		if (err) {
			res.send({ err: err })
		} else if (result.length > 0) {
			res.send(result)
		} else {
			res.send({ message: 'Wrong email or password!' })
		}
	})
})

app.post('/signup', (req, res) => {
	const { name, mobile, email, password } = req.body

	db.query(
		'INSERT INTO users(email, password, name, mobile) VALUES (?, ?, ?, ?)',
		[email, password, name, mobile],
		(err, result) => {
			if (err) {
				res.send({ err: 'User already exists!' })
			} else if (result) {
				db.query(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, result) => {
					if (err) {
						res.send({ err: err })
					} else if (result.length > 0) {
						res.send(result)
					} else {
						res.send({ message: 'Wrong email or password!' })
					}
				})
			} else {
				res.send({ message: 'User already exists!' })
			}
		},
	)
})

app.get('/menu', (req, res) => {
	db.query(`SELECT * FROM menu`, (err, result) => {
		if (err) {
			res.send({ err: err })
		} else {
			res.send(result)
		}
	})
})

app.get('/aboutus', (req, res) => {
	db.query(`SELECT * FROM about`, (err, result) => {
		if (err) {
			res.send({ err: err })
		} else {
			res.send(result)
		}
	})
})

app.get('/gallery', (req, res) => {
	res.send(images)
})

app.listen(5000, () => {
	console.log('Listening at port 5000...')
})
