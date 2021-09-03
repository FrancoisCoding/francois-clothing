import React from "react";
import CollectionItem from "../../components/Collection/CollectionItem";
import { selectCollection } from "../../selectors/collection.selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    collection: selectCollection(match.params.collectionId),
  });
  const selectedState = structuredSelector(state);
  const { collection } = selectedState;

  const { title, items } = collection;

  console.log(collection, "COLLECTION");
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
