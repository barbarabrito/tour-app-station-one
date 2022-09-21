import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, findHotels, findRestaurants, findTours, getAllUsers } from "../service/user.service";

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

  const { id } = req.params;

  try {

    const user = await findTours({ _id: id });
    if (user) {
      res.status(200).json(user.tours);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}

export async function getUserSavedHotelsHandler(req: Request, res: Response) {

  const { id } = req.params;

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

  const { id } = req.params;

  try {

    const user = await findRestaurants({ _id: id });
    if (user) {
      res.status(200).json(user.restaurants);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}


export async function getAllUsersHandler(req: Request, res: Response) {

  const users = await getAllUsers();

  res.send({ users: users })

}