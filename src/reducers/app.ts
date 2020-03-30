import {
  SET_LOADER_BOTTOM,
  InitialStateType,
  AppActionTypes
} from '../types/app';

const initialState: InitialStateType = {
  loadingBottom: false
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): InitialStateType {
  switch (action.type) {
    case SET_LOADER_BOTTOM:
      return { ...state, loadingBottom: action.payload };
    default:
      return state;
  }
}
