import db from '../database.js'

export const login = (req, res) => {
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
}

export const signup = (req, res) => {
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
		}
	)
}

export const menu = (req, res) => {
	db.query(`SELECT * FROM menu`, (err, result) => {
		if (err) {
			res.send({ err: err })
		} else {
			res.send(result)
		}
	})
}

export const aboutUs = (req, res) => {
	db.query(`SELECT * FROM about`, (err, result) => {
		if (err) {
			res.send({ err: err })
		} else {
			res.send(result)
		}
	})
}

export const addToCart = (req, res) => {
	let { items, email } = req.body
	items = JSON.stringify(items)

	db.query(`INSERT INTO cart VALUES(?, ?)`, [email, items], (err, result) => {
		if (!err) {
			res.json(result)
			return
		}

		db.query(`UPDATE cart SET items = ? WHERE email = ?`, [items, email], (err, result) => {
			if (err) res.json({ err: err })
			else res.send(result)
		})
	})
}

export const getCart = async (req, res) => {
	const { email } = req.body

	await db.query(`SELECT * FROM cart WHERE email = ?`, [email], (err, result) => {
		if (err) {
			res.send({ err: err })
		} else {
			res.send({ cart: result[0] })
		}
	})
}
