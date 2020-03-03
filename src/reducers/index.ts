import { combineReducers } from 'redux';
import { carsReducer } from '../reducers/cars';
import { dealersReducer } from '../reducers/dealers';

export const rootReducer = combineReducers({
  cars: carsReducer,
  dealers: dealersReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
