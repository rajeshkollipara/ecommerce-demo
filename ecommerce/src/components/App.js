import React, { Component } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "../styles.css";
import "../components/App.css";
import Header from "./Header";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="left-panel">
            <ProductList />
          </div>
          <div className="right-panel">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
