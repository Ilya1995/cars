import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_CARS,
  PUT_CARS,
  GET_BRAND_CARS,
  PUT_BRAND_CARS
} from '../types/cars';

function fetchDataCars() {
  return fetch(
    'https://jlrc.dev.perx.ru/carstock/api/v1/vehicles/?state=active&hidden=false&group=new',
    {
      method: 'GET',
      headers: { 'X-CS-Dealer-Id-Only': '1' }
    }
  ).then(response => response.json());
}

function* getCarsAsync() {
  try {
    const data = yield call(() => fetchDataCars());
    yield put({ type: PUT_CARS, payload: data });
  } catch (error) {
    alert('Error loading cars');
  }
}

function* watchGetCarsAsync() {
  yield takeLatest(GET_CARS, getCarsAsync);
}

function fetchDataBranCars() {
  return fetch('https://jlrc.dev.perx.ru/carquote/api/v1/').then(response =>
    response.json()
  );
}

function* getBrandCarsAsync() {
  try {
    const data = yield call(() => fetchDataBranCars());
    console.log(data);

    yield put({ type: PUT_BRAND_CARS, payload: data });
  } catch (error) {
    console.error(error);
    alert('Error loading brand');
  }
}

function* watchGetBrandCarsAsync() {
  yield takeLatest(GET_BRAND_CARS, getBrandCarsAsync);
}

export default function* sagaCars() {
  yield all([watchGetCarsAsync(), watchGetBrandCarsAsync()]);
}
