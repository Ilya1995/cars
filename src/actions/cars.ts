import { GET_CARS, GET_BRAND_CARS, CarsActionTypes } from '../types/cars';

export const getCars = (): CarsActionTypes => {
  return { type: GET_CARS };
};

export const getBrandCars = (): CarsActionTypes => {
  return { type: GET_BRAND_CARS };
};
