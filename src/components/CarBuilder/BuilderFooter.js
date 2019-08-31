import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";
import { ArrowButtonTwo } from "../common/Button";
import { displayMoney } from "../../helpers";

const BuilderFooter = () => {
  const {
    total,
    step,
    loading,
    selectedEngine,
    selectedColor,
    selectedWheels,
    nextStep
  } = useContext(BuilderContext);

  if (step < 4 && !loading) {
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
          {selectedEngine ? (
            <span
              className={`builder-footer__engine-choice ${
                selectedEngine.visited ? "" : "hide"
              }`}
            >
              {`${selectedEngine.model.kwh} `}
              <span className="builder-footer__engine-choice--highlight">
                {selectedEngine.model.type}
              </span>
            </span>
          ) : (
            ""
          )}
          {selectedColor ? (
            <div
              className={`builder-footer__color-choice ${
                selectedColor.visited ? "" : "hide"
              }`}
            >
              <img
                className="builder-footer__color-choice-image"
                src={selectedColor.model.picker}
              />
            </div>
          ) : (
            ""
          )}
          {selectedWheels ? (
            <div
              className={`builder-footer__wheel-choice ${
                selectedWheels.visited ? "" : "hide"
              }`}
            >
              <img
                className="builder-footer__wheel-choice-image"
                src={selectedWheels.model.image}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="builder-footer__next">
          <ArrowButtonTwo text="next" click={()=> nextStep()} />
        </div>
      </footer>
    );
  } else {
    return "";
  }
};

export default BuilderFooter;
