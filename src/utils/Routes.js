import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
};

export default Routes;
