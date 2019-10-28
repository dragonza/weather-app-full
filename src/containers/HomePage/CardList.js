import React, { Component } from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import CardItem from "./CardItem";

class CardList extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="cards-list">
        {cards.valueSeq().map(card => (
          <CardItem key={Math.random() || card.get("id")} card={card} />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.instanceOf(Map).isRequired
};

export default CardList;
