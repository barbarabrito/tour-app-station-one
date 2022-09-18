import { array, object, string, TypeOf } from 'zod';

export const createCitySchema = object({
  body: object({
    name: string({
      required_error: 'City name is required',
    }),
    tours: array(
      object({
        name: string(),
        photo: string(),
      })).nonempty(),
    restaurants: array(
      object({
        name: string(),
        photo: string(),
      })),
    hotels: array(
      object({
        name: string(),
        photo: string(),
      })),
    photo: string({
      required_error: 'A picture is required',
    })
  })
});

export type CreateCityInput = TypeOf<typeof createCitySchema>