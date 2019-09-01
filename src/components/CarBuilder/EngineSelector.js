import React, { useContext } from "react";
import { BuilderContext } from "./context/builderContext";

const EngineItem = ({ itemData, selectedEngine, callback }) => {
  const isActive = itemData.id === selectedEngine.model.id;
  return (
    <div onClick={()=> callback(itemData)} className={`engine-item ${isActive ? 'engine-item--selected' : ''}`}>
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
  )
};

const EngineSelector = ({engine, selectedEngine, setItem}) => {
  function changeEngine(newEngine){
    setItem('engine', newEngine);
  }

  return (
    <div className="engine-selector">
      {(() => {
        if (engine.items.length) {
          return engine.items.map(item => <EngineItem selectedEngine={selectedEngine} itemData={item} callback={changeEngine}/>);
        }
      })()}
    </div>
  );
};

export default EngineSelector;
