import React, { Component } from "react";
import "./styles.css";

const NumberWiew = ({ data }) => {
  return (
    <small style={{ flexDirection: "row" }}>
      {data.map((item) => {
        return <small style={{margin : 2,background:"tomato",color:"white",borderRadius:40,padding:1}} key ={item} >{item}</small>;
      })}
    </small>
  );
};

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
        <NumberWiew data={product.number} />
        <p className="card-price">{product.price} ₺</p>
      </div>
    );
  }
}

export default Card;
