import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ROUTES } from "../App/constants";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import { compose } from "redux";


const withAuthorization = condition => ChildComponent => {
  class ComposedComponent extends Component {
    state = {
      user: null
    };

    // Our component just got rendered
    componentDidMount() {
      this.listener = firebase.auth().onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN);
        } else {
          this.setState({
            user: authUser
          })
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return this.state.user ? <ChildComponent {...this.props} /> : null;
    }
  }
  const mapStateToProps = createStructuredSelector({});

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(ComposedComponent);
};

export default withAuthorization;

