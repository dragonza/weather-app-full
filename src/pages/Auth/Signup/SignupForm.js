import React from "react";
import { reduxForm, Field } from "redux-form/immutable";
import FormInputField from "../../../components/FormInputField";
import { isValidEmail } from "../../../utils/validator";
import { commonRestrictions, errorsText } from "../auth-constant";

class SignupForm extends React.Component {
  renderFields = () => {
    return (
      <React.Fragment>
        <Field
          key="email"
          component={FormInputField}
          type="email"
          placeholder="john@example.com"
          name="email"
        />
        <Field
          key="password"
          component={FormInputField}
          type="password"
          placeholder="password"
          name="password"
        />
        <Field
          key="passwordConfirmed"
          component={FormInputField}
          type="password"
          placeholder="Confirm password"
          name="passwordConfirmed"
        />
      </React.Fragment>
    );
  };

  renderError = () => {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return <div className='form__error'>{errorMessage}</div>;
    }
    return null;
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="sign-up__form">
        {this.renderFields()}
        {this.renderError()}
        <button type="submit" className="sign-up__btn" disabled={submitting}>
          Signup
        </button>
      </form>
    );
  }
}

function validate(values) {
  // TODO: review this
  const errors = {};

  // if (!values.get("username")) {
  //   errors.username = errorsText.requireField;
  // } else if (
  //   values.get("username") &&
  //   values.get("username").length < commonRestrictions.usernameMinLength
  // ) {
  //   errors.username = errorsText.userNameMinLength;
  // }

  if (!values.get("email")) {
    errors.email = errorsText.requireField;
  } else if (!isValidEmail(values.get("email"))) {
    errors.email = "Invalid email address";
  }

  if (!values.get("password")) {
    errors.password = errorsText.requireField;
  } else if (
    values.get("password") &&
    values.get("password").length < commonRestrictions.passwordMinLength
  ) {
    errors.password = errorsText.passwordMinLength;
  }

  if (values.get("password") !== values.get("passwordConfirmed")) {
    errors.passwordConfirmed = errorsText.confirmPassWordNotMatch;
  }

  return errors;
}

export default reduxForm({
  form: "signupForm",
  validate
})(SignupForm);
