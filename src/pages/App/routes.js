import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import Layout from '../../components/Layout';

import { configureStore } from '../../store/configure-store';
import Home from '../HomePage/Home';
import WeatherDetail from "../DetailPage/WeatherDetail";
import Signup from '../Auth/Signup/Signup';
import PrivateRoute from './ProtectedRoute';
import Signin from '../Auth/Signin/Signin';
import AddWeather from "../AddWeatherPage/AddWeather";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function Routes() {
  const store = configureStore({ history });

  return (
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/detail/:city" component={WeatherDetail} />
          <PrivateRoute path="/add" component={AddWeather} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route component={() => <div>404 Not found </div>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
