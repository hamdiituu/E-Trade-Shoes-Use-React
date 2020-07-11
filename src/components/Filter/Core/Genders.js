import React, { Component } from "react";
import './styles.css'
class Genders extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Genders</p>
        <div className="filter-check">
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Male</label>
          </div>

          <div>
            <input type="checkbox" id="female" name="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Unisex</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Genders;