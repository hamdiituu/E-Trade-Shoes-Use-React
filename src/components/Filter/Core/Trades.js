import React, { Component } from "react";
import "./styles.css";
class Trades extends Component {
  

  render() {
    return (
      <div className="filter-data">
        <p className="title">Marka</p>
        <div className="filter-check">
          {this.props.trades.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  onChange={(e)=>this.props.handlerCheck(e)}
                  name={item.name}
                  id={item.id}
                  filter ="tradesFilter"
                />
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
