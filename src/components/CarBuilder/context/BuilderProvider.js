import React, { useReducer } from "react";
import { BuilderContext, builderReducer, initialState } from "./builderContext";
import { fetchApi } from "../../../core/apiService";
import { colorArray } from "../../../core/colors";
import { engineArray } from "../../../core/engines";
import { wheelsArray } from "../../../core/wheels";

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
  function mapItemImages(baseElement, connection, imagesArray) {
    const originalItems = baseElement.items;
    const newItemsList = originalItems.map((item, index) => {
      const connectionItem = item[connection];
      const imageData = imagesArray.filter(
        imageItem => imageItem[connection] === connectionItem
      )[0];
      return { ...item, ...imageData };
    });
    return { ...baseElement, items: newItemsList };
  }

  async function getCarData() {
    const response = await fetchApi();
    const { color, price, wheels, engine } = response.data;
    const colorsI = mapItemImages(color, "label", colorArray);
    const enginesI = mapItemImages(engine, "id", engineArray);
    const wheelsI = mapItemImages(wheels, "id", wheelsArray);

    dispatch({
      type: "ASSIGN_DATA",
      payload: {
        engine: enginesI,
        color: colorsI,
        wheels: wheelsI,
        price
      }
    });
  }

  function visited(item) {
    console.log(item);
    switch (item) {
      case "engine":
        dispatch({
          type: "VISITED_ENGINE"
        });
    }
  }

  function calculateNewPrice(itemType, newItem) {
    const totalPrice = state.total;
    const newItemPrice = newItem.price;
    let currentItemPrice;
    switch (itemType) {
      case "engine":
        currentItemPrice = state.selectedEngine.model.price;
        break;
      case "wheels":
        currentItemPrice = state.selectedWheels.model.price;
        break;
      case "color":
        currentItemPrice = state.selectedColor.model.price;
        break;
      default:
        break;
    }

    console.log(totalPrice, currentItemPrice, newItemPrice);
    return totalPrice - currentItemPrice + newItemPrice;
  }

  function nextStep(){
    const currentStep = state.step;
    if(currentStep === 4){
      dispatch({
        type: 'RESET_BUILDER'
      })
    }
    dispatch({
      type: 'NEXT_STEP'
    })
  }

  function setItem(itemType, value) {
    switch (itemType) {
      case "engine":
        if (!(value.id === state.selectedEngine.model.id)) {
          const newPrice = calculateNewPrice("engine", value);
          dispatch({
            type: "SET_ENGINE",
            payload: {
              engine: value,
              newPrice
            }
          });
        }
        break;
      case "wheels":
        if (!(value.id === state.selectedWheels.model.id)) {
          const newPrice = calculateNewPrice("wheels", value);
          dispatch({
            type: "SET_WHEELS",
            payload: {
              wheels: value,
              newPrice
            }
          });
        }
        break;
      case "color":
        if (!(value.id === state.selectedColor.model.id)) {
          const newPrice = calculateNewPrice("color", value);
          dispatch({
            type: "SET_COLOR",
            payload: {
              color: value,
              newPrice
            }
          });
        }
        break;
    }

    //if current value == state value don't do nothing
  }

  return (
    <BuilderContext.Provider
      value={{
        ...state,
        showLoading,
        hideLoading,
        getCarData,
        visited,
        setItem,
        nextStep
      }}
      {...props}
    />
  );
};

export default BuilderProvider;
