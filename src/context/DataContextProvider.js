import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

// pure syntax

// context create
export const DataContext = createContext();

// provider function create
export const DataContextProvider = ({ children }) => {
  const currency = "$";

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchData, setSearchData] = useState("");

  const value = {
    products,
    currency,
    showSearchBar,
    setShowSearchBar,
    searchData,
    setSearchData,
  };

  // provide value to through context provider
  // and keep children in middle
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
