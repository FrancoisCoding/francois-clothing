import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.imgur.com/djAGJc9.jpg",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.imgur.com/t19tSfw.jpg",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.imgur.com/2LlAEsp.jpg",
      id: 3,
      linkUrl: "sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.imgur.com/3fpOpsf.jpg?2",
      size: "large",
      id: 4,
      linkUrl: "womans",
    },
    {
      title: "mens",
      imageUrl: "https://i.imgur.com/YKmuWiB.jpg",
      size: "large",
      id: 5,
      linkUrl: "mens",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...itemProps }) => (
        <MenuItem key={id} {...itemProps} />
      ))}
    </div>
  );
};

export default Directory;
