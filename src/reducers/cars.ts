import {
  PUT_CARS,
  PUT_CAR,
  InitialStateType,
  CarsActionTypes
} from '../types/cars';

const initialState: InitialStateType = {
  cars: [],
  car: null
};

export function carsReducer(
  state = initialState,
  action: CarsActionTypes
): InitialStateType {
  switch (action.type) {
    case PUT_CARS:
      return { ...state, cars: [...state.cars, ...action.payload] };
    case PUT_CAR:
      return { ...state, car: action.payload };
    default:
      return state;
  }
}
