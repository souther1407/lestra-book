import React, { useState } from "react";
import styles from "./textArea.module.css";

const TextArea = ({ onChange, ...props }) => {
  const [rows, setRows] = useState(3);
  const [height, setHeight] = useState(0);
  const handleChange = (e) => {
    if (height != 0 && height < e.target.scrollHeight) {
      setRows((prev) => prev + 1);
    }
    onChange(e);
    setHeight(e.target.scrollHeight);
    if (e.target.value === "") {
      setRows(3);
    }
  };
  return (
    <textarea
      {...props}
      className={`${styles.areaPost}`}
      rows={rows}
      onChange={handleChange}
    ></textarea>
  );
};

export default TextArea;
