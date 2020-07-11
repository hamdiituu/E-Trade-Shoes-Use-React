import React, { Component } from 'react'
import './styles.css';
class Trades extends Component {
    render() {
        return (
            <div className="filter-data">
            <p className="title">Trades</p>
            <div className="filter-check">
              <div>
                <input type="checkbox" id="adidas" name="adidas" />
                <label htmlFor="adidas">Adidas</label>
              </div>
  
              <div>
                <input type="checkbox" id="nike" name="nike" />
                <label htmlFor="nike">Nike</label>
              </div>
            </div>
          </div>
        )
    }
}

export default Trades;
