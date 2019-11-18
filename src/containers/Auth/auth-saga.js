import { push } from 'connected-react-router';
import firebase from 'firebase'

import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNUP_SAGA, SIGNIN_SAGA } from './auth-constant';
import apiRequest from '../../store/request';
import {
  signUpLoading,
  signUpSuccess,
  signUpFailed,
  signInLoading,
  signInFailed,
  signInSuccess,
} from './auth-action';
import { ROUTES } from "../App/constants";
import rsf from '../../components/Firebase'
const authProvider = new firebase.auth.GoogleAuthProvider();

function* handleSignUpSaga({ formProps }) {
  try {
    yield put(signUpLoading(true));
    const { email, password } = formProps;
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    // console.log('user', user);

    yield put(signUpSuccess({ loading: false }));

    yield put(push(ROUTES.LOG_IN));
  } catch (e) {
    yield put(
      signUpFailed({
        errorMessage: e.message,
        loading: false,
      }),
    );
  }
}

function* handleSignInSaga({ formProps }) {
  try {
    yield put(signInLoading(true));
    const { email, password } = formProps;
    const data = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(signInSuccess({ user: data, loading: false }));
    yield put(push('/'));
  } catch (e) {
    yield put(
      signInFailed({ errorMessage: e.message, loading: false }),
    );
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP_SAGA, handleSignUpSaga);
  yield takeEvery(SIGNIN_SAGA, handleSignInSaga);
}

