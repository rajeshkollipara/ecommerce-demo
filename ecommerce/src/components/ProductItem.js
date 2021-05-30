import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "../components/ProductItem.css";

const ProductItem = ({ product, onAddToCartClicked }) => {
  const addToCartAction = (
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  );

  return (
    <div>
      <Product
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
        action={addToCartAction}
      />
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};
