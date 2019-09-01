import React, { useState} from "react";
import CarBuilder from "../components/CarBuilder/CarBuilder";
import { Switch, Route } from "react-router-dom";
import carImage from "../images/car-home.png";
import { IconButtonOne } from "../components/common/Button";
import { Loading } from '../components/common/Loading';

const CarPresentation = ({history}) => {
  const carInfos = [
    {
      value: "2.5",
      measure: "s",
      desc: "from 0 to 100"
    },
    {
      value: "420",
      measure: "mi",
      desc: "Miles Range"
    },
    {
      value: "250",
      measure: "mp/h",
      desc: "Max speed"
    }
  ];

  const [loaded, setLoaded] = useState(false);
  return (
    <>
    {
      !loaded ? <Loading /> : ''
    }
    <section className="modelR-page" onLoad={() => setLoaded(true)}>
      <div className="modelR-presentation">
        <div className="modelR-presentation__text">
          <span className="modelR-presentation__span">Build your</span>
          <h1 className="modelR-presentation__logo">
            Model <span className="modelR-presentation__logo-r">R</span>
          </h1>
        </div>
        <img className="modelR-presentation__car-image" src={carImage} alt="red Model R" />
        <div className="modelR-presentation__button-container">
          <IconButtonOne icon="arrow" text="begin" click={() => history.push('/modelR/builder') } />
        </div>
      </div>
      <div className="modelR-info">
        {carInfos.map((item, index) => {
          return (
            <div className="info-block" key={`car-info-${index}`}>
              <span className="info-block__value">
                {item.value}{" "}
                <span className="info-block__measure">{item.measure}</span>
              </span>
              <span className="info-block__desc">{item.desc}</span>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

const ModelR = () => {
  return (
    <Switch>
      <Route exact path="/modelR" component={CarPresentation} />
      <Route
        path="/modelR/builder"
        render={() => <CarBuilder carModel="modelR" />}
      />
    </Switch>
  );
};

export default ModelR;
