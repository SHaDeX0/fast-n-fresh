import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createConnection({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
})

console.log(process.env)

export default db
