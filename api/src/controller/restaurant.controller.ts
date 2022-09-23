import { Request, Response } from "express";
import { findAllRestaurants } from "../service/restaurant.service";

export async function getAllRestaurantsHandler(req: Request, res: Response) {

    const restaurants = await findAllRestaurants();

    return res.send({ restaurants: restaurants });

}