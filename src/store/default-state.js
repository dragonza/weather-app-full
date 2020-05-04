/* eslint-disable */
import { fromJS } from "immutable";
export default fromJS({
  selectedWeather: {},
  weathers: {},
  weatherDetail: {},
  auth: {
    errorMessage: '',
    loading: false,
    loggedIn: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }
});
