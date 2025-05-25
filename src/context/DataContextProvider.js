import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const currency = "$";

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [cart_data, set_cart_data] = useState({});

  function add_to_cart(id, size, quantity = 1) {
    const copy_obj = structuredClone(cart_data);

    if (copy_obj[id]) {
      if (copy_obj[id][size]) {
        copy_obj[id][size] = copy_obj[id][size] += quantity;
      } else {
        copy_obj[id][size] = quantity;
      }
    } else {
      copy_obj[id] = {};
      copy_obj[id][size] = quantity;
    }

    set_cart_data(copy_obj);
  }

  const value = {
    products,
    currency,
    showSearchBar,
    setShowSearchBar,
    searchData,
    setSearchData,
    add_to_cart,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
