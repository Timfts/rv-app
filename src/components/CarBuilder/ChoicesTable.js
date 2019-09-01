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
      <tbody className="stats-table__body">
        <tr className="stats-table__entry stats-table__entry--starting-price">
          <td className="stats-table__label">Starting price</td>
          <td className="stats-table__value">{`$${initialPrice.toLocaleString()}`}</td>
        </tr>
        <tr className="stats-table__entry stats-table__entry--first">
          <td className="stats-table__label">{`${selecEngine.kwh} ${selecEngine.type} - ${selecEngine.kwh} kWh - ${selecEngine.range} miles range`}</td>
          <td className="stats-table__value">
            {selecEngine.price === 0
              ? "Included"
              : `+$${selecEngine.price.toLocaleString()}`}
          </td>
        </tr>
        <tr className="stats-table__entry">
          <td className="stats-table__label">{selecColor.label}</td>
          <td className="stats-table__value">
            {selecColor.price === 0
              ? "Included"
              : `+$${selecColor.price.toLocaleString()}`}
          </td>
        </tr>
        <tr className="stats-table__entry stats-table__entry--last">
          <td className="stats-table__label">{selecWheels.label}</td>
          <td className="stats-table__value">
            {selecWheels.price === 0
              ? "Included"
              : `+$${selecWheels.price.toLocaleString()}`}
          </td>
        </tr>
        <tr className="stats-table__entry stats-table__entry--total">
          <td className="stats-table__label">Final price</td>
          <td className="stats-table__value">{`$${total.toLocaleString()}`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChoicesTable;
