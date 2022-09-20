import mongoose from "mongoose";

export interface TourDocument extends mongoose.Document {
    name: string;
    address: string;
    photo: string;
}

export const tourSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    address: {
        type: String,
    },
    photo: {
        type: String,
    }

});

export const TourModel = mongoose.model('tour', tourSchema);