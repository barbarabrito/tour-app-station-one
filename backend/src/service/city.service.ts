import { DocumentDefinition, FilterQuery } from 'mongoose';
import CityModel, { CityDocument } from '../models/city.model';
import { HotelModel } from '../models/hotel.model';
import { RestaurantModel } from '../models/restaurant.model';
import { TourModel } from '../models/tour.model';

export async function createCity(input: DocumentDefinition<CityDocument>) {

  try {
    const city = await CityModel.create(input);
    await TourModel.create(input.tours);
    await HotelModel.create(input.hotels);
    await RestaurantModel.create(input.restaurants);
    return city.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findCity(query: FilterQuery<CityDocument>) {
  return CityModel.findOne(query).lean();
}