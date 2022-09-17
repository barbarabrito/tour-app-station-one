import mongoose from "mongoose";

export interface CityDocument extends mongoose.Document {
  name: string;
  tours: string[];
  restaurants: string[];
  photo: string;
}

const citySchema = new mongoose.Schema({

  name: { type: String, required: true },
  tours: { type: Array, required: true },
  restaurants: { type: Array, required: true },
  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema)

export default CityModel