export const PUT_DEALER = 'PUT_DEALER';
export const GET_DEALER = 'GET_DEALER';

export type DealerType = {
  id: string;
  name: string;
  offices: [];
  country: string;
  title: string;
};

export type InitialStateType = {
  dealer: DealerType | null;
  dealers: DealerType[];
};

export type GetDealerActionType = {
  type: typeof GET_DEALER;
  payload: string;
};

export type PutDealerActionType = {
  type: typeof PUT_DEALER;
  payload: DealerType;
};

export type DealersActionTypes = GetDealerActionType | PutDealerActionType;
