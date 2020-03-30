import { PUT_CARS, InitialStateType, CarsActionTypes } from '../types/cars';

const initialState: InitialStateType = {
  cars: []
};

export function carsReducer(
  state = initialState,
  action: CarsActionTypes
): InitialStateType {
  switch (action.type) {
    case PUT_CARS:
      return { ...state, cars: [...state.cars, ...action.payload] };
    default:
      return state;
  }
}
