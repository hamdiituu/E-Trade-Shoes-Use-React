import React, { Component } from "react";
import {
  Price,
  Trades,
  Genders,
  Colors,
  Numbers,
  ShowButton,
  SearchBox,
} from "./Core";
import "./styles.css";
class Filter extends Component {
  render() {
    return (
      <div className="filter-bar sticky">
        {/* <!-- Search Box--> */}
        <SearchBox />

        {/* <!-- Search Box--> */}

        {/* <!-- Price Filter Box--> */}

        <Price />

        {/* <!-- Price Filter Box-->

		<!-- Trades Filter Box--> */}

        <Trades />

        {/* <!-- Trades Filter Box--> */}

        {/* <!-- Genders Filter Box--> */}

        <Genders />

        {/* <!-- Genders Filter Box--> */}

        {/* <!-- Colors Filter Box--> */}

        <Colors />

        {/* <!-- Numbers Filter Box--> */}

        <Numbers />

        {/* <!-- Numbers Filter Box--> */}

        <ShowButton />
      </div>
    );
  }
}

export default Filter;
