import React from "react";
import PropTypes from "prop-types";
import "../components/CartItem.css";

const CartItem = ({ price, quantity, title, onRemove, onAdd }) => {
  return (
    <div>
      <div></div>
      <div>Title: {title}</div>
      <div>Price: {price}</div>
      <div className="flex-container">
        <input type="button" onClick={onRemove} value="-" />
        <div className="quantity">{quantity}</div>
        <input type="button" onClick={onAdd} value="+" />
      </div>
      <hr />
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
