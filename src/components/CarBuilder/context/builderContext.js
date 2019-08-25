import React, { createContext } from "react";

export const initialState = {
  loading: true,
  engines: null,
  colors: null,
  wheels: null,
  step: 1,
  selected: {
    engine: null,
    color: null,
    wheels: null
  },
  finished: null,
  total: null
};

export const BuilderContext = createContext(initialState);

export function builderReducer(state, action) {
  switch (action.type) {
    case "FETCH_PARTS":
      const { engine, color, wheels, price } = action.payload;
      return {
        ...state,
        engine: engine,
        colors: color,
        wheels: wheels,
        total: price
      };
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
    default:
      return state;
  }
}
