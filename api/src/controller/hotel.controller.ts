import { Request, Response } from "express";
import { findAllHotels } from "../service/hotel.service";

export async function getAllHotelsHandler(req: Request, res: Response) {

    const hotels = await findAllHotels();

    return res.send({ hotels: hotels });

}