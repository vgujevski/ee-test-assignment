import React from "react";

export const PriceCalculator = () => {
  return (
    <div className="price-calc-container">
      <div className="details-container">
        <div className="item">
          <div className="label">Base price:</div>
          <div className="amount">1000&euro;</div>
        </div>

        <div className="item">
          <div className="label">Color:</div>
          <div className="amount">+0&euro;</div>
        </div>

        <div className="item">
          <div className="label">Power:</div>
          <div className="amount">+200&euro;</div>
        </div>

        <div className="item">
          <div className="label">Warp Drive:</div>
          <div className="amount">+0&euro;</div>
        </div>

        <div className="item">
          <div className="label">Option Package:</div>
          <div className="amount">+0&euro;</div>
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <div className="label">Total:</div>
          <div className="amount cost">1200&euro;</div>
        </div>
      </div>
    </div>
  );
};
