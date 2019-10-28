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
        <Link className="weather-detail__icon weather-detail__icon--back">
          <BackArrow />
        </Link>
        <div className="weather-detail__bg">
          <BgGradientCircle/>
        </div>
        <section className="weather-detail__content">
          <div className="weather-detail__content-header">
            <div className="weather-detail__icon-condition">
              <Sunny />
            </div>
            <div className="weather-detail__temp-container">
              <span className="weather-detail__temp weather-card__temp--main">20</span>
              <span className="weather-detail__metric">°</span>
            </div>
            <div className="weather-detail__desc">cloudy</div>
            <div className="weather-detail__city">
              Paris
            </div>
          </div>
          <div className="weather-detail__content-body">
            This is content body
          </div>
        </section>
      </div>
    );
  }
}

WeatherDetail.propTypes = {};

export default WeatherDetail;
