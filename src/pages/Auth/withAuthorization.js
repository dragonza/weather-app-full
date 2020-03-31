import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ROUTES } from "../App/constants";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { makeAuthUserSelector } from "./auth-selector";

const withAuthorization = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      console.log("this.props.user", this.props);
      if (!this.props.user) {
        this.props.history.push(ROUTES.SIGN_IN);
      }
    }
    //
    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps", prevProps);
      console.log('this.props', this.props);
      if (prevProps.user !== this.props.user && !this.props.user) {
        this.props.history.push(ROUTES.SIGN_IN);
      }
    }

    render() {
      console.log('render');
      return this.props.user ? <ChildComponent {...this.props} /> : null;
    }
  }
  const mapStateToProps = state => ({
    user: state.getIn(["auth", "user"])
  });

  return connect(mapStateToProps)(ComposedComponent);
};

export default withAuthorization;
