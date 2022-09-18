import { CreateCityInput } from "../schema/city.schema";
import { createCity, findCity } from "../service/city.service";
import { Request, Response } from "express";

export async function createCityHandler(req: Request<{}, {}, CreateCityInput["body"]>, res: Response) {

  try {
    const city = await createCity(req.body);
    return res.send(city)
  } catch (e: any) {
    return res.status(409).send(e.message)
  }

}

export async function getCitiesHandler(req: Request, res: Response) {

  const { name } = req.params;

  const city = await findCity({ name })

  return res.send(city);

}