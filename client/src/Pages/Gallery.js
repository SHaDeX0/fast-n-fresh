// import Axios from 'axios'
// import * as React from 'react'
// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'
// import ImageListItemBar from '@mui/material/ImageListItemBar'
// import { Grid } from '@mui/material'

// import IconButton from '@mui/material/IconButton'
// import InfoIcon from '@mui/icons-material/Info'

// const Gallery = props => {
//   const [Images] = useState(null)

//   const Images = async () => {
//     await Axios.get('http://localhost:5000/gallery')
//       .then(res => {
//         setImages(res.data)
//       })
//       .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     getImages()
//   }, [])

//   return (
//     <Grid container>
// 		{Images ? (
//       <ImageList sx={{ width: 500, height: 450 }}>
//         <ImageListItem key={props.img}>
//           <img src={`${props.img}?w=248&fit=crop&auto=format`} srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={props.title} loading='lazy' />
//           <ImageListItemBar
//             title={props.title}
//             actionIcon={
//               <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${props.title}`}>
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       </ImageList>
//     )}
// 	</Grid>
//   )
// }
// export default Gallery
