import React, { Component } from "react";
import "./styles.css";
class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          src="https://www.tshigo.com/wp-content/uploads/2019/05/hersey-cok-guzel-olacak-erkek-tisort.jpg"
          className="card-img"
          alt="Product İmage"
        ></img>
        <p className="card-trade">Adidas</p>
        <p className="card-subtitle">
          Kırmızı T-sort <small>Erkek - Kırmızı</small>{" "}
        </p>
        <p className="card-price">19.99 ₺</p>
      </div>
    );
  }
}

export default Card;
