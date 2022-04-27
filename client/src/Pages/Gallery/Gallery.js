import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Grid, ImageList, ImageListItemBar, ImageListItem } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

const ShowImages = props => {
	return (
		<ImageList sx={{ width: '40vw' }}>
			<ImageListItem>
				<img src={props.img} alt={props.title} loading='lazy' />
				<ImageListItemBar
					title={props.title}
					actionIcon={
						<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
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
		getImages()
	}, [])

	return (
		<Grid container>
			{images ? (
				(console.log(images),
				images.map(image => (
					<Grid item key={image.id}>
						<ShowImages img={image.images} title={image.title} />
					</Grid>
				)))
			) : (
				<h1>Loading...</h1>
			)}
		</Grid>
	)
}
export default Gallery
