import React from "react";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#dd211e");

  return (
    <div className="sweet-loading">
      <RingLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1.5"
      />
    </div>
  );
}

export default Loading;
