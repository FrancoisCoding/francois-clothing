import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import CollectionOverview from "../../components/Collection/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
