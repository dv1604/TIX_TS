import { Container, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import Header from './sections/Header'
import { Search } from '@mui/icons-material'
import NewsCard from './NewsCard'
import FilteredArticles from './sections/FilteredArticles'

const News = () => {
  return (
    <Container className='news-section' disableGutters 
    maxWidth={false} 
    sx={{
        padding:'20px 72px 20px 72px'
    }}>
        
        <Header/>
        <FilteredArticles/>
    </Container>
  )
}

export default News
