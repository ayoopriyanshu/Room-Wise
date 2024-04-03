import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CancelBooking = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCancelBooking = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3333/bookings/${id}`)
      .then((response) => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }

  return (
    <div id='make-booking-body'>
      <Link to='/'>
        <button id='back-button'>🔙</button>
      </Link>
      <div id="delete-booking">
        <h3 id="text-sure">Are You Sure You Want To Cancel The Booking?</h3>
        <button id="yes-btn" onClick={handleCancelBooking}>
          Yes
        </button>
      </div>
    </div>
  )
}

export default CancelBooking