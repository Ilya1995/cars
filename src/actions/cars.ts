import {
  PUT_CAR,
  GET_CAR,
  GET_CARS,
  GET_BRAND_CARS,
  PutCarActionType,
  GetCarsActionType,
  GetCarActionType,
  GetBrandCarsActionType,
  CarPaginationType,
  CarType
} from '../types/cars';

export const putCar = (data: CarType | null): PutCarActionType => {
  return { type: PUT_CAR, payload: data };
};

export const getCars = (data?: CarPaginationType): GetCarsActionType => {
  return { type: GET_CARS, payload: data };
};

export const getCarById = (id: string): GetCarActionType => {
  return { type: GET_CAR, payload: id };
};

export const getBrandCars = (): GetBrandCarsActionType => {
  return { type: GET_BRAND_CARS };
};
