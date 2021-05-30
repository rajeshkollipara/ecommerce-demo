import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { checkout, removeFromCart, addToCart } from "../actions";
import {
  getTotal,
  getCartProducts,
  getCheckoutError,
  isCheckoutPending,
} from "../reducers";

const Cart = ({
  products,
  total,
  error,
  checkoutPending,
  checkout,
  removeFromCart,
  addToCart,
}) => {
  const hasProducts = products.length > 0;
  const checkoutAllowed = hasProducts && !checkoutPending;

  const nodes = !hasProducts ? (
    <em>Please add products to cart.</em>
  ) : (
    products.map((product) => (
      <CartItem
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        onRemove={() => removeFromCart(product.id)}
        onAdd={() => addToCart(product.id)}
      />
    ))
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={checkout} disabled={checkoutAllowed ? "" : "disabled"}>
        Checkout
      </button>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  );
};

Cart.propTypes = {
  // data
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart, addToCart }
)(Cart);
