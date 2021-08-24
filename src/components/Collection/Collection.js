import React from "react";
import "./Collection.scss";
import CollectionItem from "./CollectionItem";

const Collection = ({ title, items }) => {
  console.log(title, items);
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
