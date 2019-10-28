import React from 'react';
import CardList from "./CardList";
import { fromJS } from "immutable";
import AddCard from "./AddCard";
import BackArrow from "../../components/icons/BackArrow";

const data = {
  0: {
    city: 'Paris'
  },
  1: {
    city: 'Vancouver'
  }

};

export default () => {
  console.log('app');
  return (
    <div className="main__container">
      <div className="app__icon app__icon--left">
        L
      </div>
      <div className="cards-container">
        <CardList cards={fromJS(data)} />
        <AddCard />
      </div>
      <div className="app__icon app__icon--right">
        R
      </div>
    </div>
  );
};
