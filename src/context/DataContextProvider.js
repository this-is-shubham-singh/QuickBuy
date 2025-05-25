import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const DataContext = createContext();

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

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
