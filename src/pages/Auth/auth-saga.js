import { push } from "connected-react-router";
import firebase from "firebase";

import { takeEvery, call, put, fork, all, take } from "redux-saga/effects";
import { SIGNUP_SAGA, SIGNIN_SAGA, SIGNOUT_SAGA } from "./auth-constant";
import {
  signUpLoading,
  signUpSuccess,
  signUpFailed,
  signInLoading,
  signInFailed,
  signInSuccess,
  signoutSuccess,
  signoutFailed
} from "./auth-action";
import { ROUTES } from "../App/constants";
import rsf from "../../components/Firebase";

function* handleSignUpSaga({ formProps }) {
  try {
    yield put(signUpLoading(true));
    const { email, password } = formProps;
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess({ loading: false }));

    yield put(push(ROUTES.SIGN_IN));
  } catch (e) {
    yield put(
      signUpFailed({
        errorMessage: e.message,
        loading: false
      })
    );
  }
}

function* handleSignInSaga({ formProps }) {
  try {
    yield put(signInLoading(true));
    const { email, password } = formProps;
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(signInSuccess({ loading: false }));
    yield put(push("/"));
  } catch (e) {
    yield put(signInFailed({ errorMessage: e.message, loading: false }));
  }
}

function* handleSignOutSaga() {
  try {
    yield call(rsf.auth.signOut);
    yield put(signoutSuccess({ loading: false, error: "" })); // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(signoutFailed({ error, loading: false }));
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);
    console.log("userfdsfdsfsd", user);
    if (user) yield put(signInSuccess({ loading: false, error: "" }));
    // else yield put(signInSuccess());
  }
}

export default function* authSaga() {
  // yield fork(loginStatusWatcher);

  yield all([
    takeEvery(SIGNUP_SAGA, handleSignUpSaga),
    takeEvery(SIGNIN_SAGA, handleSignInSaga),
    takeEvery(SIGNOUT_SAGA, handleSignOutSaga)
  ]);
}
