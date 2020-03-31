import { createSelector } from "reselect";

const authErrorSelector = state => state.getIn(["auth", "errorMessage"]);

export const makeAuthErrorSelector = () =>
  createSelector(
    authErrorSelector,
    errorMessage => errorMessage
  );

const authUserSelector = state => state.getIn(["auth", "user"]);

export const makeAuthUserSelector = () =>
  createSelector(
    authUserSelector,
    token => token
  );
