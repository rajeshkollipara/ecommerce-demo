import keyMirror from "keymirror";
var Actions = keyMirror({
  INCREMENT: null,
  GET_ALL_PRODUCTS: null,
  RECEIVE_PRODUCTS: null,
  ADD_TO_CART: null,
  REMOVE_FROM_CART: null,
  CHECKOUT_REQUEST: null,
  CHECKOUT_SUCCESS: null,
  CHECKOUT_FAILURE: null,
});

export default Actions;
