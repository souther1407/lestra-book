import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import { wait } from "../../../utils/wait";

const TextTypeEffect = ({ type = "text", children, ...otherProps }) => {
  const [text, setText] = useState("");
  const updateText = async () => {
    for (const char of children) {
      setText((prev) => prev + char);
      await wait(50);
    }
  };
  useEffect(() => {
    updateText();
  }, []);

  if (type === "text") return <Text {...otherProps}>{text}</Text>;
  else return <Title {...otherProps}>{text}</Title>;
};

export default TextTypeEffect;
