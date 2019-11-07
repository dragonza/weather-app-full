import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect/lib/index";
import { signUp } from "../auth-action";
import { makeAuthErrorSelector } from "../auth-selector";
import SignupForm from "./SignupForm";
import { Link } from 'react-router-dom'
import { ROUTES } from "../../App/constants";

class Signup extends Component {
  handleSignUp = formProps => {
    const { signUp } = this.props;
    console.log('formProps', formProps);
    const user = {
      email: formProps.get("email"),
      password: formProps.get("password")
    };
    console.log("user", user);
    signUp(user);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <div className="sign-up">
        <div className="sign-up__content">
          <div className="sign-up__input-area">
            <h1>Signup</h1>
            <SignupForm
              onSubmit={this.handleSignUp}
              errorMessage={errorMessage}
            />
            <div className="sign-up__link-ask">
              <span>Already have an account? </span>
              <Link to={ROUTES.LOGIN} className="sign-up__link">Login</Link>
            </div>
          </div>
          <div className="sign-up__bg">
            <img
              src="https://source.unsplash.com/random/1200x900?mountain"
              alt="sign-up__bg"
              className="sign-up__img"
            />
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  errorMessage: makeAuthErrorSelector()
});

// export default compose(
//   connect(
//     mapStateToProps,
//     { signUp },
//   ),
//   reduxForm({ form: 'signup', destroyOnUnmount: false }),
// )(Signup);
export default connect(
  mapStateToProps,
  { signUp }
)(Signup);
