import React from 'react';
import { getCars, getBrandCars } from '../actions/cars';
import { useDispatch, useSelector } from 'react-redux';
import { CarType } from '../types/cars';
import { RootReducerType } from '../reducers';
import Button from '@material-ui/core/Button';

export const Cars: React.FC = () => {
  const cars: CarType[] = useSelector(
    (state: RootReducerType) => state.cars.cars
  );
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getCars());
  };
  const handlerClick1 = () => {
    dispatch(getBrandCars());
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlerClick}>
        GetCars
      </Button>
      <Button variant="contained" color="primary" onClick={handlerClick1}>
        GetBrandCars
      </Button>
    </div>
  );
};
