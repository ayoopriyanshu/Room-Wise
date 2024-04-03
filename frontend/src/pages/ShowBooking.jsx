import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const ShowBooking = () => {
  const [bookings, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3333/bookings/${id}`)
      .then((response) => {
        setBooking(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])
  return (
    <div id='show-booking-body'>
      <Link to='/'>
        <button id='back-button'>🔙</button>
      </Link>
      <div id='info-block'>
        <div>
          <span id='info-type'>Id:</span>
          <span id='info-type'>{bookings._id}</span>

        </div>
        <div>
          <span id='info-type'>Hotel:</span>
          <span id='info-type'>{bookings.hotel}</span>

        </div>
        <div>
          <span id='info-type'>Email:</span>
          <span id='info-type'>{bookings.userEmail}</span>

        </div>
        <div>
          <span id='info-type'>Start Time:</span>
          <span id='info-type'>{bookings.startTime}</span>

        </div>
        <div>
          <span id='info-type'>End Time:</span>
          <span id='info-type'>{bookings.endTime}</span>

        </div>
        <div>
          <span id='info-type'>Duration:</span>
          <span id='info-type'>{bookings.duration}</span>

        </div>
        <div>
          <span id='info-type'>Room Type:</span>
          <span id='info-type'>{bookings.roomType}</span>

        </div>
        <div>
          <span id='info-type'>Price:</span>
          <span id='info-type'>{bookings.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ShowBooking