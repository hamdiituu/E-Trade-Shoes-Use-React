import React, { Component } from "react";
import "./styles.css";

class Numbers extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Beden</p>
        <div className="filter-check">
          {this.props.numbers.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  onChange={(e) => this.props.handlerCheck(e)}
                  filter="numbersFilter"
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

export default Numbers;
