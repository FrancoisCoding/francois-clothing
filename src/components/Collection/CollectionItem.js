import React from "react";

import "./CollectionItem.scss";

import CustomButton from "../CustomButton/CustomButton";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
