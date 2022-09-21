import { DocumentDefinition } from 'mongoose';
import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
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

export async function getAllUsers() {
  return UserModel.find().sort();
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