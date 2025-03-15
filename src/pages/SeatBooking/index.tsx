import React from 'react'
import Heading from './sections/Heading'
import { Container } from '@mui/material'
import Selection from './sections/Selection'
import SeatGrid from './sections/SeatGrid'

const SeatBooking = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        padding: '0px 72px',
        overflow: 'hidden',
      }}>

      <Heading />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display:'flex',
          flexDirection:'column',
          margin:'auto',
          padding:"70px 100px",
        }}
      >
        <Selection />
        <SeatGrid/>
      </Container>
    </Container>
  )
}

export default SeatBooking
