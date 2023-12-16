import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const parseSize = (size) => {
  switch (size) {
    case "sm":
      return "0.8rem";
    case "md":
      return "1rem";
    case "lg":
      return "1.2rem";
    case "xlg":
      return "1.4rem";
    case "xxlg":
      return "1.8rem";
  }
};
const Icon = ({ type, size = "md", color }) => {
  const props = {
    fill: color,
    size: parseSize(size),
  };
  const icons = {
    heart: <FaRegHeart {...props} />,
    heartFilled: <FaHeart {...props} />,
    bars: <FaBars {...props} />,
  };
  return icons[type];
};

export default Icon;
