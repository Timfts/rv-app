import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";

const ColorPicker = () => {
  const { color, selectedColor, setItem } = useContext(BuilderContext);
  return (<div className="color-picker">{
      (()=> {
      return color.items.map(color => (
        <div onClick={() => setItem('color', color)} className={`color-picker__ball ${color.id === selectedColor.model.id ? 'color-picker__ball--selected' : ''}`}>
            <img className="color-picker__image" src={color.picker} />
        </div>
      ))
      })()
  }</div>);
};

export default ColorPicker;
