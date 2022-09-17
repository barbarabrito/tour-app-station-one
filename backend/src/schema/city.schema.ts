import { object, string, TypeOf, z } from 'zod';

export const createCitySchema = object({
  body: object({
    name: string({
      required_error: 'City name is required',
    }),
    tours: z.array(z.string({
      required_error: 'Tours are is required',
    })).nonempty(),
    restaurants: z.array(z.string({
      required_error: 'Restaurants are required',
    })).nonempty(),
    photo: string({
      required_error: 'Photo is required',
    }),
  })
});

export type CreateCityInput = TypeOf<typeof createCitySchema>