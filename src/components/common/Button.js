import React from "react";
import PropTypes from "prop-types";
import arrow from "../../images/arrow.svg";
import reload from "../../images/reload.svg";

const IconButtonOne = ({ text, icon, click }) => {
  function chooseIcon(){
    switch(icon){
      case 'arrow':
        return arrow;
      case 'reload':
        return reload;
      default:
        return '';
    }
  }

  return (
    <button className="button arrow-button-one" onClick={click}>
      <span className="arrow-button-one__text">{text}</span>
      <img src={chooseIcon()} alt="arrow" />
    </button>
  );
};

IconButtonOne.propTypes = {
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

export { IconButtonOne, ArrowButtonTwo };
