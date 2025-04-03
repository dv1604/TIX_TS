import { Box, Container, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const DateSelection = () => {
    const generateUpcomingDates = () => {
        const today = new Date();
        return Array.from({ length: 8 }, (_, i) => {
            const date = new Date();
            date.setDate(today.getDate() + i);
            return {
                date: date.getDate(),
                day: date.toLocaleString('en-IN', { weekday: 'short' }),
                month: date.toLocaleString('en-IN', { month: 'short' }),
                disabled: i >= 5
            };
        });
    };

    const dates = generateUpcomingDates();

    const theme = useTheme();
    const isRegular = useMediaQuery(theme.breakpoints.down(1280))
    const isMobile = useMediaQuery(theme.breakpoints.down(565)); // sm and below
    const isLarge = useMediaQuery(theme.breakpoints.down(800)); // md to lg
    const isMedium = useMediaQuery(theme.breakpoints.down(600)); // md to lg

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '20px',
                width: '100%',
                borderBottom:'2px solid rgba(196, 196, 196, 1)',
                pb:'30px'
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                }}
            >
                schedule
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: 'grey.600'
                }}
            >
                Choose the cinema schedule you want to watch.
            </Typography>

            {/* Swiper */}
            <Container 
                disableGutters
                maxWidth={false}
                sx={{
                    position: 'relative',
                }}
            >
                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    slidesPerView={isMobile ? 2: isMedium ? 2 : isLarge ? 3 : isRegular ? 4 : 5}
                    navigation={{ nextEl: '.next-date', prevEl: '.prev-date' }}
                    spaceBetween={15}
                    style={{ width: '80%' }}
                >
                    {dates.map((date, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                minWidth: isMobile ? '100px' : 'auto',  // 🔹 Fix for auto width issue
                            }}
                        >
                            <Box
                                sx={{
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid',
                                    alignItems: 'center',
                                    borderColor: 'grey.500',
                                    borderRadius: '10px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 0.5,
                                        color: 'grey.600'
                                    }}
                                >
                                    <Typography>{date.date}</Typography>
                                    <Typography>{date.month}</Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 900,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {date.day}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Fix Navigation Button Colors & Size */}
                <IconButton
                    className='prev-date'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: {xs:-10, sm:10},
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        color: 'inherit',
                        '&.swiper-button-disabled': { color: 'grey.400' } // 🔹 Fix disabled color
                    }}
                >
                    <ArrowBackIosNew sx={{ fontSize: 28 }} />
                </IconButton>
                <IconButton
                    className='next-date'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: {xs:-10, sm:10},
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        color: 'inherit',
                        '&:hover': { bgcolor: 'primary.main' },
                        '&.swiper-button-disabled': { color: 'grey.400' } // 🔹 Fix disabled color
                    }}
                >
                    <ArrowForwardIos sx={{ fontSize: 28 }} />
                </IconButton>
            </Container>
        </Container>
    );
};

export default DateSelection;
