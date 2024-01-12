import React from "react";
import {
  FaRegHeart,
  FaHeart,
  FaBars,
  FaTimes,
  FaGoogle,
  FaGithub,
  FaBirthdayCake,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot, FaFaceGrin } from "react-icons/fa6";
import {
  IoChatbubbleOutline,
  IoImagesOutline,
  IoPersonAdd,
} from "react-icons/io5";
import { MdVideoCameraFront, MdGifBox, MdPersonAddAlt1 } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
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
    case "big":
      return "5rem";
  }
};
const Icon = ({ type, size = "md", color, colorStroke = color }) => {
  const props = {
    stroke: colorStroke,
    fill: color,
    size: parseSize(size),
  };
  const icons = {
    heart: <FaRegHeart {...props} />,
    bubble: <IoChatbubbleOutline {...props} />,
    heartFilled: <FaHeart {...props} />,
    bars: <FaBars {...props} />,
    close: <FaTimes {...props} />,
    loading: <AiOutlineLoading3Quarters {...props} />,
    google: <FaGoogle {...props} />,
    github: <FaGithub {...props} />,
    twitter: <FaXTwitter {...props} />,
    send: <FiSend {...props} />,
    camera: <MdVideoCameraFront {...props} />,
    image: <IoImagesOutline {...props} />,
    smile: <FaFaceGrin {...props} />,
    person: <IoPersonAdd {...props} />,
    location: <FaLocationDot {...props} />,
    gif: <MdGifBox {...props} />,
    dots: <HiDotsHorizontal {...props} />,
    cake: <FaBirthdayCake {...props} />,
    person: <MdPersonAddAlt1 {...props} />,
    
  };
  return icons[type];
};

export default Icon;
