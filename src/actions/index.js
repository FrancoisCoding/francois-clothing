import * as actionTypes from "./types";

/* User Actions */
export const setUser = (user) => (dispatch) => {
  dispatch({ type: actionTypes.SET_USER, payload: user });
};

/* Cart Actions */
export const toggleCartHidden = (bool) => (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_CART_HIDDEN, payload: bool });
};
