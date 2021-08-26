import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import {
  addItemToCart,
  clearItemFromCart,
} from "../components/Cart/Cart.utils";

const userState = {
  user: null,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const cartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
