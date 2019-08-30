import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";

const EngineItem = ({ itemData, selectedEngine, callback }) => (
  <div className={`engine-item ${itemData.id === selectedEngine.model.id ? 'engine-item--selected' : ''}`}>
    <span className="engine-item__model-name">
      {itemData.kwh}<span>{itemData.type}</span>
    </span>
    <span className="engine-item__model-kwh">
      <span>{itemData.kwh}</span>kWh
    </span>
    <span className="engine-item__model-miles">
      <span>{itemData.range} </span>miles range
    </span>
  </div>
);

const EngineSelector = () => {
  const { engine, selectedEngine } = useContext(BuilderContext);

  return (
    <div className="engine-selector">
      {(() => {
        if (engine.items.length) {
          return engine.items.map(item => <EngineItem selectedEngine={selectedEngine} itemData={item} />);
        }
      })()}
    </div>
  );
};

export default EngineSelector;
