import { CreateCityInput } from "../schema/city.schema";
import { createCity } from "../service/city.service";
import { Request, Response } from "express";

export async function createCityHandler(req: Request<{}, {}, CreateCityInput["body"]>, res: Response) {

  try {
    const city = await createCity(req.body);
    return res.send(city)
  } catch (e: any) {
    console.log('error')
    return res.status(409).send(e.message)
  }
}