import React, { useContext } from "react";
import { BuilderContext } from "../CarBuilder/context/builderContext";

const ChoicesTable = () => {
  const {
    initialPrice,
    selectedEngine,
    selectedColor,
    selectedWheels,
    total
  } = useContext(BuilderContext);

  const selecEngine = selectedEngine.model,
    selecColor = selectedColor.model,
    selecWheels = selectedWheels.model;

  return (
    <table className="stats-table">
      <tbody>
        <tr>
          <td>Starting price</td>
          <td>{`$${initialPrice.toLocaleString()}`}</td>
        </tr>
        <tr>
          <td>{`${selecEngine.kwh} ${selecEngine.type} - ${selecEngine.kwh} kWh - ${selecEngine.range} miles range`}</td>
          <td>{selecEngine.price === 0 ? 'Included' : `+$${selecEngine.price.toLocaleString()}`}</td>
        </tr>
        <tr>
          <td>{selecColor.label}</td>
          <td>{selecColor.price === 0 ? 'Included' : `+$${selecColor.price.toLocaleString()}`}</td>
        </tr>
        <tr>
          <td>{selecWheels.label}</td>
          <td>{selecWheels.price === 0 ? 'Included' : `+$${selecWheels.price.toLocaleString()}`}</td>
        </tr>
        <tr>
          <td>Final price</td>
          <td>{`$${total.toLocaleString()}`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChoicesTable;
