import { array, object, string, TypeOf } from 'zod';

export const createCitySchema = object({
  body: object({
    name: string({
      required_error: 'City name is required',
      invalid_type_error: 'City name must be text only'
    }).min(2, { message: "City name must be 2 or more characters long" }),
    tours: array(
      object({
        name: string({
          invalid_type_error: 'Tour name must be text only'
        }).min(2, { message: "Tour name must be 2 or more characters long" }),
        address: string({
          invalid_type_error: 'Adress must be text only'
        }).min(2, { message: "Adress must be 2 or more characters long" }),
        photo: string({}),
      })),
    restaurants: array(
      object({
        name: string({
          invalid_type_error: 'Restaurant name must be text only'
        }).min(2, { message: "Restaurant name must be 2 or more characters long" }),
        address: string({
          invalid_type_error: 'Adress must be text only'
        }).min(2, { message: "Adress must be 2 or more characters long" }),
        phone: string({
          invalid_type_error: 'Phone must be text only'
        }).min(2, { message: "Phone must be 2 or more characters long" }),
        photo: string({}),
      })),
    hotels: array(
      object({
        name: string({
          invalid_type_error: 'Hotel name must be text only'
        }).min(2, { message: "Hotel name must be 2 or more characters long" }),
        address: string({
          invalid_type_error: 'Adress must be text only'
        }).min(2, { message: "Adress must be 2 or more characters long" }),
        phone: string({
          invalid_type_error: 'Phone must be text only'
        }).min(2, { message: "Phone must be 2 or more characters long" }),
        photo: string({}),
      })),
    photo: string({
      required_error: 'A picture is required',
    })
  })
});

export type CreateCityInput = TypeOf<typeof createCitySchema>