import React from "react";

export const SelectWarpDrive = () => {
  return (
    <div className="part-selector-container">
      <h2>Warp Drive:</h2>
      <div className="part-list">
        <div className="part-list-item">
          <div className="name m-top-m m-bottom-m">NO</div>
          <div className="price m-bottom-s">0&euro;</div>
        </div>
        <div className="part-list-item">
          <div className="name m-top-m m-bottom-m">YES</div>
          <div className="price m-bottom-s">+1000&euro;</div>
        </div>
      </div>
    </div>
  );
};
