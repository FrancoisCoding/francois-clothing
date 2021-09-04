import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as Logo } from "../../assets/francois-clothing.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_0kGfV3YWFq6W2pD0jWShwMwJ00r4UgxQtz";

  const onToken = (token) => {
    console.log(token, "TOKEN");
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Francois Clothing"
      billingAddress
      shippingAddress
      image="https://i.imgur.com/JcBUsLg.png"
      description={`Your title is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
