import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import CartTotal from "../components/CartTotal";
import OrderCards from "../components/OrderCards";

const Cart = () => {
  const { cart_products, products, set_current_total_price } =
    useContext(DataContext);

  let total_price = 0;

  return (
    <div className="cartpage-container">
      <h2 className="cartpage-heading">Your Cart</h2>
      {cart_products?.map((cart_product_value, index) => {
        const current_cart_item = products.find((product_value, ind) => {
          return product_value._id == cart_product_value._id;
        });

        total_price += current_cart_item.price * cart_product_value.quantity;

        return (
          <OrderCards
            key={index}
            current_cart_item={current_cart_item}
            cart_product_value={cart_product_value}
          />
        );
      })}
      {set_current_total_price(total_price)}
      <CartTotal />
    </div>
  );
};

export default Cart;
