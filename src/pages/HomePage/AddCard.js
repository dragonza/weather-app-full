import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Plus from "../../components/icons/Plus";
import City from "../../components/icons/City";

class AddCard extends Component {
  render() {
    return (
      <div className="add-card">
        <div className="add-card__title">Add card</div>
        <div className="add-card__icon add-card__icon--plus">
          <Plus fill="#7EFFCC" />
        </div>
        <div className="add-card__icon add-card__icon--city-illustration">
          <City />
        </div>
      </div>
    );
  }
}

AddCard.propTypes = {};

export default AddCard;
