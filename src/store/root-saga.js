import { spawn } from 'redux-saga/effects';
import authSaga from '../pages/Auth/auth-saga';
import addSaga from '../pages/AddWeatherPage/add-saga'

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(addSaga);
}
