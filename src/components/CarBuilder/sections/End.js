import React, {useContext} from "react";
import {BuilderContext} from '../context/builderContext';
import ChoicesTable from "../ChoicesTable";
import { IconButtonOne } from '../../common/Button';
import {withRouter} from 'react-router-dom';
import { Img } from '../../common/Img';

const BuilderFinish = withRouter(() => {
  const {selectedColor, nextStep} = useContext(BuilderContext);


  return (
    <div className="end-section">
      <div className="end-section__image-container">
        <Img className="end-section__image" src={selectedColor.model.finishImage} alt="final state car" />
      </div>
      <div className="end-section__stats">
        <h1 className="end-section__title title">
          Your{" "}
          <span className="end-section__title-model">
            Model <span>R</span>
          </span>
        </h1>
        <ChoicesTable />
        <div className="end-section__rebuild">
          <IconButtonOne text="Rebuild" icon="reload" click={nextStep} />
        </div>
      </div>
    </div>
  );
});

export default BuilderFinish;
