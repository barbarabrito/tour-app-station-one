import mongoose from "mongoose";
import { hotelsSchema } from "./hotel.model";
import { restaurantsSchema } from "./restaurant.model";
import { ToursModel, toursSchema } from "./tour.model";

export interface CityDocument extends mongoose.Document {
  name: string;
  tours: object;
  restaurants: object;
  hotels: object;
  photo: string;
}

const citySchema = new mongoose.Schema({

  name: { type: String, required: true, unique: true },

  tours: [toursSchema],
  restaurants: [restaurantsSchema],
  hotels: [hotelsSchema],

  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema);


export default CityModel