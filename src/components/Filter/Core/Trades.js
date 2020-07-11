import React, { Component } from "react";
import "./styles.css";
class Trades extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Markalar</p>
        <div className="filter-check">
          {this.props.trades.map((item) => {
            return (
              <div key={item.id}>
                <input type="checkbox"  name={item.name} />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Trades;
