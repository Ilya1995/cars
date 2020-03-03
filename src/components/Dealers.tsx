import React from 'react';
import { getDealer } from '../actions/dealers';
import { useDispatch, useSelector } from 'react-redux';
import { DealerType } from '../types/dealers';
import { RootReducerType } from '../reducers';
import Button from '@material-ui/core/Button';

export const Dealers: React.FC = () => {
  const dealer: DealerType | null = useSelector(
    (state: RootReducerType) => state.dealers.dealer
  );
  console.log(dealer);

  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getDealer('58ab48063ce18b01eaed8267'));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlerClick}>
        getDealer
      </Button>
    </div>
  );
};
