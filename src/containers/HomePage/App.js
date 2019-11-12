import React from 'react';
import CardList from "./CardList";
import { fromJS } from "immutable";
import AddCard from "./AddCard";
import Layout from "../../components/Layout";

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
    <Layout className="home-page__container">
      <div className="cards-container">
        <CardList cards={fromJS(data)} />
        <AddCard />
      </div>
    </Layout>
  );
};
