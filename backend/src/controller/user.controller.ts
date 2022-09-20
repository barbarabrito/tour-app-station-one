import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, findDestinations, getAllUsers } from "../service/user.service";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(user)
  } catch (e: any) {
    console.log('error')
    return res.status(409).send(e.message)
  }
}

export async function getUserSavedDestinationsHandler(req: Request, res: Response) {

  const { id } = req.params;

  try {

    const user = await findDestinations({ _id: id });
    if (user) {
      console.log(user.tours);
      res.status(200).json(user.tours);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }

}

export async function getAllUsersHandler(req: Request, res: Response) {

  const users = await getAllUsers();

  res.send({ users: users })

}