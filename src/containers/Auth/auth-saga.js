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
import rsf from '../../components/Firebase'
const authProvider = new firebase.auth.GoogleAuthProvider();

function* handleSignUpSaga({ formProps }) {
  try {
    yield put(signUpLoading(true));
    const { email, password } = formProps;
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    console.log('user', user);

    // const requestUrl = `${rootUrl}/signup`;

    // const { token } = yield call(apiRequest, requestUrl, {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });
    yield put(signUpSuccess({ loading: false }));
    // localStorage.setItem('token', token);

    // yield put(push('/feature'));
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
    const requestUrl = ``;

    const { token } = yield call(apiRequest, requestUrl, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    yield put(signInSuccess({ authenticated: token, loading: false }));
    localStorage.setItem('token', token);
    yield put(push('/feature'));
  } catch (e) {
    yield put(
      signInFailed({ errorMessage: 'Email is in use', loading: false }),
    );
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP_SAGA, handleSignUpSaga);
  // yield takeEvery(SIGNIN_SAGA, handleSignInSaga);
}

