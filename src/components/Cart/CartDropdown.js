import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../selectors/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../actions";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    cartItems: selectCartItems,
  });
  const selectedState = structuredSelector(state);
  const { cartItems } = selectedState;

  const checkout = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={checkout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
