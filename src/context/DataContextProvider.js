import React, { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

// pure syntax

// context create
export const DataContext = createContext();

// provider function create
export const DataContextProvider = ({ children }) => {
  const value = { products };

  // provide value to through context provider
  // and keep children in middle
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
