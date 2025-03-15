import { ArrowDropDown, ArrowDropUp, Search } from '@mui/icons-material'
import { Container, FormControl, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { movieActions } from '../../../store/features/Movie/MovieSlice'
import FilterDropdown from '../../../components/FilterDropdown'

const Filters = () => {
    
    const dispatch = useDispatch();
    const { selectedStudio, selectedChain, selectedMovie } = useSelector((state: RootState) => {
        return state.movie
    })

    // studio filter handlers
    const studios = ['XXI', '2D', 'CGV', 'GOLD CLASS 2D', 'VELVET 2D', 'CINEPOLIS', 'REGULAR 2D'];
    const handleStudio = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        dispatch(movieActions.setStudio(value ?? selectedStudio));
    }

    // sort filter handlers
    const sort = ['Alphabetically', 'Nearest', 'Cheapest'];
    const [sortOrder,setSortOrder] = useState('Nearest');
    const handleSort = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        setSortOrder(value ?? sortOrder)
    }

    // cinema filter handlers
    const cinema = ['XXI', 'CGV', 'CINEPOLIS'];
    const handleCinema = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as string;
        dispatch(movieActions.setChain(value ?? selectedChain));
    }


    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap:6,
                width:'100%'
            }}>

            {/* Search bar for locations */}
            <TextField
                variant='outlined'
                placeholder='Search Theatres'
                sx={{
                    width: 400,
                    height: 44,
                    cursor: 'pointer',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'grey',
                            cursor: 'pointer'
                        },
                        '&:hover fieldset': {
                            bgcolor: 'rgba(0,0,0,0.1)',
                            borderColor: 'rgba(0,0,0,0.2)',
                            cursor: 'pointer !important'
                        },
                        '&.Mui-focused fieldset': {
                            bgcolor: 'rgba(0,0,0,0.1)',
                            borderColor: 'rgba(0,0,0,0.2)',
                            cursor: 'pointer'
                        }
                    }
                }}
                inputProps={{
                    'aria-label': 'search'
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Search />
                        </InputAdornment>)
                }}
            />

            {/* Filter Dropdowns */}
            <Container
            disableGutters
            maxWidth={false}
            sx={{
                display:'flex',
                gap:5

            }}>
                {/* StudioFilter */}
                <FilterDropdown
                    value={selectedStudio}
                    onChange={handleStudio}
                    options={studios}
                    placeholder='Studio'
                />
                {/* Sorting Filter */}
                <FilterDropdown
                    value={sortOrder}
                    onChange={handleSort}
                    options={sort}
                    placeholder='Sort'
                />
                {/* Cinema Filter */}
                <FilterDropdown
                    value={selectedChain}
                    onChange={handleCinema}
                    options={cinema}
                    placeholder='Cinema'
                />
            </Container>
        </Container>
    )
}

export default Filters
