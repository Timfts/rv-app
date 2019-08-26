import React, { useReducer } from "react";
import { BuilderContext, builderReducer, initialState } from "./builderContext";
import { fetchApi } from "../../../core/apiService";
import { colorArray } from "../../../core/colors";
import { engineArray } from "../../../core/engines";

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

  //recive the engines, colors, wheels and relates to the images
  // the connection could be an id, label or etc
  function mapItemImages(baseElement, connection, imagesArray){
    const originalItems = baseElement.items;
    const newItemsList = originalItems.map((item,index) => {
      const connectionItem = item[connection];
      const imageData = imagesArray.filter(imageItem => imageItem[connection] === connectionItem)[0];
      return {...item, ...imageData}
    });
    return{...baseElement, items: newItemsList};
  }

  async function getCarData() {
    const response = await fetchApi();
    const { color, price, wheels, engine } = response.data;
    const colors = mapItemImages(color, 'label', colorArray);
    const engines = mapItemImages(engine, 'id', engineArray);

    console.log(response);

    dispatch({
      type: "ASSIGN_DATA",
      payload: {
        engine: engines,
        color: colors,
        wheels,
        price
      }
    });

    
  }

  return (
    <BuilderContext.Provider
      value={{ ...state, showLoading, hideLoading, getCarData }}
      {...props}
    />
  );
};

export default BuilderProvider;
