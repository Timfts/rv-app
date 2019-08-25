import React, { useReducer } from "react";
import { BuilderContext, builderReducer, initialState } from "./builderContext";
import { fetchApi } from "../../../core/apiService";

const BuilderProvider = props => {
  const [state, dispatch] = useReducer(builderReducer, initialState);

  function showLoading() {
    dispatch({
      type: "START_LOADING"
    });
  }

  function hideLoading() {
    dispatch({
      type: "STOP_LOADING"
    });
  }

  async function getCarData() {
    const data = await fetchApi();
    console.log(data);
  }

  return (
    <BuilderContext.Provider
      value={{ ...state, showLoading, hideLoading, getCarData }}
      {...props}
    />
  );
};

export default BuilderProvider;
