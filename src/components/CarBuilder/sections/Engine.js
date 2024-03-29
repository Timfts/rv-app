import React, { useEffect, useContext } from "react";
import { BuilderContext } from "../context/builderContext";
import EngineSelector from "../EngineSelector";
import {Img} from '../../common/Img';

const EngineSection = () => {
  const { visited, engine, selectedEngine, setItem } = useContext(
    BuilderContext
  );
  useEffect(() => {
    visited("engine");
  }, []);
  return (
    <section className="engine-section">
      <div className="engine-section__image-container">
  
        <Img
          className="engine-section__image"
          src={selectedEngine.model.image}
          alt="selected engine"
        />

      </div>
      <div className="engine-section__selector-container">
        <h1 className="engine-section__title title">Engine</h1>
        <EngineSelector
          engine={engine}
          selectedEngine={selectedEngine}
          setItem={setItem}
        />
      </div>
    </section>
  );
};

export default EngineSection;
