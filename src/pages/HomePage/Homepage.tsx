import { Box, Container } from '@mui/material'
import React from 'react'
import MovieCarousel from './MovieCarousel'
import Advertisement from './Advertisement'
import NewsSection from './NewsSection'
import ComingSoon from './ComingSoon'

const Homepage = () => {
  return (
    <Container className='homepage' maxWidth={false} sx={{maxWidth:1300,display:'flex',flexDirection:'column',gap: { xs: '40px', sm: '80px', md: '116px '},alignItems:'center'}} disableGutters>
      <MovieCarousel/>
      <Advertisement/>
      <NewsSection/>
      <ComingSoon/>
    </Container>
  )
}
export default Homepage

