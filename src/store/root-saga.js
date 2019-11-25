import { spawn } from 'redux-saga/effects';
import authSaga from '../pages/Auth/auth-saga';

export default function* rootSaga() {
  yield spawn(authSaga);
}
