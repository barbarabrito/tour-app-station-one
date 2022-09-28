import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import {
  createUser,
  findHotels,
  findRestaurants,
  findTours,
  removeHotel,
  removeRestaurant,
  removeTour,
  saveHotel,
  saveRestaurant,
  saveTour,
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

  const localId = res.locals.user._id;

  const { id } = req.params;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

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

  const localId = res.locals.user._id;

  const { id } = req.params;

  if (String(localId) !== id) {
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

  const localId = res.locals.user._id;

  const { id } = req.params;

  if (String(localId) !== id) {
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

  const localId = res.locals.user._id;

  const { id } = req.params;

  const update = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  const updatedUser = await updateUser({ _id: id }, update, {
    new: true,
  });

  return res.send(updatedUser);

}

export async function saveTourHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { tour } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await saveTour({ _id: id }, tour);
    return res.status(200).send('added to saved items')

  } catch (e: any) {

    console.log('error')
    return res.status(409).send(e.message)
  }

}

export async function removeTourHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { tour } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await removeTour({ _id: id }, tour);
    return res.status(200).json({ message: 'removed from saved items' });

  } catch (e: any) {
    return res.status(409).send(e.message);
  }

}

export async function saveRestaurantHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { restaurant } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await saveRestaurant({ _id: id }, restaurant);
    return res.status(200).json({ message: 'added to saved items' });

  } catch (e: any) {
    return res.status(409).send(e.message)
  }

}

export async function removeRestaurantHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { restaurant } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await removeRestaurant({ _id: id }, restaurant);
    return res.status(200).json({ message: 'removed from saved items' });

  } catch (e: any) {
    return res.status(409).send(e.message);
  }

}

export async function saveHotelHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { hotel } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await saveHotel({ _id: id }, hotel);
    return res.status(200).json({ message: 'added to saved items' });

  } catch (e: any) {
    return res.status(409).send(e.message)
  }

}

export async function removeHotelHandler(req: Request, res: Response) {

  const localId = res.locals.user._id;

  const { id } = req.params;

  const { hotel } = req.body;

  if (String(localId) !== id) {
    return res.sendStatus(403);
  }

  try {
    await removeHotel({ _id: id }, hotel);
    return res.status(200).json({ message: 'removed from saved items' });

  } catch (e: any) {
    return res.status(409).send(e.message);
  }

}