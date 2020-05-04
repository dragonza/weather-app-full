import { createSelector } from 'reselect'

const selectedWeatherSelector = state => state.getIn(["selectedWeather"]);

export const makeSelectedWeatherSelector = () =>
  createSelector(
    selectedWeatherSelector,
    selectedWeather => selectedWeather
  );
