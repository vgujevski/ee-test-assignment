import React from "react";

export const SelectColor = () => {
  return (
    <div className="part-selector-container">
      <h2>Select Color:</h2>
      <div className="part-list">
        <div className="part-list-item">
          <div
            className="color m-top-m"
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
          <div className="price m-top-xs">+0&euro;</div>
          <div className="name m-top-m m-bottom-l">Snow</div>
        </div>
        <div className="part-list-item">
          <div
            className="color m-top-m"
            style={{ backgroundColor: "#FF7A00" }}
          ></div>
          <div className="price m-top-xs">+100&euro;</div>
          <div className="name m-top-m m-bottom-l">Volcano</div>
        </div>
        <div className="part-list-item">
          <div
            className="color m-top-m"
            style={{ backgroundColor: "#6BE4FF" }}
          ></div>
          <div className="price m-top-xs">+100&euro;</div>
          <div className="name m-top-m m-bottom-l">Sky</div>
        </div>
      </div>
    </div>
  );
};
