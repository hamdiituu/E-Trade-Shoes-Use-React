import React, { Component } from "react";
import "./styles.css";

class Colors extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Colors</p>
        <div className="filter-check">
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Gray</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Black</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Red</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;