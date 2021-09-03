import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as actionTypes from "../actions/types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../components/Cart/Cart.utils";
import { SHOP_DATA } from "../pages/ShopPage/data";

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
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
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

const directoryState = {
  directory: {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.imgur.com/djAGJc9.jpg",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.imgur.com/t19tSfw.jpg",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.imgur.com/2LlAEsp.jpg",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.imgur.com/3fpOpsf.jpg?2",
        size: "large",
        id: 4,
        linkUrl: "shop/womans",
      },
      {
        title: "mens",
        imageUrl: "https://i.imgur.com/YKmuWiB.jpg",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  },
};

const directoryReducer = (state = directoryState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const collectionState = {
  collections: SHOP_DATA,
};

const collectionReducer = (state = collectionState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
