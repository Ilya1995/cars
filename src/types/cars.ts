export const PUT_CARS = 'PUT_CARS';
export const GET_CARS = 'GET_CARS';
export const GET_BRAND_CARS = 'GET_BRAND_CARS';
export const PUT_BRAND_CARS = 'PUT_BRAND_CARS';

export type CarType = {
  model: string;
  brand: string;
  year: number;
};

export type InitialStateType = {
  cars: CarType[];
};

export type GetCarsActionType = {
  type: typeof GET_CARS;
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
