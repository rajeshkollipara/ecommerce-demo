import React from "react";
import PropTypes from "prop-types";
import "../components/Product.css";

const Product = ({ price, quantity, title, action, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt="new" className="product_image" />
      <h1>{title}</h1>
      <p className="price">&#36;{price}</p>
      <p className="description">{description}</p>
      {action}
    </div>
  );
};

export default Product;

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  action: PropTypes.node,
};
