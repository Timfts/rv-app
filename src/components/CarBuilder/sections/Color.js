import React, { useContext } from "react";
import ColorPicker from "../ColorPicker";
import { BuilderContext } from "../context/builderContext";

const ColorSection = () => {
  const { selectedColor, color } = useContext(BuilderContext);

  return (
    <section className="color-section">
      <div className="color-section__color-desc">
        <h1 className="color-section__title title">Color</h1>
        <p className="color-section__color-presentation">{color.description}</p>
      </div>
      <div className="color-section__image-container">
        <img className="color-section__car-image" src={selectedColor.model.demo} />
        <div className="color-section__color-infos">
          <span className="color-section__color-name">
            {selectedColor.model.label}
          </span>
          {selectedColor.model.price === 0 ? (
            <span className="color-section__color-included">Included</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <ColorPicker />
    </section>
  );
};

export default ColorSection;
