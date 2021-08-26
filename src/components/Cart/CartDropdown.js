import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";

const CartDropdown = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartState.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
