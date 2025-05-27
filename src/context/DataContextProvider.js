import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const currency = "$";

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [cart_data, set_cart_data] = useState({});
  const [cart_products, set_card_products] = useState([]);

  // setting cart products to an array
  useEffect(() => {
    const temp = [];

    for (const items in cart_data) {
      const data = cart_data[items];
      for (const item in data) {
        if (cart_data[items][item] > 0) {
          temp.push({
            _id: items,
            size: item,
            quantity: cart_data[items][item],
          });
        }
      }
    }

    set_card_products(temp);
  }, [cart_data]);

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

  const count_cart_products = () => {
    let count = 0;

    for (const items in cart_data) {
      let data = cart_data[items];

      for (const item in data) {
        if (cart_data[items][item] > 0) {
          count += cart_data[items][item];
        }
      }
    }

    return count;
  };

  const update_quantity = (id, size, quantity) => {
    const copy_cart_data = structuredClone(cart_data);

    copy_cart_data[id][size] = quantity;

    set_cart_data(copy_cart_data);
  };

  const value = {
    products,
    currency,
    showSearchBar,
    setShowSearchBar,
    searchData,
    setSearchData,
    cart_data,
    add_to_cart,
    count_cart_products,
    cart_products,
    update_quantity,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
