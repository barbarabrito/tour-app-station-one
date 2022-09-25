import { DocumentDefinition, QueryOptions, UpdateQuery } from 'mongoose';
import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword' |

  'tours' | 'restaurants' | 'hotels'>>) {

  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}

export async function findTours(query: FilterQuery<UserDocument>) {
  return UserModel.findById(query).populate('tours');
}

export async function findHotels(query: FilterQuery<UserDocument>) {
  return UserModel.findById(query).populate('hotels');
}

export async function findRestaurants(query: FilterQuery<UserDocument>) {
  return UserModel.findById(query).populate('restaurants');
}

export async function updateUser(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return UserModel.findByIdAndUpdate(query, update, options);
}

export async function saveTour(
  queryUser: FilterQuery<UserDocument>,
  queryTour: string
) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      user.tours.push(queryTour);
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }
}

export async function removeTour(
  queryUser: FilterQuery<UserDocument>,
  queryTour: FilterQuery<UserDocument>) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      await UserModel.updateOne(queryUser, { "$pull": { "tours": queryTour } })
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }

}

export async function saveRestaurant(
  queryUser: FilterQuery<UserDocument>,
  queryRestaurant: string
) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      user.restaurants.push(queryRestaurant);
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }
}

export async function removeRestaurant(
  queryUser: FilterQuery<UserDocument>,
  queryRestaurant: FilterQuery<UserDocument>) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      await UserModel.updateOne(queryUser, { "$pull": { "restaurants": queryRestaurant } })
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }

}

export async function saveHotel(
  queryUser: FilterQuery<UserDocument>,
  queryHotel: string
) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      user.hotels.push(queryHotel);
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }
}

export async function removeHotel(
  queryUser: FilterQuery<UserDocument>,
  queryHotel: FilterQuery<UserDocument>) {

  const user = await UserModel.findById(queryUser);

  if (user) {

    try {
      await UserModel.updateOne(queryUser, { "$pull": { "hotels": queryHotel } })
      await user.save();
    } catch (e: any) {
      throw new Error(e);
    }

  }

}