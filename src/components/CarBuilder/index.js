import React, { useState } from "react";
import BuilderFooter from "./BuilderFooter";
import { EngineSection, ColorSection, WheelsSection, BuilderFinish } from './sections';


const CarBuilder = ({ carModel }) => {
  const [currentStep, setcurrentStep] = useState(1);

  function nextStep(){
      setcurrentStep(currentStep + 1);
  }

  return (
    <div className="teste">
      {(() => {
        switch (currentStep) {
          case 1:
            return <EngineSection />;
          case 2:
            return <ColorSection />;
          case 3:
            return <WheelsSection />;
          case 4:
            return <BuilderFinish />;
          default:
            return null;
        }
      })()}
      <button onClick={nextStep}>Próximo</button>
      <BuilderFooter />
    </div>
  );
};

export default CarBuilder;
