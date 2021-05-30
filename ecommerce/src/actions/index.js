import Actions from "../constants";

export function getAllProducts() {
  return {
    type: Actions.GET_ALL_PRODUCTS,
  };
}

export function receiveProducts(products) {
  return {
    type: Actions.RECEIVE_PRODUCTS,
    products: products,
  };
}

export function addToCart(productId) {
  return {
    type: Actions.ADD_TO_CART,
    productId,
  };
}

export function removeFromCart(productId) {
  return {
    type: Actions.REMOVE_FROM_CART,
    productId,
  };
}

export function checkout() {
  return {
    type: Actions.CHECKOUT_REQUEST,
  };
}

export function checkoutSuccess(cart) {
  return {
    type: Actions.CHECKOUT_SUCCESS,
    cart,
  };
}

export function checkoutFailure(error) {
  return {
    type: Actions.CHECKOUT_FAILURE,
    error,
  };
}
