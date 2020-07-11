import React, { Component } from "react";
import './styles.css'
class Numbers extends Component {
  render() {
    return (
      <div className="filter-data">
        <p className="title">Numbers</p>
        <div className="filter-check">
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">38</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">39</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">40</label>
          </div>
        </div>
      </div>
    );
  }
}


export default Numbers;