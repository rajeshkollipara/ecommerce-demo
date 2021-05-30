import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

import { connect } from "react-redux";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import "../components/ProductList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ products: getVisibleProducts(state.products) }),
  { addToCart }
)(ProductList);
