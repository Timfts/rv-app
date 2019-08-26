import React, { createContext } from "react";

export const initialState = {
  loading: null,
  engine: null,
  color: null,
  wheels: null,
  initialPrice: null,
  step: 1,
  selected: {
    engine: {model:null, selected:false},
    color: {model:null, selected:false},
    wheels: {model:null, selected:false}
  },
  finished: null,
  total: null
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
        wheels: wheels,
        selected:{
          engine:{model: engine.items[0], selected: false},
          wheels:{model: wheels.items[0], selected: false},
          color:{model: color.items[0], selected: false}
        }

      }
    default:
      return state;
  }
}
