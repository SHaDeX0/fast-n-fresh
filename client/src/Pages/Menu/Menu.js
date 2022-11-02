import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import CustomCard from './CustomCard'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { Context } from '../../Context'

const Menu = () => {
	const { menuItems, setMenuItems, userEmail, items } = useContext(Context)

	useEffect(() => {
		Axios.get('http://localhost:5000/menu')
			.then(res => setMenuItems(res.data))
			.catch(err => console.log(err))
	}, [setMenuItems])

	useEffect(() => {
		Axios.post('http://localhost:5000/cart', { email: userEmail, items: items })
			.then(res => {
				if (res.data.err) console.log(res.data.err)
				else {
					console.log(items)
					console.log('successfully added to cart')
				}
			})
			.catch(err => console.log(err))
	}, [items, userEmail])

	return (
		<>
			<Box position='sticky' sx={{ justifyContent: 'center', alignItems: 'center', p: 2 }}>
				<AppBar
					position='sticky'
					sx={{
						backgroundColor: 'orange',
						maxHeight: '7vh',
						maxWidth: '98%',
						justifyContent: 'center',
						marginLeft: '1%',
						marginTop: '0.5vh',
						margin: '0.5 vh',
					}}
				>
					<Toolbar>
						<Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
							OUR MENU
						</Typography>
						<Link to='/cart'>
							<IconButton>
								<ShoppingCartIcon />
							</IconButton>
						</Link>
						<IconButton>
							<AccountCircleRoundedIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>

			<Grid container sx={{ maxWidth: '98%', marginLeft: '3%' }}>
				{menuItems ? (
					menuItems.map(item => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ minHeight: 180, minWidth: 300 }}>
							<CustomCard id={item.id} image={item.image} name={item.name} desc={item.description} item={item} />
							<br />
						</Grid>
					))
				) : (
					<div
						style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '100vh', width: '100vw' }}
					>
						<CircularProgress
							style={{ color: 'tomato', justifyContent: 'center', position: 'fixed', top: '50%' }}
							size={100}
						/>
					</div>
				)}
			</Grid>
		</>
	)
}

export default Menu
