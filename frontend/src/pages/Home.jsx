import React, { useState } from 'react';
import './style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import roomA from "../images/roomA.jpeg"
import roomB from "../images/roomB.jpeg"
import roomC from "../images/roomC.jpeg"
import menu from "../images/menu.png"
import { Link } from 'react-router-dom'

const Home = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [menuIcon, setMenuIcon] = useState('👈');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setMenuIcon(showDropdown ? '👈' : '👇');
    }

    return (
        <div id='body'>
            <div id='nav-bar'>
                <h1 id='head'>RoomWise🏨</h1>
                <div id='dropdown'>
                    <button onClick={toggleDropdown}><h1 style={{ fontSize: 37 }} id='head'>Menu{menuIcon}</h1></button>{showDropdown && (
                        <div id='dropdown-content'>
                            <a href="/bookings/booked"><button id='menu-btns'>Booked✅</button></a>
                        </div>
                    )}
                </div>
            </div>
            <div id='rooms-list'>
                <h4 id='sec-head'>AVAILABLE ROOMS</h4>
                <div id='img-container'>
                    <button id='left-room'>
                        <img src={roomA} alt="Room A" />
                    </button>
                    <button id='center-room'>
                        <img src={roomB} alt="Room B" />
                    </button>
                    <button id='right-room'>
                        <img src={roomC} alt="Room C" />
                    </button>
                </div>
                <div id='room-names'>
                    <h4 id='sec-head'>TIER A- Rs100/hr</h4><h4 id='sec-head'>TIER B- Rs80/hr</h4><h4 id='sec-head'>TIER C- Rs30/hr</h4>
                </div>

            </div>
            <div id='btns'>
                <a href="/bookings/create"><button id='btn'>✨Book Now✨</button></a>
            </div>

        </div>
    )
}

export default Home
