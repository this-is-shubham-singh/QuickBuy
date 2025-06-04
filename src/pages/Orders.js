import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import OrderCards from "../components/OrderCards";

const Orders = () => {
  const cart_products = JSON.parse(localStorage.getItem("cart-data"));
  const { products } = useContext(DataContext);

  console.log(cart_products)
  return (
    <div>
      {cart_products != "" ? (
        cart_products?.map((cart_product_value, index) => {
          const current_cart_item = products.find((product_value, ind) => {
            return product_value._id === cart_product_value._id;
          });

          return (
            <OrderCards
              key={index}
              current_cart_item={current_cart_item}
              cart_product_value={cart_product_value}
            />
          );
        })
      ) : (
        <div>no orders</div>
      )}
    </div>
  );
};

export default Orders;
