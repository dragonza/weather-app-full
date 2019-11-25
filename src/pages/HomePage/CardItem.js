import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sunny from "../../components/icons/Sunny";
import Rain from "../../components/icons/Rain";
import Fog from "../../components/icons/Fog";
import Cloud from "../../components/icons/Cloud";
import Storm from "../../components/icons/Storm";
import Haze from "../../components/icons/Haze";
import { Link } from "react-router-dom";

class CardItem extends Component {
  render() {
    const { card } = this.props;
    return (
      <Link className="weather-card" to={`/detail/${card.get('city').toLowerCase()}`}>
        <div className="weather-card__city">{card.get('city')}</div>
        <div className="weather-card__icon-condition">
          <Sunny />
        </div>
        <div className="weather-card__info">
          <div className="weather-card__temp-container">
            <span className="weather-card__temp weather-card__temp--main">20</span>
            <span className="weather-card__metric">°</span>
          </div>
          <div className="weather-card__desc">cloudy</div>
        </div>
        <div className="weather-card__min-max-condition">
          <div className="weather-card__min">
            <div className="weather-card__icon">
              <svg className="min-arrow__icon" viewBox="188.5 807 21 21">
                <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow"/>
              </svg>
            </div>
            <div className="weather-card__temp">18</div>
            <div className="weather-card__text">Min</div>
          </div>
          <div className="weather-card__max">
            <div className="weather-card__icon">
              <svg className="max-arrow__icon" viewBox="449.5 820 21 21">
                <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow"/>
              </svg>
            </div>
            <div className="weather-card__temp">20</div>
            <div className="weather-card__text">Max</div>
          </div>
        </div>
      </Link>
    );
  }
}

CardItem.propTypes = {};

export default CardItem;
