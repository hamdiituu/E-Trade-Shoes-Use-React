import React, { Component } from "react";
import {
  Price,
  Trades,
  Genders,
  Colors,
  Numbers,
  SearchBox,
} from "./Core";
import "./styles.css";
class Filter extends Component {
  
  render() {
    const { numbers,trades,genders,colors} = this.props;
    return (
      <div className="filter-bar sticky">
        {/* <!-- Search Box--> */}
        <SearchBox />

        {/* <!-- Search Box--> */}

        {/* <!-- Price Filter Box--> */}

        <Price />

        {/* <!-- Price Filter Box-->

		<!-- Trades Filter Box--> */}

        <Trades  trades ={trades}/>

        {/* <!-- Trades Filter Box--> */}

        {/* <!-- Genders Filter Box--> */}

        <Genders genders={genders} />

        {/* <!-- Genders Filter Box--> */}

        {/* <!-- Colors Filter Box--> */}

        <Colors colors={colors} />

        {/* <!-- Numbers Filter Box--> */}

        <Numbers numbers={numbers} />

        {/* <!-- Numbers Filter Box--> */}

       
      </div>
    );
  }
}

export default Filter;
