import React, { useEffect, useContext } from "react";
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
  const {
    loading,
    initialPrice,
    step,
    showLoading,
    getCarData,
    hideLoading
  } = useContext(BuilderContext);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    showLoading();
    await getCarData();
    hideLoading();
  }

  return (
    <div className="car-builder">
      {loading ? <p>loading</p> : ""}
      {initialPrice
        ? (() => {
            switch (step) {
              case 1:
                return <EngineSection />;
              case 2:
                return <ColorSection />;
              case 3:
                return <WheelsSection />;
              case 4:
                return <BuilderFinish />;
              default:
                return "";
            }
          })()
        : ""}
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
