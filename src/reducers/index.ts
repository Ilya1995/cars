import { combineReducers } from 'redux';
import { appReducer } from '../reducers/app';
import { carsReducer } from '../reducers/cars';
import { dealersReducer } from '../reducers/dealers';

export const rootReducer = combineReducers({
  app: appReducer,
  cars: carsReducer,
  dealers: dealersReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
