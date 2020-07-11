import React from "react";
import { HomePage } from "./views";
import { get } from "./utils/Networking";
class App extends React.Component {
  state = {
    colors: [],
    genders: [],
    numbers: [],
    trades: [],
    products: [],
  };

  componentDidMount() {
    this.fetchColors();
    this.fetchGenders();
    this.fetchNumbers();
    this.fetchTrades();
    this.fetchProducts();
  }

  fetchColors = () => {
    get("/colors")
      .then((res) => res.json())
      .then((res) => this.setState({ colors: res }))
      .catch((err) => console.log(err));
  };

  fetchGenders = () => {
    get("/genders")
      .then((res) => res.json())
      .then((res) => this.setState({ genders: res }))
      .catch((err) => console.log(err));
  };

  fetchNumbers = () => {
    get("/numbers")
      .then((res) => res.json())
      .then((res) => this.setState({ numbers: res }))
      .catch((err) => console.log(err));
  };

  fetchTrades = () => {
    get("/trade")
      .then((res) => res.json())
      .then((res) => this.setState({ trades: res }))
      .catch((err) => console.log(err));
  };

  fetchProducts = () => {
    get("/products")
      .then((res) => res.json())
      .then((res) => {
        let products = [];
        products.push(
          res.map((product) => {
            let trade = this.state.trades.filter(
              (trade) => trade.id === product.tradeId
            )[0].name;
            product.trade = trade;
            let color = this.state.colors.filter(
              (color) => color.id === product.colorId
            )[0].name;
            product.color = color;
            let gender = this.state.genders.filter(
              (gender) => gender.id === product.gender
            )[0].name;
            product.genderName = gender;
            return product;
          })
        );

        this.setState({ products: products[0] });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { products, trades, colors, genders, numbers } = this.state;
    return (
      <HomePage
        trades={trades}
        genders={genders}
        colors={colors}
        numbers={numbers}
        products={products}
      />
    );
  }
}

export default App;
