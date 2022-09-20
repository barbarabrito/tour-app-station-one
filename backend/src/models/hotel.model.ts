import mongoose from "mongoose";

export interface HotelDocument extends mongoose.Document {
    name: string;
    address: string;
    phone: string;
    photo: string;
}

export const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    photo: {
        type: String,
    }

});

const HotelModel = mongoose.model<HotelDocument>('hotel', hotelSchema);