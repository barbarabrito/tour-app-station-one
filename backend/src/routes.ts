import { Express, Request, Response } from 'express';
import { createUserSchema } from "./schema/user.schema";
import validateResource from './middleware/vaidateResource'

import {
  createUserHandler,
  getAllUsersHandler,
  getUserSavedHotelsHandler,
  getUserSavedRestaurantsHandler,
  getUserSavedToursHandler,
  updateUserHandler
} from './controller/user.controller';

import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import createSessionSchema from './schema/session.schema';
import requireUser from './middleware/requireUser';
import { createCityHandler, getCitiesByNameHandler } from './controller/city.controller';
import { createCitySchema } from './schema/city.schema';

function routes(app: Express) {

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  })

  app.post('/users', validateResource(createUserSchema), createUserHandler);

  app.get('/users/:id/saved/tours', requireUser, getUserSavedToursHandler);

  app.get('/users/:id/saved/hotels', requireUser, getUserSavedHotelsHandler);

  app.get('/users/:id/saved/restaurants', requireUser, getUserSavedRestaurantsHandler);

  app.get('/users', getAllUsersHandler);

  app.post('/sessions', validateResource(createSessionSchema), createUserSessionHandler);

  app.get('/sessions', requireUser, getUserSessionsHandler);

  app.delete('/sessions', requireUser, deleteSessionHandler);

  app.post('/cities', validateResource(createCitySchema), createCityHandler);

  app.get('/cities/:name', getCitiesByNameHandler);

  app.patch("/users/edit/:id", [requireUser], updateUserHandler);
}

export default routes;