import { fromJS } from "immutable";
import {
  SIGNUP_SAGA,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNIN_SAGA,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SIGNOUT_SAGA,
  SIGNOUT_SUCCESS,
  SYNC_USER
} from "./auth-constant";
import { UPDATE_DATA } from "../../store/data-action";

const path = "auth";

/*==== SIGNUP ====*/

export const signUp = formProps => {
  return {
    type: SIGNUP_SAGA,
    formProps
  };
};

export const signUpLoading = loading => {
  return UPDATE_DATA({
    _type: SIGNUP_LOADING,
    _path: `${path}.loading`,
    _value: loading
  });
};

export const signUpSuccess = payload => {
  return UPDATE_DATA({
    _type: SIGNUP_SUCCESS,
    _path: `${path}`,
    _value: fromJS(payload)
  });
};

export const signUpFailed = (payload = {}) => {
  return UPDATE_DATA({
    _type: SIGNUP_FAILED,
    _path: path,
    _value: fromJS(payload)
  });
};

/*==== SIGNIN ====*/
export const signIn = formProps => {
  return {
    type: SIGNIN_SAGA,
    formProps
  };
};

export const signInLoading = loading => {
  console.log("loading", loading);
  return UPDATE_DATA({
    _type: SIGNIN_LOADING,
    _path: `${path}.loading`,
    _value: loading
  });
};

export const signInSuccess = payload => {
  return UPDATE_DATA({
    _type: SIGNIN_SUCCESS,
    _path: path,
    _value: fromJS(payload)
  });
};

export const signInFailed = (payload = {}) => {
  return UPDATE_DATA({
    _type: SIGNIN_FAILED,
    _path: path,
    _value: fromJS(payload)
  });
};

/*==== LOGOUT====*/

export const signout = () => {
  return {
    type: SIGNOUT_SAGA
  };
};

export const signoutSuccess = () => {
  return UPDATE_DATA({
    _type: SIGNOUT_SUCCESS,
    _path: path,
    _value: fromJS({
      user: null,
      errorMessage: "",
      loading: false
    })
  });
};

export const signoutFailed = payload => {
  return UPDATE_DATA({
    _type: SIGNIN_FAILED,
    _path: path,
    _value: fromJS(payload)
  });
};

export const syncUser = user => {
  return UPDATE_DATA({
    _type: SYNC_USER,
    _path: `${path}.user`,
    _value: fromJS(user)
  });
};
