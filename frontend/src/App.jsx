import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CancelBooking from './pages/CancelBooking.jsx'
import MakeBooking from './pages/MakeBooking.jsx'
import EditBooking from './pages/EditBooking.jsx'
import ShowBooking from './pages/ShowBooking.jsx'
import Booked from './pages/Booked.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings/create" element={<MakeBooking />} />
      <Route path="/bookings/cancel/:id" element={<CancelBooking />} />
      <Route path="/bookings/show/:id" element={<ShowBooking />} />
      <Route path="/bookings/edit/:id" element={<EditBooking />} />
      <Route path="/bookings/booked" element={<Booked />} />
    </Routes>
  )
};

export default App;