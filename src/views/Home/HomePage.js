import React, { Component } from "react";
import { Filter, CardList, Header } from "../../components";
import "./styles.css";
class HomePage extends Component {
  render() {
    const { products ,numbers,trades,genders,colors} = this.props;
    return (
      <div className="container">
        <div className="content">
          <Header />
          <CardList trades={trades} colors={colors} products={products} />
        </div>
        <Filter numbers ={numbers} trades={trades} colors={colors} genders={genders} />
      </div>
    );
  }
}

export default HomePage;
