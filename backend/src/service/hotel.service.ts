import { HotelModel } from "../models/hotel.model";

export async function findAllHotels() {
    return HotelModel.find().sort();
}
