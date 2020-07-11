import React from "react";
import { HomePage } from "./views";
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
    fetch("https://e-trade-api.firebaseio.com/colors.json")
      .then((res) => res.json())
      .then((res) => this.setState({ colors: res }))
      .catch((err) => console.log(err));
  };

  fetchGenders = () => {
    fetch("https://e-trade-api.firebaseio.com/genders.json")
      .then((res) => res.json())
      .then((res) => this.setState({ genders: res }))
      .catch((err) => console.log(err));
  };

  fetchNumbers = () => {
    fetch("https://e-trade-api.firebaseio.com/numbers.json")
      .then((res) => res.json())
      .then((res) => this.setState({ numbers: res }))
      .catch((err) => console.log(err));
  };

  fetchTrades = () => {
    fetch("https://e-trade-api.firebaseio.com/trade.json")
      .then((res) => res.json())
      .then((res) => this.setState({ trades: res }))
      .catch((err) => console.log(err));
  };

  fetchProducts = () => {
    fetch("https://e-trade-api.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }))
      .catch((err) => console.log(err));
  };

  render() {
    return <HomePage />;
  }
}

export default App;
