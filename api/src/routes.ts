import { Express, Request, Response } from 'express';
import { createUserSchema } from "./schema/user.schema";
import validateResource from './middleware/vaidateResource'

import {
  createUserHandler,
  getUserSavedHotelsHandler,
  getUserSavedRestaurantsHandler,
  getUserSavedToursHandler,
  updateUserHandler
} from './controller/user.controller';

import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import createSessionSchema from './schema/session.schema';
import requireUser from './middleware/requireUser';

import {
  createCityHandler,
  getAllCitiesHandler,
  getCitiesByNameHandler
} from './controller/city.controller';

import { createCitySchema } from './schema/city.schema';
import { getAllToursHandler } from './controller/tour.controller';
import { getAllHotelsHandler } from './controller/hotel.controller';
import { getAllRestaurantsHandler } from './controller/restaurant.controller';
import { getCitiesList } from './service/city.service';

function routes(app: Express) {

  app.get('/', async (req: Request, res: Response) => {

    let list = await getCitiesList();

    if (list && list.length > 0) {

      res.send(
        ` <h2> Rota inicial </h2>
          <p> Cidades disponíveis para consulta: ${list}. </p>
        `
      );
    } else {
      res.send(` <h2>Rota inicial</h2>`);
    }
  });

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/users', validateResource(createUserSchema), createUserHandler);

  app.get('/users/:id/saved/tours', requireUser, getUserSavedToursHandler);

  app.get('/users/:id/saved/hotels', requireUser, getUserSavedHotelsHandler);

  app.get('/users/:id/saved/restaurants', requireUser, getUserSavedRestaurantsHandler);

  app.post('/sessions', validateResource(createSessionSchema), createUserSessionHandler);

  app.get('/sessions', requireUser, getUserSessionsHandler);

  app.delete('/sessions', requireUser, deleteSessionHandler);

  app.post('/cities', validateResource(createCitySchema), createCityHandler);

  app.get('/cities', getAllCitiesHandler);

  app.get('/cities/:name', getCitiesByNameHandler);

  app.patch("/users/edit/:id", requireUser, updateUserHandler);

  app.get('/tours', getAllToursHandler);

  app.get('/hotels', getAllHotelsHandler);

  app.get('/restaurants', getAllRestaurantsHandler);
}

export default routes;