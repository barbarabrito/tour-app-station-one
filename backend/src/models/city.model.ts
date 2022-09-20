import mongoose from "mongoose";
import { hotelSchema } from "./hotel.model";
import { restaurantSchema } from "./restaurant.model";
import { tourSchema } from "./tour.model";

export interface CityDocument extends mongoose.Document {
  name: string;
  tours: object;
  restaurants: object;
  hotels: object;
  photo: string;
}

const citySchema = new mongoose.Schema({

  name: { type: String, required: true, unique: true },

  tours: [tourSchema],
  restaurants: [restaurantSchema],
  hotels: [hotelSchema],

  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema);


export default CityModel