import React, { Component } from "react";
import "./styles.css";
class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <img
          src={product.image[0]}
          className="card-img"
          alt={product.name}
        ></img>
        <p className="card-trade">{product.trade}</p>
        <p className="card-subtitle">{product.name} </p>
        <p>
          <small>
            {product.genderName} - {product.color}
          </small>
        </p>
        <p className="card-price">{product.price} ₺</p>
      </div>
    );
  }
}

export default Card;
