import React, { Component } from "react";
import "./styles.css";

class Colors extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Renk</p>
        <div className="filter-check">
          {this.props.colors.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  onChange={(e) => this.props.handlerCheck(e)}
                  filter="colorsFilter"
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

export default Colors;
