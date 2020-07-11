import React, { Component } from "react";
import "./styles.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Shop</h1>

        {/* <!-- Product Order--> */}
        <div className="order-product">
          <select name="order">
            <option value="artan">Fiyata Göre Artan</option>
            <option value="azalan">Fiyata Göre Azalan</option>
          </select>
        </div>
         {/* <!-- Product Order--> */}
      </div>
    );
  }
}

export default Header;
