import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeAuthUserSelector } from '../Auth/auth-selector';

export const PrivateRoute = ({
  authenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated && authenticated.length ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  user: makeAuthUserSelector(),
});

export default connect(mapStateToProps)(PrivateRoute);
