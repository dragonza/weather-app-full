import { call, put, takeEvery } from "redux-saga/effects";
import apiRequest from "../../store/request";
// import { groupArrayByName } from "../../utils/arrayHelper";
import {
  fetchWeatherLoading,
  fetchWeatherSuccess,
  updateForecastListIds,
  updateForecastMap,
  updateLocation,
  fetchWeatherFailed
} from "./add-action";
import { FETCH_WEATHER } from "./add-constant";

import { openWeatherConfig } from "../../config/key";

const queryApi = `&appid=${openWeatherConfig.API_KEY}`;

function* handleFetchWeather(payload) {
  try {
    yield put(fetchWeatherLoading(true));
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?id=${
      payload.cityId
    }${queryApi}`;
    const res = yield call(apiRequest, requestUrl);
    console.log('res', res);
    // yield put(updateLocation(res.city));
    // const groupedDataByDt = groupArrayByName(res.list, "dt");
    // yield put(updateForecastListIds(Object.keys(groupedDataByDt)));
    // yield put(updateForecastMap(groupedDataByDt));
    yield put(fetchWeatherSuccess({ loading: false, error: false, city: res }));
  } catch (e) {
    yield put(fetchWeatherFailed({
      error: e,
      loading: false
    }))
  }
}

export default function* appSaga() {
  yield takeEvery(FETCH_WEATHER, handleFetchWeather);
}

