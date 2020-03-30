export const PUT_CARS = 'PUT_CARS';
export const GET_CARS = 'GET_CARS';
export const GET_BRAND_CARS = 'GET_BRAND_CARS';
export const PUT_BRAND_CARS = 'PUT_BRAND_CARS';

type ImageType = {
  type: string;
  url: string;
};

type PriceType = {
  discount: number[];
  value: number[][];
};

type OfficeType = {
  city: string;
  location: { coordinates: number[] };
};

export type CarType = {
  id: string;
  name: string;
  price: PriceType;
  model: string;
  brand: string;
  year: number;
  dealerName: string;
  color: { name: string };
  main_office: OfficeType;
  images: ImageType[];
};

export type InitialStateType = {
  cars: CarType[];
};

export type CarPaginationType = {
  perPage?: number;
  page: number;
};

export type GetCarsActionType = {
  type: typeof GET_CARS;
  payload?: CarPaginationType;
};

export type PutCarsActionType = {
  type: typeof PUT_CARS;
  payload: CarType[];
};

export type GetBrandCarsActionType = {
  type: typeof GET_BRAND_CARS;
};

export type CarsActionTypes =
  | GetCarsActionType
  | PutCarsActionType
  | GetBrandCarsActionType;
