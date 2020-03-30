export const SET_LOADER_BOTTOM = 'SET_LOADER_BOTTOM';

export type InitialStateType = {
  loadingBottom: boolean;
};

export type SetLoaderBottomActionType = {
  type: typeof SET_LOADER_BOTTOM;
  payload: boolean;
};

export type AppActionTypes = SetLoaderBottomActionType;
