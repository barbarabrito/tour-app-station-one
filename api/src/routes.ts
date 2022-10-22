import { Express, Request, Response } from 'express';
import { createUserSchema } from "./schema/user.schema";
import validateResource from './middleware/vaidateResource'

import {
  createUserHandler,
  getAllUsersHandler,
  getUserSavedHotelsHandler,
  getUserSavedRestaurantsHandler,
  getUserSavedToursHandler,
  removeHotelHandler,
  removeRestaurantHandler,
  removeTourHandler,
  saveHotelHandler,
  saveRestaurantHandler,
  saveTourHandler,
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
          <p> Cidades cadastradas: ${list}. </p>
        `
      );
    } else {
      res.send(` <h2>Rota inicial</h2>`);
    }
  });

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/users', validateResource(createUserSchema), createUserHandler, 
     /*
      #swagger.description = 'Cadastro de usuário'
      #swagger.parameters['obj'] = {
        in: 'body',
        schema: { $ref: '#/definitions/User' } 
      }
    */
  );
  
  app.get('/users', getAllUsersHandler
    /*
      #swagger.description = 'Retorna todos os usuários'
    */
  );

  app.get('/users/:id/saved/tours', requireUser, getUserSavedToursHandler
     /*
      #swagger.description = 'Retorna os pontos turísticos favoritos de um determinado usuário'
      #swagger.parameters['id'] = { description: 'ID do usuário' }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.get('/users/:id/saved/hotels', requireUser, getUserSavedHotelsHandler
    /*
      #swagger.description = 'Retorna os hotéis favoritos de um determinado usuário'
      #swagger.parameters['id'] = { description: 'ID do usuário' }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.get('/users/:id/saved/restaurants', requireUser, getUserSavedRestaurantsHandler
    /*
      #swagger.description = 'Retorna os restaurantes favoritos de um determinado usuário'
      #swagger.parameters['id'] = { description: 'ID do Usuário' }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.post('/sessions', validateResource(createSessionSchema), createUserSessionHandler
    /*
    #swagger.description = 'Login. Cria a sessão.'
      #swagger.parameters['obj'] = {
        in: 'body',
        schema: {
          $email: 'user@example.com',
          $password: '12345678'
        } 
      }
    */
  );

  app.get('/sessions', requireUser, getUserSessionsHandler
    /*
      #swagger.description = 'Retorna as sessões de um usuário'
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.delete('/sessions', requireUser, deleteSessionHandler
    /*
      #swagger.description = 'Remove a sessão do usuário'
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.post('/cities', validateResource(createCitySchema), createCityHandler
    /*
      #swagger.description = 'Cadastro de cidades'
      #swagger.parameters['obj'] = {
        in: 'body', 
        schema: { $ref: '#/definitions/Cities' } 
      }
    */
  );

  app.get('/cities', getAllCitiesHandler
    /*
      #swagger.description = 'Retorna todas as cidades cadastradas' 
    */
  );

  app.get('/cities/:name', getCitiesByNameHandler
    /*
      #swagger.description = 'Rota de pesquisa. Retorna a cidade passada como parâmetro.'
      #swagger.parameters['name'] = {
        description : 'O nome deve ser digitado respeitando letras maiúsculas, espaços e acentos.'
      }
    */
  );

  app.patch("/users/edit/:id", requireUser, updateUserHandler
    /*
      #swagger.description = 'Rota que permite que o usuário altere os dados da sua conta',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter a informação a ser alterada.',
        schema: {
          name: 'John Doe'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.get('/tours', getAllToursHandler
    /*
      #swagger.description = 'Retorna todas os pontos turísticos cadastrados' 
    */
  );

  app.get('/hotels', getAllHotelsHandler
    /*
      #swagger.description = 'Retorna todas os hotéis cadastrados' 
    */
  );

  app.get('/restaurants', getAllRestaurantsHandler
    /*
      #swagger.description = 'Retorna todas os restaurantes cadastrados' 
    */
  );

  app.post('/users/:id/saved/tours', requireUser, saveTourHandler
    /*
      #swagger.description = 'Salva pontos turísticos na conta do usuário.',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do ponto turístico a ser salvo.',
        schema: {
          tour: '632d22d11d8fc6630e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.delete('/users/:id/saved/tours', requireUser, removeTourHandler
    /*
      #swagger.description = 'Remove pontos turísticos da conta do usuário',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do ponto turístico a ser removido.',
        schema: {
          tour: '632d22d11d8fc6630e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.post('/users/:id/saved/restaurants', requireUser, saveRestaurantHandler
    /*
      #swagger.description = 'Salva restaurantes favoritos na conta do usuário',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do restaurante a ser salvo.',
        schema: {
          restaurant: '632d22d6578fc6630e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.delete('/users/:id/saved/restaurants', requireUser, removeRestaurantHandler
    /*
      #swagger.description = 'Remove restaurantes favoritos da conta do usuário',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do restaurante a ser removido.',
        schema: {
          tour: '632d22d11sffc6630e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.post('/users/:id/saved/hotels', requireUser, saveHotelHandler
    /*
      #swagger.description = 'Salva hotéis favoritos na conta do usuário',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do hotel a ser salvo.',
        schema: {
          hotel: '632d22d11dffc6630e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );

  app.delete('/users/:id/saved/hotels', requireUser, removeHotelHandler
    /*
      #swagger.description = 'Remove hotéis favoritos da conta do usuário',
      #swagger.parameters['id'] = { description : 'Id do usuário'}
      #swagger.parameters['obj'] = {
        in: 'body',
        description : 'O Corpo deve conter o ID do hotel a ser removido.',
        schema: {
          hotel: '632d22d11d8fcff30e0edf79'
        }
      }
      #swagger.security = [{
        "apiKeyAuth": []
      }]
    */
  );
}

export default routes;