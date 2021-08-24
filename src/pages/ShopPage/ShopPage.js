import React, { useState, useEffect } from "react";
import { SHOP_DATA } from "./data";
import Collection from "../../components/Collection/Collection";

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  console.log(collections, "COLLECTIONS");
  return (
    <div>
      {collections.map(({ id, ...collectionProps }) => {
        return <Collection key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default Shop;
