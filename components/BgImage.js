import React from "react";

const BgImage = ({ children }) => {
  return (
    <div className="bg-container">
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default BgImage;
