import React from "react";
import PropTypes from "prop-types";
import arrow from "../../images/arrow.svg";

const ArrowButtonOne = ({ text, direction }) => {
  return (
    <button className="arrow-button-one">
      <span className="arrow-button-one__text">{text}</span>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

ArrowButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string
};

export { ArrowButtonOne };
