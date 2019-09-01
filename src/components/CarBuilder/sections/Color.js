import React, { useContext, useEffect } from "react";
import ColorPicker from "../ColorPicker";
import { BuilderContext } from "../context/builderContext";
import { Img } from '../../common/Img';

const ColorSection = () => {
  const { selectedColor, color, visited } = useContext(BuilderContext);

  useEffect(() => {
    visited('color');
  } ,[])


  return (
    <section className="color-section">
      <div className="color-section__color-desc">
        <h1 className="color-section__title title">Color</h1>
        <p className="color-section__color-presentation">{color.description}</p>
      </div>
      <div className="color-section__image-container">
        <Img
          className="color-section__car-image"
          src={selectedColor.model.demo}
        />
        <div className="color-section__color-infos">
          <span className="color-section__color-name">
            {selectedColor.model.label}
          </span>

          <span
            className={`color-section__color-included ${
              selectedColor.model.price === 0 ? "" : "hide"
            }`}
          >
            Included
          </span>
        </div>
      </div>
      <ColorPicker />
    </section>
  );
};

export default ColorSection;
