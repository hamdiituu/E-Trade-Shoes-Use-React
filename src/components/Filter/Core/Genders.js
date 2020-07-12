import React, { Component } from "react";
import "./styles.css";
class Genders extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Cinsiyet</p>
        <div className="filter-check">
          {this.props.genders.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  onChange={(e) => this.props.handlerCheck(e)}
                  filter ="gendersFilter"
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

export default Genders;
