import React from "react";
import "./CheckoutPage.scss";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../selectors/cart.selectors";
import CheckoutItem from "../../components/Checkout/CheckoutItem";

const CheckoutPage = () => {
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });
  const selectedState = structuredSelector(state);

  const { total, cartItems } = selectedState;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

export default CheckoutPage;
