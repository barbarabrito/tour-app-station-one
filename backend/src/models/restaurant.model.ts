import mongoose from "mongoose";

export interface RestaurantDocument extends mongoose.Document {
    name: object;
    photo: object;
}

export const restaurantsSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    photo: {
        type: String,
    }

});

const RestaurantModel = mongoose.model('restaurants', restaurantsSchema);