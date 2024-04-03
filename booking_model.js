import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    hotel: {
        type: String
    },
    roomNumber: {
        type: Number
    },
    roomType: {
        type: String,
        enum: ["A", "B", "C"],
        required: true

    },
    userEmail: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    price: {
        type: Number
    },
    duration: {
        type: Number
    }
});

bookingSchema.pre('save', async function (next) {

    this.hotel = "RoomWise";

    try {
        const pricePerHour = {
            A: 100,
            B: 80,
            C: 50
        }
        const allotedRooms = {
            A: [],
            B: [],
            C: []
        }
        const availableRooms = {
            A: ['A1', 'A2'],
            B: ['B1', 'B2', 'B3'],
            C: ['C1', 'C2', 'C3', 'C4', 'C5']
        }


        if (availableRooms[this.roomType] && availableRooms[this.roomType].length > 0) {
            this.roomNumber = availableRooms[this.roomType].shift();
            allotedRooms[this.roomType].push(this.roomNumber);
        }


        const totalDuration = (this.endTime - this.startTime) / (1000 * 60 * 60);
        const roomPrice = pricePerHour[this.roomType];
        const totalPrice = totalDuration * roomPrice;
        this.price = totalPrice;
        this.duration = totalDuration;


    } catch (error) {
        next(error);
    }
});


export const Booking = mongoose.model('Booking', bookingSchema);