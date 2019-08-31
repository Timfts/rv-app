import React from "react";
import PropTypes from "prop-types";
import arrow from "../../images/arrow.svg";

const ArrowButtonOne = ({ text, direction, click }) => {
  return (
    <button className="button arrow-button-one" onClick={click}>
      <span className="arrow-button-one__text">{text}</span>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

ArrowButtonOne.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string
};

const ArrowButtonTwo = ({text, direction, click}) => {
  return(
    <button className="button arrow-button-two" onClick={click}>
      <span className="arrow-button-two__text">{text}</span>
      <img src={arrow} alt="arrow" />
    </button>
  )
}

ArrowButtonTwo.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string
};

export { ArrowButtonOne, ArrowButtonTwo };
