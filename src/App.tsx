import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Homepage from './pages/HomePage/Homepage'
import Footer from './components/Footer'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import MyTickets from './pages/MyTickets/index'
import { Box } from '@mui/material'
import News from './pages/News'
import NewsDetail from './pages/News/sections/NewsDetail'
import ComingSoonPage from './pages/ComingSoon'
import SlotBooking from './pages/SlotBooking'
import SeatBooking from './pages/SeatBooking'

const App = () => {

  const location = useLocation();

  // Scroll back at top whenever you change page
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])
  return (
    <>
      {/* Header (Fixed on Top) */}
      <Header />

      {/* Main Content Area (Between Header & Footer) */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          marginTop: '70px', 
          marginBottom:'50px'
        }}
      >
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/my-tickets/*' element={<MyTickets />} />
          <Route path='/news' element={<News/>} />
          <Route path='/news/:id' element={<NewsDetail/>} />
          <Route path='/coming-soon' element={<ComingSoonPage/>} />
          <Route path='/slots/:id' element={<SlotBooking/>} />
          <Route path='/seat' element={<SeatBooking/>} />
        </Routes>
      </Box>

      {/* Footer (Fixed on Bottom) */}
      <Footer />
    </>
  )
}

export default App
