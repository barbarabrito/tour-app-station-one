import mongoose from "mongoose";

export interface CityDocument extends mongoose.Document {
  name: string;
  tours: object;
  restaurants: object;
  hotels: object;
  photo: string;
}

const citySchema = new mongoose.Schema({

  name: { type: String, required: true },
  tours: { type: Object, required: true },
  restaurants: { type: Object },
  hotels: { type: Object },
  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema)

export default CityModel