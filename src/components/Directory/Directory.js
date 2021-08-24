import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.imgur.com/djAGJc9.jpg",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.imgur.com/t19tSfw.jpg",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.imgur.com/2LlAEsp.jpg",
      id: 3,
    },
    {
      title: "womens",
      imageUrl: "https://i.imgur.com/3fpOpsf.jpg?2",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl: "https://i.imgur.com/YKmuWiB.jpg",
      size: "large",
      id: 5,
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;