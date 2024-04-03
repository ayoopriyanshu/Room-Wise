import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';
import i from '../images/i.png';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Booked = () => {

    const [bookings, setBooking] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3333/bookings')
            .then((response) => {
                setBooking(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div id='booked-body'>
            <Link to='/'>
                <button id='back-button'>🔙</button>
            </Link>
            <div id='booked-top'>
                <button id='booked-head'>Your Bookings</button>
            </div>
            <table id='table'>
                <thead>
                    <tr>
                        <th id='row'>Number</th>
                        <th id='row'>Email</th>
                        <th id='row'>Room Type</th>
                        <th id='row'>Booked On</th>
                        <th id='row'>Duration(hrs)</th>
                        <th id='row'>More Details</th>
                        <th id='row'>Edit Details</th>
                        <th id='row'>Cancel Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking._id}>
                            <td id='row-data'>
                                {index + 1}
                            </td>
                            <td id='row-data'>
                                {booking.userEmail}
                            </td >
                            <td id='row-data'>
                                {booking.roomType}
                            </td>
                            <td id='row-data'>
                                {booking.startTime}
                            </td>
                            <td id='row-data'>
                                {booking.duration}
                            </td>
                            <td id='row-data'>
                                <button><Link to={`/bookings/show/${booking._id}`}>👀</Link></button>
                            </td>
                            <td id='row-data'>
                                <button><Link to={`/bookings/edit/${booking._id}`}>✏️</Link></button>
                            </td>
                            <td id='row-data'>
                                <button><Link to={`/bookings/cancel/${booking._id}`}>❌</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Booked