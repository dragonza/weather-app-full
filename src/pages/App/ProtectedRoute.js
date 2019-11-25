import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from "firebase";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeAuthUserSelector } from '../Auth/auth-selector';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const user = firebase.auth().currentUser;
  console.log('user', user);
  return (
    (
      <Route
        {...rest}
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          )
        }
      />
    )
  )
}

const mapStateToProps = createStructuredSelector({
  user: makeAuthUserSelector(),
});

export default connect(mapStateToProps)(PrivateRoute);
