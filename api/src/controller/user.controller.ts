import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import {
  createUser,
  findHotels,
  findRestaurants,
  findTours,
  updateUser
}
  from "../service/user.service";


export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(user)
  } catch (e: any) {
    console.log('error')
    return res.status(409).send(e.message)
  }
}

export async function getUserSavedToursHandler(req: Request, res: Response) {

  const tokenId = res.locals.user._id;

  const { id } = req.params;

  console.log(id)

  if (String(tokenId) !== id) {
    return res.sendStatus(403);
  }

  try {

    const user = await findTours({ _id: id });
    console.log(user)
    if (user) {
      res.status(200).json(user.tours);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}

export async function getUserSavedHotelsHandler(req: Request, res: Response) {

  const tokenId = res.locals.user._id;

  const { id } = req.params;

  console.log(id)

  if (String(tokenId) !== id) {
    return res.sendStatus(403);
  }

  try {

    const user = await findHotels({ _id: id });
    if (user) {
      res.status(200).json(user.hotels);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}

export async function getUserSavedRestaurantsHandler(req: Request, res: Response) {

  const tokenId = res.locals.user._id;

  const { id } = req.params;

  console.log(id)

  if (String(tokenId) !== id) {
    return res.sendStatus(403);
  }

  try {

    const user = await findRestaurants({ _id: id });
    if (user) {
      res.status(200).json(user.restaurants);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}

export async function updateUserHandler(req: Request, res: Response) {

  const tokenId = res.locals.user._id;

  const { id } = req.params;

  console.log(id)

  const update = req.body;

  if (String(tokenId) !== id) {
    return res.sendStatus(403);
  }

  const updatedUser = await updateUser({ _id: id }, update, {
    new: true,
  });

  return res.send(updatedUser);

}