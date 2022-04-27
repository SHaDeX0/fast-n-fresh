import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Grid, ImageList, ImageListItemBar, ImageListItem } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

const ShowImages = props => {
	return (
		<ImageList sx={{ width: 500, height: 450 }}>
			<ImageListItem key={props.img}>
				<img
					src={`${props.img}?w=248&fit=crop&auto=format`}
					srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
					alt={props.title}
					loading='lazy'
				/>
				<ImageListItemBar
					title={props.title}
					actionIcon={
						<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${props.title}`}>
							<InfoIcon />
						</IconButton>
					}
				/>
			</ImageListItem>
		</ImageList>
	)
}

const Gallery = () => {
	const [images, setImages] = useState(null)

	const getImages = async () => {
		await Axios.get('http://localhost:5000/gallery')
			.then(res => {
				setImages(res.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		// getImages()
	}, [])

	return (
		<Grid container>
			{images ? (
				images.map(item => (
					<Grid item>
						<ShowImages img={item.image} title={item.title} />
					</Grid>
				))
			) : (
				<h1>Loading...</h1>
			)}
		</Grid>
	)
}
export default Gallery
