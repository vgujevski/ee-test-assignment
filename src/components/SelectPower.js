import React from "react";

export const SelectPower = () => {
  return (
    <div className="part-selector-container">
      <h2>Select Power:</h2>
      <div className="part-list">
        <div className="part-list-item">
          <div className="name m-top-m m-bottom-m">100 MW</div>
          <div className="price m-bottom-s">+0&euro;</div>
        </div>
        <div className="part-list-item">
          <div className="name m-top-m m-bottom-m">150 MW</div>
          <div className="price m-bottom-s">+200&euro;</div>
        </div>
        <div className="part-list-item">
          <div className="name m-top-m m-bottom-m">200 MW</div>
          <div className="price m-bottom-s">+500&euro;</div>
        </div>
      </div>
    </div>
  );
};
