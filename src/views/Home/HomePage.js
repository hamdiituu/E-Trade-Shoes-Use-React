import React, { Component } from "react";
import { Filter, CardList, Header } from "../../components";
import "./styles.css";
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <Header />
          <CardList />
        </div>
        <Filter />
      </div>
    );
  }
}

export default HomePage;
