import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import { connect}  from 'react-redux'
import CitySelection from "../../components/CitySelection";
import { fetchWeather } from "./add-action";
import {createStructuredSelector} from "reselect";
import {makeSelectedWeatherSelector} from "./add-selectors";
import CardItem from "../../components/CardItem";

class AddWeather extends Component {

  onSelectCity = (city) => {
    this.props.fetchWeather(city.id)
  }

  render() {
    console.log('this.prop.selectedWeather', this.props.selectedWeather.toJSON());
    return (
      <Layout className="add-weather__container">
        <div className="add-weather__content">
          <div className="add-weather__city-selection">
            <div className="add-weather__title">
              SEARCH CITIES
            </div>
            <CitySelection onSelect={this.onSelectCity} />
            <div className="add-weather__card">
              <CardItem card={this.props.selectedWeather.get('city')} />

            </div>
          </div>
          <div className="add-weather__city-of-the-month">

          </div>
        </div>

      </Layout>
    );
  }
}

AddWeather.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectedWeather: makeSelectedWeatherSelector()
});

export default connect(mapStateToProps, {fetchWeather} )(AddWeather);
