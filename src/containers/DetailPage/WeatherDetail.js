import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BackArrow from "../../components/icons/BackArrow";
import BgGradientCircle from "../../components/background/BgGradientCircle";
import Sunny from "../../components/icons/Sunny";
import { Link } from 'react-router-dom';

class WeatherDetail extends Component {
  componentDidMount() {
    // call api for a city here
  }

  render() {
    return (
      <div className="weather-detail">
        <Link className="weather-detail__icon weather-detail__icon--back" to="/">
          <BackArrow />
        </Link>
        <div className="weather-detail__bg">
          <BgGradientCircle/>
        </div>
        <section className="weather-detail__content">
          <div className="weather-detail__content-header">
            <div className="weather-detail__info">
              <div className="weather-detail__icon weather-detail--icon-weather">
                <Sunny />
              </div>
              <div className="weather-detail__temp-info">
                <div className="weather-detail__temp-container">
                  <span className="weather-detail__temp weather-detail__temp--main">20</span>
                  <span className="weather-detail__metric">°</span>
                </div>
                <div className="weather-detail__desc">cloudy</div>
              </div>
            </div>

            <div className="weather-detail__city">
              <span className="weather-detail__city-text">
                Paris
              </span>
            </div>
          </div>
          <div className="weather-detail__content-body">
            <div className="weather-detail__forecast">

            </div>
          </div>
        </section>
      </div>
    );
  }
}

WeatherDetail.propTypes = {};

export default WeatherDetail;
