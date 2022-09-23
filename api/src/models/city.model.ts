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

  tours: { type: Object, tourSchema, _id: false },
  restaurants: { type: Object, restaurantSchema, _id: false },
  hotels: { type: Object, hotelSchema, _id: false },

  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema);


export default CityModel