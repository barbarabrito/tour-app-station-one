import mongoose from "mongoose";

export interface RestaurantDocument extends mongoose.Document {
    name: string;
    address: string;
    phone: string;
    photo: string;
}

export const restaurantSchema = new mongoose.Schema({

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

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);