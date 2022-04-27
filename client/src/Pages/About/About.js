import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {
	AppBar,
	Box,
	CardActions,
	Card,
	CircularProgress,
	Grid,
	IconButton,
	Toolbar,
	Typography,
	CardContent,
	CardMedia,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'

const PeopleCard = (props) => {
	const [elevation, setElevation] = useState(3)

	return (
		<>
			<Card
				variant='elevation'
				sx={{ maxWidth: 350, minWidth: 300, border: 1, borderColor: 'lightgrey', borderRadius: '2%' }}
				onMouseOver={() => setElevation(10)}
				onMouseOut={() => setElevation(3)}
				elevation={elevation}
			>
				<CardContent>
					<Typography variant='h5' component='div'>
						{props.name}
					</Typography>
				</CardContent>
				<CardMedia
					component='img'
					height='350vh'
					image={props.image}
					title={props.name}
					alt={props.name}
					sx={{ marginLeft: '2%', width: '96%', borderRadius: '2%' }}
				/>
				<CardActions>
					<CardContent>
						<Typography variant='body2' color='text.secondary'>
							{props.details}
							<br />
							<br />
						</Typography>
					</CardContent>
				</CardActions>
				<CardActions>
					<a href={props.instagram} rel='noreferrer' target='_blank'>
						<IconButton>
							<InstagramIcon />
						</IconButton>
					</a>
					<a href={props.git} rel='noreferrer' target='_blank'>
						<IconButton>
							<GitHubIcon />
						</IconButton>
					</a>
					<a
						href={`https://api.whatsapp.com/send/?phone=${props.phone.replace(/[^\w\s]/gi, '').replace(/ /g, '')}&text=`
							.concat(encodeURI(`Hello ${props.name}, I reached here from your Fast 'N Fresh website.`))
							.concat('&app_absent=0')}
						rel='noreferrer'
						target='_blank'
					>
						<IconButton>
							<WhatsAppIcon />
						</IconButton>
					</a>
					<a
						href={`mailto:${props.email}?subject=Fast%20'N%20Fresh&body=`.concat(
							encodeURI(`Hello ${props.name}, I reached here from your Fast 'N Fresh website.`)
						)}
						rel='noreferrer'
						target='_blank'
					>
						<IconButton>
							<EmailIcon />
						</IconButton>
					</a>
				</CardActions>
			</Card>
		</>
	)
}

const About = () => {
	const [devs, setDevs] = React.useState(null)

	const getDevsFromServer = async () => {
		await Axios.get('http://localhost:5000/aboutus')
			.then(({ data }) => {
				setDevs(data)
				console.log(data)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		getDevsFromServer()
	}, [])

	return (
		<>
			{devs ? (
				<>
					<Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
						<Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
							<AppBar
								position='sticky'
								sx={{
									backgroundColor: 'orange',
									maxHeight: '7vh',
									maxWidth: '98%',
									justifyContent: 'center',
									marginLeft: '1%',
									marginTop: '0.5vh',
								}}
							>
								<Toolbar>
									<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
										<PeopleAltIcon fontSize='large' />
									</IconButton>
									<Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
										About Us
									</Typography>
								</Toolbar>
							</AppBar>
						</Box>
						<Grid
							container
							sx={{ flexGrow: 1, maxWidth: '95%', marginLeft: '2.5%' }}
							justifyContent='center'
							alignItems='center'
							mt={'5%'}
							mb={'2.5%'}
							columnGap={5}
							rowGap={5}
						>
							{devs.map((item) => (
								<Grid item container justifyContent='center' xs={3} key={item.id} sx={{ minWidth: 300 }}>
									<PeopleCard
										image={item.image}
										name={item.name}
										details={item.details}
										phone={item.phone}
										email={item.email}
										instagram={item.instagram}
										git={item.git}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</>
			) : (
				<div
					style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '100vh', width: '100vw' }}
				>
					<CircularProgress style={{ justifyContent: 'center', position: 'fixed', top: '50%' }} size={100} />
				</div>
			)}
		</>
	)
}

export default About
