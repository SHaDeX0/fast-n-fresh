import express from 'express'
import cors from 'cors'
import { login, signup, menu, aboutUs, addToCart } from './controllers/methods.js'
import images from './images.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/getUser', login)

app.post('/signup', signup)

app.get('/menu', menu)

app.get('/aboutus', aboutUs)

app.get('/gallery', async (req, res) => {
	res.send(images)
})

app.post('/cart', addToCart)

app.listen(5000, () => {
	console.log('Listening at port 5000...')
})
