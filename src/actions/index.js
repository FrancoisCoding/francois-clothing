import * as actionTypes from "./types";

export const setUser = (user) => (dispatch) => {
  dispatch({ type: actionTypes.SET_USER, payload: user });
};
