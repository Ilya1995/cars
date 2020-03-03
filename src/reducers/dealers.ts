import {
  PUT_DEALER,
  InitialStateType,
  DealersActionTypes
} from '../types/dealers';

const initialState: InitialStateType = {
  dealer: null,
  dealers: []
};

export function dealersReducer(
  state = initialState,
  action: DealersActionTypes
): InitialStateType {
  switch (action.type) {
    case PUT_DEALER:
      return { ...state, dealer: action.payload };
    default:
      return state;
  }
}
