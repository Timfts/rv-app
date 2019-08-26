import React, { createContext } from "react";

export const initialState = {
  loading: null,
  engine: null,
  color: null,
  wheels: null,
  initialPrice: null,
  step: 1,
  finished: null,
  total: null,
  selectedEngine: null,
  selectedColor:null,
  selectedWheels: null
};

export const BuilderContext = createContext(initialState);

export function builderReducer(state, action) {
  switch (action.type) {
    case "START_LOADING":
        return {
            ...state,
            loading: true
        };
    case "STOP_LOADING":
        return {
            ...state,
            loading:false
        }
    case "ASSIGN_DATA":
        const { engine, color, wheels, price } = action.payload;
      return {
        ...state,
        initialPrice: price,
        total: price,
        engine,
        color,
        wheels,
        selectedEngine: { model: engine.items[0], visited:false},
        selectedColor: { model: color.items[0], visited:false},
        selectedWheels: {model: wheels.items[0], visited: false}
      }
    case "VISITED_ENGINE":
        console.log(state.selectedEngine);
      return {
        ...state,
        selectedEngine: {...state.selectedEngine, visited: true}
      }
    default:
      return state;
  }
}
