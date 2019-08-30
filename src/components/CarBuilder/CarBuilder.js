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

class CarBuilderInner extends React.Component {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    this.context.showLoading();
    await this.context.getCarData();
    this.context.hideLoading();
  }

  render() {
    return (
      <div className="car-builder">
        {this.context.loading ? <p>loading</p> : ""}
        {this.context.initialPrice
          ? (() => {
              switch (this.context.step) {
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
            })()
          : ""}
        <BuilderFooter />
      </div>
    );
  }
}
CarBuilderInner.contextType = BuilderContext;

const CarBuilder = () => (
  <BuilderProvider>
    <CarBuilderInner />
  </BuilderProvider>
);

export default CarBuilder;
