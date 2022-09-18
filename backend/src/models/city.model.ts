import mongoose from "mongoose";

export interface CityDocument extends mongoose.Document {
  name: string;
  tours: object;
  restaurants: object;
  hotels: object;
  photo: string;
}

const citySchema = new mongoose.Schema({

  name: { type: String, required: true, unique: true },

  tours: [{
    name: {
      type: String,
    },
    photo: {
      type: String,
    }
  }],
  restaurants: [{
    name: {
      type: String,
    },
    photo: {
      type: String,
    }
  }],
  hotels: [{
    name: {
      type: String,
    },
    photo: {
      type: String,
    }
  }],

  photo: { type: String, required: true }

});

const CityModel = mongoose.model<CityDocument>('City', citySchema)

export default CityModel