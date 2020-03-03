import { GET_DEALER, DealersActionTypes } from '../types/dealers';

export const getDealer = (id: string): DealersActionTypes => {
  return { type: GET_DEALER, payload: id };
};
