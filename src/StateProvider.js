// Set up data layer

import React, { createContext, useContext, useReducer } from "react";

// We need this tto track the basket
export const StateContext = createContext();

// Build a provider
export const Stateprovider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// this is how we use it inside of a Component
export const useStateValue = () => useContext(StateContext);
