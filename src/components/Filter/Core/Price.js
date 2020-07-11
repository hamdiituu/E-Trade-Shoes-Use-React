import React, { Component } from "react";
import './styles.css'
class Price extends Component {
  render() {
    return (
      <div>
        <p className="title">Price</p>
        <div className="price-view">
          <input
            placeholder="Min"
            className="priceBox filter-input"
            type="text"
            name=""
          />
          -
          <input
            placeholder="Max"
            className="priceBox filter-input"
            type="text"
            name=""
          />
          ₺
        </div>
      </div>
    );
  }
}

export default Price;
