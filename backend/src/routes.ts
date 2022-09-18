import { Express, Request, Response } from 'express';
import { createUserSchema } from "./schema/user.schema";
import validateResource from './middleware/vaidateResource'
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import createSessionSchema from './schema/session.schema';
import requireUser from './middleware/requireUser';
import { createCityHandler, getCitiesHandler } from './controller/city.controller';
import { createCitySchema } from './schema/city.schema';


function routes(app: Express) {

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler);

  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);

  app.get('/api/sessions', requireUser, getUserSessionsHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.post('/api/cities', validateResource(createCitySchema), createCityHandler);

  app.get('/api/cities/:name', getCitiesHandler);

}

export default routes;