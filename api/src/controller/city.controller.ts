import { CreateCityInput } from "../schema/city.schema";
import { createCity, findAllCities, findCity } from "../service/city.service";
import { Request, Response } from "express";

export async function createCityHandler(req: Request<{}, {}, CreateCityInput["body"]>, res: Response) {

  try {
    const city = await createCity(req.body);
    return res.send(city)
  } catch (e: any) {
    return res.status(409).send(e.message)
  }

}

export async function getCitiesByNameHandler(req: Request, res: Response) {

  const { name } = req.params;

  const city = await findCity({ name })

  return res.send(city);

}

export async function getAllCitiesHandler(req: Request, res: Response) {

  const cities = await findAllCities();

  return res.send({ cities: cities });

}