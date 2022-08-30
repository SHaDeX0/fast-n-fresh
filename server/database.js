import mysql from 'mysql'

const db = mysql.createConnection({
	user: 'admin',
	password: 'Password',
	database: 'fast_n_fresh',
	host: 'fast-n-fresh.cfp2pum9jqtd.us-east-1.rds.amazonaws.com',
	port: '3306',
})

export default db
