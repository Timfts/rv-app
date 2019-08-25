import React, { useContext, useEffect } from "react";
import BuilderFooter from "./BuilderFooter";
import {
  EngineSection,
  ColorSection,
  WheelsSection,
  BuilderFinish
} from "./sections";
import BuilderProvider from "./context/BuilderProvider";
import { BuilderContext } from "./context/builderContext";


const CarBuilderInner = () => {
  const context = useContext(BuilderContext);

  useEffect(()=> {
    context.getCarData();
  })

  return (
    <div className="teste">
{/*         {(() => {
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
        })()} */}
        <BuilderFooter />
    </div>
  );
};

const CarBuilder = () => (
  <BuilderProvider>
    <CarBuilderInner />
  </BuilderProvider>
);

export default CarBuilder;
