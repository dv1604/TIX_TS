import { Box, Container, Typography,Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const MovieDetails = () => {

    const movie = useSelector((state:RootState)=>{
        return state.movie.selectedMovie
    })

  return (
    <Container
    disableGutters
    maxWidth={false}
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:4,
        mt:10
    }}>
        <Box
        component='img'
        src={movie.image}
        sx={{
            width:413,
            height:364,
            borderRadius:'10px',
            objectFit:'cover'
        }}/>
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            gap:2
        }}>
            <Typography
            variant='h3'
            sx={{
                letterSpacing:'0.8px'
            }}>
                {movie.name}
            </Typography>
            <Grid container 
            spacing={2} 
            sx={{
                color:'grey.900'
            }}>
                <Grid item xs={6} 
                sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    gap: 1.5 }}>
                    <Typography>
                        Genre
                    </Typography>
                    <Typography>
                        Duration
                    </Typography>
                    <Typography>
                        Director
                    </Typography>
                    <Typography>
                        Age Rating
                    </Typography>
                </Grid>
                <Grid item xs={6} 
                sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    gap: 1.5 }}>
                <Typography>
                        Action
                    </Typography>
                    <Typography>
                        2h 28min
                    </Typography>
                    <Typography>
                        John Watts
                    </Typography>
                    <Typography>
                        SU
                    </Typography>
                </Grid>
            </Grid>

            </Box>
    </Container>
  )
}

export default MovieDetails
