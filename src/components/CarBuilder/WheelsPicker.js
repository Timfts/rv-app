import React from "react";
import PropTypes from "prop-types";

const WheelsPicker = ({ allWheels, currentWheels, onSelect }) => {
  return (
    <div className="wheels-picker">
      <div className="wheels-picker__wheels-container">
        {allWheels.map((wheel, index) => (
          <div
            key={`wheel-${index}`}
            onClick={() => onSelect(wheel)}
            className={`wheels-picker__wheel ${
              wheel.id === currentWheels.id
                ? "wheels-picker__wheel--active"
                : ""
            }`}
          >
            <div className="wheels-picker__wheel-image-container">
              <img
                className="wheels-picker__wheel-image"
                src={wheel.image}
                alt={`wheel model ${wheel.label}`}
              />
            </div>
            <span
              className={`wheels-picker__wheel-label ${
                wheel.id === currentWheels.id ? "" : "hide"
              }`}
            >
              {wheel.label}
            </span>
            <span
              className={`wheels-picker__wheel-included ${
                wheel.price === 0 && wheel.id === currentWheels.id ? "" : "hide"
              }`}
            >
              Included
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

WheelsPicker.propTypes = {
  allWheels: PropTypes.array.isRequired,
  currentWheels: PropTypes.object.isRequired,
  onSelect: PropTypes.func
};

export default WheelsPicker;
