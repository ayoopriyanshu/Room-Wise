import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const MakeBooking = () => {
  const [userEmail, setEmail] = useState('');
  const [roomType, setRoomType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBooking = () => {
    const data = {
      userEmail,
      roomType,
      startTime,
      endTime
    };
    setLoading(true);
    axios
      .post('http://localhost:3333/bookings', data)
      .then(() => {
        setLoading(false);
        navigate('/bookings/booked');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div id='make-booking-body'>
      <Link to='/'>
        <button id='back-button'>🔙</button>
      </Link>
      <div id="enter-value">
        <div id="metric">
          <label>Enter Email:  </label>
          <input type="email" value={userEmail} onChange={(e) => setEmail(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div id="metric">
          <label>Choose Room Type:  </label>
          <input type="radio" id="optionA" name="options" value={roomType} onChange={(e) => setRoomType(e.target.value)} style={{ color: 'black' }} />
          <label htmlFor="optionA">A </label>
          <input type="radio" id="optionB" name="options" value={roomType} onChange={(e) => setRoomType(e.target.value)} style={{ color: 'black' }} />
          <label htmlFor="optionB">B </label>
          <input type="radio" id="optionC" name="options" value={roomType} onChange={(e) => setRoomType(e.target.value)} style={{ color: 'black' }} />
          <label htmlFor="optionC">C </label>
        </div>
        <div id="metric">
          <label>Check-In: </label>
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div id="metric">
          <label>Check-Out: </label>
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} style={{ color: 'black' }} />
        </div>
      </div>
      <div id="save-btn">
        <button id="btn-save" onClick={handleSaveBooking}>Book Now</button>
      </div>


    </div>
  )
}

export default MakeBooking
