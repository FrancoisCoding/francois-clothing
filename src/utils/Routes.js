import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import { useSelector } from "react-redux";

const Routes = () => {
  const state = useSelector((state) => state.user);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() =>
            state.user ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
      </Switch>
    </div>
  );
};

export default Routes;
