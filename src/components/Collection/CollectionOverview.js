import React from "react";
import { createStructuredSelector } from "reselect";
import Collection from "./Collection";
import { selectCollectionsForPreview } from "../../selectors/collection.selector";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });
  const selectedState = structuredSelector(state);
  const { collections } = selectedState;

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
