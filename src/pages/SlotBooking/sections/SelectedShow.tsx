import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useNavigate } from 'react-router'

const SelectedShow = () => {
    const navigate = useNavigate()
    const {selectedMovie} = useSelector((state: RootState) => state.movie)
    const {
        movieName,
        theatreName,
        city,
        slots,
        theatreType,
        selectedTime,
        ticketPrice,
        totalAmount
    } = useSelector((state: RootState) => state.slots);

    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.toLocaleString('default', { weekday: 'long' });
    const date = today.getDate();
    const year = today.getFullYear();

    const isMovieChanged = selectedMovie.name === movieName;
    console.log(selectedMovie.name, movieName, isMovieChanged);
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: isMovieChanged ? 'flex' : 'none',
                flexDirection: 'column',
                padding: '35px 20px',
                border: '1px solid',
                borderColor: 'grey.600',
                borderRadius: '10px',
                gap: '30px',
                width: 413,
                margin: 0,
            }}
        >
            <Typography
                sx={{
                    fontSize: '26px',
                    fontWeight: 700,
                    color: 'grey.900'
                }}
            >
                {theatreName}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <Typography>
                    {day}, {date} {month} {year}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant='h3'
                        sx={{
                            textTransform: 'uppercase'
                        }}
                    >
                        {theatreType}
                    </Typography>
                    <Typography variant='h3'>
                        {selectedTime}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: 'grey.400',
                        fontSize: '12px'
                    }}
                >
                    *Seat selection can be done after this.
                </Typography>
            </Box>

            <Button
                sx={{
                    textTransform: 'uppercase',
                    bgcolor: 'royalblue.main',
                    color: 'rgba(255, 190, 0, 1)',
                    fontSize: '24px',
                    fontWeight: 500,
                    borderRadius: '10px',
                    padding: '6px 6px',
                }}
                onClick={() => navigate('/seat')}
            >
                Buy Now
            </Button>
        </Container>
    );
}

export default SelectedShow;
