import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { createStructuredSelector } from 'reselect/lib/index';
import { signIn } from '../auth-action';
import {makeAuthErrorSelector, makeAuthUserSelector} from '../auth-selector';
import SigninForm from "./SigninForm";
import { ROUTES } from "../../App/constants";
import AuthenLayout from "../../../components/AuthenLayout";

class Signin extends Component {
  handleSignin = formProps => {
    const { signIn } = this.props;
    console.log('formProps', formProps);
    console.log('this.props', this.props);
    const user = {
      email: formProps.get('email'),
      password: formProps.get('password'),
    };
    signIn(user);
  };

  render() {
    const { errorMessage, user, location } = this.props;
    const from = location.state
      ? location.state.from
      : "/";
    if (user) {
      return <Redirect to={from} />;
    }
    return (
      <AuthenLayout>
        <div className="sign-in">
          {/*<div>{from === "/" ? null : "Please login before proceeding"}</div>*/}
          <div className="sign-in__content">
            <div className="sign-in__input-area">
              <h1>Signin</h1>
              <SigninForm
                onSubmit={this.handleSignin}
                errorMessage={errorMessage}
              />
              <div className="sign-in__link-ask">
                <span>Don't have an account? </span>
                <Link to={ROUTES.SIGN_UP} className="sign-in__link">Signup</Link>
              </div>
            </div>
            <div className="sign-in__bg">
              {/*<img*/}
              {/*  src="https://source.unsplash.com/random/1200x900?mountain"*/}
              {/*  alt="sign-in__bg"*/}
              {/*  className="sign-in__img"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </AuthenLayout>
    );
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  authenticated: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  errorMessage: makeAuthErrorSelector(),
  user: makeAuthUserSelector(),
});

export default connect(mapStateToProps, { signIn })(Signin);
