import mongoose from "mongoose";

export interface TourDocument extends mongoose.Document {
    name: object;
    photo: object;
}

export const toursSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    photo: {
        type: String,
    }

});

export const ToursModel = mongoose.model('tours', toursSchema);