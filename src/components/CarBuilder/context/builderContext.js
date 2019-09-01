import React, { createContext } from "react";

export const initialState = {
  loading: null,
  engine: { items: [] },
  color: null,
  wheels: null,
  initialPrice: null,
  step: 1,
  finished: null,
  total: null,
  selectedEngine: null,
  selectedColor: null,
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
        loading: false
      };
    case "ASSIGN_DATA":
      const { engine, color, wheels, price } = action.payload;
      return {
        ...state,
        initialPrice: price,
        total: price,
        engine,
        color,
        wheels,
        selectedEngine: { model: engine.items[0], visited: false },
        selectedColor: { model: color.items[0], visited: false },
        selectedWheels: { model: wheels.items[0], visited: false }
      };
    case "VISITED_ENGINE":
      return {
        ...state,
        selectedEngine: { ...state.selectedEngine, visited: true }
      };
    case "VISITED_COLOR":
      return {
        ...state,
        selectedColor: { ...state.selectedColor, visited: true }
      };
    case "VISITED_WHEELS":
      return {
        ...state,
        selectedWheels: { ...state.selectedWheels, visited: true }
      };
    case "SET_ENGINE":
      return {
        ...state,
        selectedEngine: { model: action.payload.engine, visited: true },
        total: action.payload.newPrice
      };
    case "SET_COLOR":
      return {
        ...state,
        selectedColor: { model: action.payload.color, visited: true },
        total: action.payload.newPrice
      };
    case "SET_WHEELS":
      return {
        ...state,
        selectedWheels: { model: action.payload.wheels, visited: true },
        total: action.payload.newPrice
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };
    default:
      return state;
  }
}
