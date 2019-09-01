import React, { useContext, useEffect } from "react";
import { BuilderContext } from "../context/builderContext";
import WheelsPicker from "../WheelsPicker";

const WheelsSection = () => {
  const { visited, selectedWheels, wheels, setItem } = useContext(
    BuilderContext
  );

  useEffect(() => {
    visited("wheels");
  }, []);

  function changeWheels(wheels) {
    setItem("wheels", wheels);
  }
  return (
    <section className="wheels__section">
      <h1 className="wheels-section__title title">Wheels</h1>
      <div className="wheels-section__picker-container">
        <WheelsPicker
          onSelect={changeWheels}
          currentWheels={selectedWheels.model}
          allWheels={wheels.items}
        />
      </div>
    </section>
  );
};

export default WheelsSection;
