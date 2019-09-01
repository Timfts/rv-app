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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Loading } from '../common/Loading';

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
      {loading ? <Loading /> : ""}
      <TransitionGroup component={null}>
        {initialPrice
          ? (() => {
              switch (step) {
                case 1:
                  return (
                    <CSSTransition
                      key={`1`}
                      timeout={1000}
                      classNames="my-node"
                    >
                      <div>
                        <EngineSection />
                      </div>
                    </CSSTransition>
                  );
                case 2:
                  return (
                    <CSSTransition
                      key={`2`}
                      timeout={1000}
                      classNames="my-node"
                    >
                      <div>
                        <ColorSection />
                      </div>
                    </CSSTransition>
                  );
                case 3:
                  return (
                    <CSSTransition
                      key={`3`}
                      timeout={1000}
                      classNames="my-node"
                    >
                      <div>
                        <WheelsSection />
                      </div>
                    </CSSTransition>
                  );
                case 4:
                  return (
                    <CSSTransition
                      key={`4`}
                      timeout={1000}
                      classNames="my-node"
                    >
                      <div>
                        <BuilderFinish />
                      </div>
                    </CSSTransition>
                  );
                default:
                  return "";
              }
            })()
          : ""}
      </TransitionGroup>

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
