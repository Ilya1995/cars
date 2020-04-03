import { NotificationManager } from 'react-notifications';
import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_CAR,
  GET_CARS,
  PUT_CARS,
  GET_BRAND_CARS,
  PUT_BRAND_CARS,
  GetCarsActionType,
  GetCarActionType,
  CarType
} from '../types/cars';
import { SET_LOADER_BOTTOM } from '../types/app';
import { PER_PAGE } from '../resources';
import { putCar } from '../actions/cars';

const fetchDataCar = (id: string) =>
  fetch(
    `https://jlrc.dev.perx.ru/carstock/api/v1/vehicles/${id}`
  ).then(response => response.json());

function* getCarAsync(action: GetCarActionType) {
  try {
    const data: CarType = yield call(() => fetchDataCar(action.payload));
    yield put(putCar(data));
  } catch (error) {
    NotificationManager.error('Error loading car', 'Error!');
  } finally {
    yield put({ type: SET_LOADER_BOTTOM, payload: false });
  }
}

function* watchGetCarAsync() {
  yield takeLatest(GET_CAR, getCarAsync);
}

const fetchDataCars = ({ perPage = PER_PAGE, page = 1 }) =>
  fetch(
    `https://jlrc.dev.perx.ru/carstock/api/v1/vehicles/?state=active&hidden=false&group=new&per_page=${perPage}&page=${page}&sort=price`
  ).then(response => response.json());

function* getCarsAsync(action: GetCarsActionType) {
  try {
    yield put({ type: SET_LOADER_BOTTOM, payload: true });
    const data = yield call(() => fetchDataCars(action.payload || {}));
    yield put({ type: PUT_CARS, payload: data });
  } catch (error) {
    NotificationManager.error('Error loading cars', 'Error!');
  } finally {
    yield put({ type: SET_LOADER_BOTTOM, payload: false });
  }
}

function* watchGetCarsAsync() {
  yield takeEvery(GET_CARS, getCarsAsync);
}

const fetchDataBrandCars = () =>
  fetch('https://jlrc.dev.perx.ru/carquote/api/v1/').then(response =>
    response.json()
  );

function* getBrandCarsAsync() {
  try {
    const data = yield call(() => fetchDataBrandCars());
    console.log(data);

    yield put({ type: PUT_BRAND_CARS, payload: data });
  } catch (error) {
    console.error(error);
    NotificationManager.error('Error loading brand', 'Error!');
  }
}

function* watchGetBrandCarsAsync() {
  yield takeLatest(GET_BRAND_CARS, getBrandCarsAsync);
}

export default function* sagaCars() {
  yield all([
    watchGetCarAsync(),
    watchGetCarsAsync(),
    watchGetBrandCarsAsync()
  ]);
}
