import { TourModel } from "../models/tour.model";

export async function findAllTours() {
    return TourModel.find().sort();
}
