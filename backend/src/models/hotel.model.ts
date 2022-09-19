import mongoose from "mongoose";

export interface HotelDocument extends mongoose.Document {
    name: object;
    photo: object;
}

export const hotelsSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    photo: {
        type: String,
    }

});

const HotelModel = mongoose.model<HotelDocument>('hotels', hotelsSchema);