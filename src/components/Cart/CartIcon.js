import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../actions";
import { selectCartItemsCount } from "../../selectors/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    cartCount: selectCartItemsCount,
  });
  const selectedState = structuredSelector(state);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{selectedState.cartCount}</span>
    </div>
  );
};

export default CartIcon;
