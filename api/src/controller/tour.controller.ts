import { Request, Response } from "express";
import { findAllTours } from "../service/tour.service";

export async function getAllToursHandler(req: Request, res: Response) {

    const tours = await findAllTours();

    return res.send({ tours: tours });

}