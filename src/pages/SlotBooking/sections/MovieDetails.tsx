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
        flexDirection:{xs:'row',md:'column'},
        alignItems:{xs:'center',md:'flex-start'},
        justifyContent:{xs:'space-between',md:'flex-start'},
        flexWrap:'wrap',
        gap:4,
        mt:10
    }}>
        <Box
        component='img'
        src={movie.image}
        sx={{
            width:{xs:410,md:320,lg:410},
            height:{xs:250,md:300,lg:364},
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
