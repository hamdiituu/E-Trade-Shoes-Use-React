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
    tradesFilter: [],
    gendersFilter: [],
    colorsFilter: [],
    numbersFilter: [],
    productsFilterList: [],
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
            product.trade = this.state.trades.find(
              (t) => t.id === product.tradeId
            ).name;
            product.color = this.state.colors.find(
              (c) => c.id === product.colorId
            ).name;
            product.genderName = this.state.genders.find(
              (c) => c.id === product.gender
            ).name;
            product.visible = true;
            return product;
          })
        );

        this.setState({ products: products[0] });
      })
      .catch((err) => console.log(err));
  };

  handlerCheck = (e) => {
    let checked = e.target.checked;
    let id = parseInt(e.target.id);
    let filter = e.target.getAttribute("filter");
    let list = this.state[filter];
    if (checked) {
      !list.find((i) => i === id) && list.push(id);
      this.setState({ [filter]: list });
      //console.log(this.state.trades);
    } else {
      let index = list.indexOf(id);
      list.splice(index, 1);

      this.setState({ [filter]: list });
      //console.log(this.state.trades);
    }

    console.log(filter, this.state[filter]);
    this.productsToFilter();
  };

  productsToFilter = () => {
    // debugger;
    const {
      tradesFilter,
      products,
      gendersFilter,
      colorsFilter,
      numbersFilter,
    } = this.state;
    let result = products;
    result.forEach((p) => {
      if (tradesFilter.length > 0) {
        if (tradesFilter.find((t) => t === p.tradeId)) {
          p.visible = true;
        } else {
          p.visible = false;
        }
      } else {
        p.visible = true;
      }
    });

    result.forEach((p) => {
      if (gendersFilter.length) {
        // debugger;
        !gendersFilter.find((g) => g === p.gender) && (p.visible = false);
      }
    });

    result.forEach((p) => {
      if (colorsFilter.length > 0) {
        !colorsFilter.find((g) => g === p.colorId) && (p.visible = false);
      }
    });
    // result.map((p) => {
    //   if (numbersFilter.length > 0) {
    //     let visible = false;
    //     p.number.map(i=>{
    //      // debugger;
    //      visible = numbersFilter.map(element => {
    //       if(element === i){
    //         return true;
    //       }
    //       else{
    //         return false
    //       }
    //      });
    //      !(visible) && (p.visible =false)
    //     })
    //   }
    // });

    result.forEach((p) => {
      if (numbersFilter.length > 0) {
        let visible = false;
        numbersFilter.forEach((nf) => {
          p.number.find((pn) => pn === nf) && (visible = true);
        });
        !visible && (p.visible = false);
      }
    });

    this.setState({ products: result });

    console.log(result);
    this.setState({ productsFilterList: result });
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
        handlerCheck={this.handlerCheck}
      />
    );
  }
}

export default App;
