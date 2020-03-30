import {
  GET_CARS,
  GET_BRAND_CARS,
  CarsActionTypes,
  CarPaginationType
} from '../types/cars';

export const getCars = (data?: CarPaginationType): CarsActionTypes => {
  return { type: GET_CARS, payload: data };
};

export const getBrandCars = (): CarsActionTypes => {
  return { type: GET_BRAND_CARS };
};
