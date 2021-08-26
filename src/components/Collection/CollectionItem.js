import React from "react";

import "./CollectionItem.scss";

import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions/index";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="collection-item">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
