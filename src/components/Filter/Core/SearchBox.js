import React, { Component } from "react";
import "./styles.css";
class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search"
        className="searchBox filter-input"
      />
    );
  }
}
export default SearchBox;
