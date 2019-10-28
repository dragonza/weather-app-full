/* eslint-disable */
import { fromJS } from "immutable";
export default fromJS({
  weathers: {},
  weatherDetail: {},
  auth: {
    authenticated: localStorage.getItem('token') || '', // store token here
    errorMessage: '',
    loading: false,
  }
});
