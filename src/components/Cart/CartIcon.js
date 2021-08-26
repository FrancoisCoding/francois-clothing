import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const cartCount = state.cartItems.reduce(
    (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
    0
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
