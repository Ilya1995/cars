import { all, takeLatest, call, put } from 'redux-saga/effects';
import { GET_DEALER, PUT_DEALER, GetDealerActionType } from '../types/dealers';

function fetchDataDealer(id: string) {
  return fetch(
    `https://jlrc.dev.perx.ru/carstock/api/v1/dealers/${id}`
  ).then(response => response.json());
}

function* getDealerAsync(action: GetDealerActionType) {
  try {
    const data = yield call(() => fetchDataDealer(action.payload));
    yield put({ type: PUT_DEALER, payload: data });
  } catch (error) {
    alert('Error loading dealers');
  }
}

function* watchGetDealerAsync() {
  yield takeLatest(GET_DEALER, getDealerAsync);
}

export default function* sagaDealers() {
  yield all([watchGetDealerAsync()]);
}
