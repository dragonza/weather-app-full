import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";

class AddWeather extends Component {
  render() {
    return (
      <Layout className="add-weather__container">
        <div className="add-weather__content">
          <div className="add-weather__city-list">
            Hello
          </div>
          <div className="add-weather__city-of-the-month">

          </div>
        </div>

      </Layout>
    );
  }
}

AddWeather.propTypes = {};

export default AddWeather;
