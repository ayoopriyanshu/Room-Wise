import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const EditBooking = () => {
  const [userEmail, setEmail] = useState('');
  const [roomType, setRoomType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3333/bookings/${id}`)
      .then((response) => {
        setEmail(response.data.userEmail);
        setRoomType(response.data.roomType);
        setStartTime(response.data.startTime);
        setEndTime(response.data.endTime);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }, [id]);

  const handleEditBooking = () => {
    const data = {
      userEmail,
      roomType,
      startTime,
      endTime
    };
    setLoading(true);
    axios
      .patch(`http://localhost:3333/bookings/${id}`, data)
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
          <input id="email-input" type="email" value={userEmail} onChange={(e) => setEmail(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div id="metric">
          <label>Type Room Tier A, B or C:  </label>
          <input type="text" value={roomType} onChange={(e) => setRoomType(e.target.value)} style={{ color: 'black' }} />
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
        <button id="btn-save" onClick={handleEditBooking}>Edit</button>
      </div>


    </div>
  )
}

export default EditBooking
