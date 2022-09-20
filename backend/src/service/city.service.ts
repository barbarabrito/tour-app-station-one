import { DocumentDefinition, FilterQuery } from 'mongoose';
import CityModel, { CityDocument } from '../models/city.model';
import { TourModel } from '../models/tour.model';

export async function createCity(input: DocumentDefinition<CityDocument>) {

  try {
    const city = await CityModel.create(input);
    await TourModel.create(input.tours);
    console.log(input.tours)
    return city.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findCity(query: FilterQuery<CityDocument>) {
  return CityModel.findOne(query).lean();
}