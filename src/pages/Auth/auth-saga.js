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
  signoutFailed,
  syncUser
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
    yield put(signUpSuccess({ loading: false, loggedIn: true, user }));
    localStorage.setItem("user", JSON.stringify(user));

    yield put(push(ROUTES.HOME));
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
    // const snapshot = yield call(rsf.firestore.getCollection, 'cities');
    //
    //
    // console.log('snapshot', snapshot);
    const { email, password } = formProps;
    const user = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );
    yield put(signInSuccess({ loading: false, loggedIn: true, user }));
    localStorage.setItem("user", JSON.stringify(user));

    yield put(push(ROUTES.HOME));
  } catch (e) {
    yield put(signInFailed({ errorMessage: e.message, loading: false }));
  }
}

function* handleSignOutSaga() {
  try {
    yield call(rsf.auth.signOut);

    localStorage.removeItem("user");

    yield put(signoutSuccess({ loading: false, error: "" })); // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(signoutFailed({ error, loading: false }));
  }
}

function* syncUserSaga() {
    const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(signInSuccess({ loading: false, loggedIn: true, user: user.toJSON() }));
    } else {
      yield put(signInFailed({ errorMessage: "", loading: false, user: null }));
    }
  }
}

export default function* authSaga() {
  yield fork(syncUserSaga);

  yield all([
    takeEvery(SIGNUP_SAGA, handleSignUpSaga),
    takeEvery(SIGNIN_SAGA, handleSignInSaga),
    takeEvery(SIGNOUT_SAGA, handleSignOutSaga)
  ]);
}
