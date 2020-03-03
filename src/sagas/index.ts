import { all } from 'redux-saga/effects';
import sagaCar from './cars';
import sagaDealers from './dealers';

export default function* rootSaga() {
  yield all([sagaCar(), sagaDealers()]);
}
