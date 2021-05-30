import { combineReducers } from "redux";
import Actions from "../constants";

function products(state, action) {
  switch (action.type) {
    case Actions.ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    case Actions.REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1,
      };
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case Actions.RECEIVE_PRODUCTS:
      return action.products.map((product) => product.id);
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  visibleIds,
});

export function getProduct(state, id) {
  return state.byId[id];
}

export function getVisibleProducts(state) {
  return state.visibleIds.map((id) => getProduct(state, id));
}