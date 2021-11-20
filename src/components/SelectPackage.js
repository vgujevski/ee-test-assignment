import React from "react";

export const SelectPackage = () => {
  return (
    <div className="part-selector-container">
      <h2>Select Option Package:</h2>
      <div className="part-list">
        <div className="part-list-item">
          <div className="name m-top-m">Basic</div>
          <div className="price m-bottom-s m-top-s">+0&euro;</div>
          <div className="details-container">
            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Air conditioning</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Cloth seats</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Fm radio</div>
            </div>
          </div>
        </div>
        <div className="part-list-item">
          <div className="name m-top-m">Sport</div>
          <div className="price m-bottom-s m-top-s">+100&euro;</div>

          <div className="details-container">
            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Air conditioning</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Cloth seats</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Fm radio</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Personal tech support</div>
            </div>
          </div>
        </div>

        <div className="part-list-item">
          <div className="name m-top-m">Lux</div>
          <div className="price m-bottom-s m-top-s">+500&euro;</div>

          <div className="details-container">
            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Air conditioning</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Luxury seats</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Fm radio</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Chrome wheels</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Window tint</div>
            </div>

            <div className="feature-container">
              <div className="arrow-up"></div>
              <div className="feature m-bottom-xs">Subwoofer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
