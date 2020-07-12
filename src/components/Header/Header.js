import React, { Component } from "react";
import "./styles.css";
class Header extends Component {
  state = {
    options: [
      {
        name: "Sıralama Seçiniz",
        value: "goster",
        disable: true,
      },
      {
        name: "Fiyata göre artan",
        value: "art",
        disable: false,
      },
      {
        name: "Fiyata göre azalan",
        value: "azal",
        disable: false,
      },
    ],
  };
  render() {
    const { options } = this.state;
    return (
      <div className="header">
        <h1 className="header-title">Shop</h1>

        {/* <!-- Product Order--> */}
        <div className="order-product">
          <select  defaultValue={'goster'} onChange={e => this.props.orderProduct(e)}>
            {options.map((item) => (
              <option key={item.value} disabled={item.disable} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* <!-- Product Order--> */}
      </div>
    );
  }
}

export default Header;
