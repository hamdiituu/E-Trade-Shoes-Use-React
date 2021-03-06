import React, { Component } from "react";
import {Trades, Genders, Colors, Numbers } from "./Core";
import "./styles.css";
class Filter extends Component {
  render() {
    const {
      numbers,
      trades,
      genders,
      colors,
      handlerCheck,
    } = this.props;
    return (
      <div className="filter-bar sticky">
        {/* <!-- Price Filter Box--> */}

        

        {/* <!-- Price Filter Box-->

		<!-- Trades Filter Box--> */}

        <Trades handlerCheck={handlerCheck} trades={trades} />

        {/* <!-- Trades Filter Box--> */}

        {/* <!-- Genders Filter Box--> */}

        <Genders handlerCheck={handlerCheck} genders={genders} />

        {/* <!-- Genders Filter Box--> */}

        {/* <!-- Colors Filter Box--> */}

        <Colors handlerCheck={handlerCheck} colors={colors} />

        {/* <!-- Numbers Filter Box--> */}

        <Numbers handlerCheck={handlerCheck} numbers={numbers} />

        {/* <!-- Numbers Filter Box--> */}
      </div>
    );
  }
}

export default Filter;
