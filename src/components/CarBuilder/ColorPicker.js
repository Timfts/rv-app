import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";

const ColorPicker = () => {
  const { color, selectedColor, setItem } = useContext(BuilderContext);
  return (
    <div className="color-picker">
      {(() => {
        return color.items.map((color, index) => (
          <div
            key={`color${index}`}
            onClick={() => setItem("color", color)}
            className={`color-picker__ball ${
              color.id === selectedColor.model.id
                ? "color-picker__ball--selected"
                : ""
            }`}
          >
            <img
              className="color-picker__image"
              src={color.picker}
              alt="color picker color"
            />
          </div>
        ));
      })()}
    </div>
  );
};

export default ColorPicker;
