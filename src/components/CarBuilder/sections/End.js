import React from "react";
import ChoicesTable from "../ChoicesTable";

const BuilderFinish = () => {
  return (
    <div className="end-section">
      <div className="end-section__image-container">
        <img className="end-section__image" />
      </div>
      <div className="end-section__stats">
        <h1 className="end-section__title title">
          Your{" "}
          <span className="end-section__title-model">
            Model <span>R</span>
          </span>
        </h1>
        <ChoicesTable />
      </div>
    </div>
  );
};

export default BuilderFinish;
