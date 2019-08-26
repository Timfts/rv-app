import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";
import { ArrowButtonTwo } from "../common/Button";
import PickerRed from "../../images/color/picker-red.png";
import WheelOne from "../../images/wheels/wheel-one.png";
import { displayMoney } from "../../helpers";

const BuilderFooter = () => {
  const { total, step } = useContext(BuilderContext);
  if (step < 4) {
    return (
      <footer className="builder-footer">
        <div className="builder-footer__price">
          <p className="builder-footer__price-label">Total</p>
          {total ? (
            <span className="builder-footer__price-value">
              {displayMoney(total)}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="builder-footer__choices">
          <span className="builder-footer__car-choice">Model R</span>
          <span className="builder-footer__engine-choice">
            75{" "}
            <span className="builder-footer__engine-choice--highlight">P</span>
          </span>
          <div className="builder-footer__color-choice">
            <img
              className="builder-footer__color-choice-image"
              src={PickerRed}
            />
          </div>
          <div className="builder-footer__wheel-choice">
            <img
              className="builder-footer__wheel-choice-image"
              src={WheelOne}
            />
          </div>
        </div>
        <div className="builder-footer__next">
          <ArrowButtonTwo text="next" />
        </div>
      </footer>
    );
  } else {
    return "";
  }
};

export default BuilderFooter;
