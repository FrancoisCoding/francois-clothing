import React from "react";
import { selectSections } from "../../selectors/directory.selector";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const Directory = () => {
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    sections: selectSections,
  });
  const selectedState = structuredSelector(state);

  const { sections } = selectedState;
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...itemProps }) => (
        <MenuItem key={id} {...itemProps} />
      ))}
    </div>
  );
};

export default Directory;
