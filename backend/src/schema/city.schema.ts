import { array, object, string, TypeOf } from 'zod';

export const createCitySchema = object({
  body: object({
    name: string({
      required_error: 'City name is required',
      invalid_type_error: 'City name must be text only'
    }).min(2, { message: "Must be 1 or more characters long" }),
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