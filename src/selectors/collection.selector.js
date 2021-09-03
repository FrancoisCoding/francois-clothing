import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.collection;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log(collections, "COLLECTIONS ARRAY");
    console.log(collectionUrlParam, "COLLECTION PARAM");
    console.log(collections[collectionUrlParam], "COLLECTION");
    return collections[collectionUrlParam];
  })
);
