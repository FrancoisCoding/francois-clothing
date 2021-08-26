import * as actionTypes from "./types";

/* User Actions */
export const setUser = (user) => (dispatch) => {
  dispatch({ type: actionTypes.SET_USER, payload: user });
};

/* Cart Actions */
export const toggleCartHidden = (bool) => (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_CART_HIDDEN, payload: bool });
};

export const addItem = (item) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_ITEM, payload: item });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_ITEM, payload: item });
};

export const clearItemFromCart = (item) => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ITEM_FROM_CART, payload: item });
};
