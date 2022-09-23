import { RestaurantModel } from "../models/restaurant.model";

export async function findAllRestaurants() {
    return RestaurantModel.find().sort();
}
