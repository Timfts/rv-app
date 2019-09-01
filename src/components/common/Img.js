import React, { useState } from "react";

export const Img = ({ className, noLabel, ...props }) => {
  const [loaded, setloaded] = useState(false);
  const baseStyle = {
    transition: "all .5s ease"
  };


  return (
      <>
    <img
      {...props}
      style={baseStyle}
      className={`${className} ${loaded ? "" : "loading-image"}`}
      onLoad={() => setloaded(true)}
    />
    {loaded ? '' : (
        <div className={`loading-image__space ${noLabel ? 'loading-image__space--no-label' : ''}`}>&nbsp;</div>
    )}
    </>
  );
};
