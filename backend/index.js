import express, { request, response } from "express";
import { PORT, dbURL } from "./configure.js";
import mongoose from 'mongoose';
import { Booking } from "./models/booking_model.js";
import bookingRoute from './routes/booking_routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/bookings', bookingRoute);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(333).send('Welcome to RoomWise')
});

mongoose
    .connect(dbURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });