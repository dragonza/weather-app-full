import { spawn } from 'redux-saga/effects';
import authSaga from '../containers/Auth/auth-saga';

export default function* rootSaga() {
  yield spawn(authSaga);
}
