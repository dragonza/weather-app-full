import React from "react";
import CardList from "./CardList";
import { fromJS } from "immutable";
import AddCard from "./AddCard";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { makeAuthErrorSelector, makeAuthUserSelector } from "../Auth/auth-selector";
import { createStructuredSelector } from "reselect";

const data = {
  0: {
    city: "Paris"
  },
  1: {
    city: "Vancouver"
  }
};

const condition = authUser => !!authUser;
const Home = ({ user }) => {
  console.log("app");
  return (
    <Layout className="home-page__container" user={user}>
      <div className="cards-container">
        <CardList cards={fromJS(data)} />
        <Link to="/add">
          <AddCard />
        </Link>
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  user: makeAuthUserSelector()
});

// export default withAuthorization(Home);
export default connect(mapStateToProps)(Home);
