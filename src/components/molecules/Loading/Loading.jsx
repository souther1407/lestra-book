import React from "react";
import RingLoader from "react-spinners/RingLoader";

function Loading({
  loading = "true",
  color = "#dd211e",
  size = "150",
  speedMultiplier = "1.5",
}) {
  return (
    <div className="sweet-loading">
      <RingLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={speedMultiplier}
      />
    </div>
  );
}

export default Loading;
