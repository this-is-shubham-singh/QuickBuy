import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";

const Cart = () => {
  const { cart_products, products, update_quantity } = useContext(DataContext);

  console.log("cart_product", cart_products);

  function handle_onchange(e) {}

  return (
    <div className="cartpage-container">
      <h2 className="cartpage-heading">Your Cart</h2>

      {cart_products?.map((cart_product_value, index) => {
        const current_cart_item = products.find((product_value, ind) => {
          return product_value._id == cart_product_value._id;
        });

        return (
          <div key={index} className="cartpage-item-box">
            <div className="cartpage-item">
              {/* Left: Product image */}
              <div className="cartpage-item-image">
                <img src={current_cart_item.image[0]} alt="Product" />
              </div>

              {/* Middle: Product name, price, size */}
              <div className="cartpage-item-details">
                <h3 className="cartpage-item-title">
                  {current_cart_item.name}
                </h3>
                <div className="cartpage-item-meta">
                  <span className="cartpage-price">
                    ${current_cart_item.price}
                  </span>
                  <span className="cartpage-size">
                    Size: {cart_product_value.size}
                  </span>
                </div>
              </div>

              {/* Right: Quantity and delete button */}
              <div className="cartpage-item-actions">
                <input
                  type="number"
                  className="cartpage-quantity"
                  defaultValue={cart_product_value.quantity}
                  min={1}
                  // value={}
                  onChange={(e) =>
                    handle_onchange(
                      e,
                      cart_product_value._id,
                      cart_product_value.size
                    )
                  }
                />
                <button
                  className="cartpage-delete-btn"
                  onClick={() =>
                    update_quantity(
                      cart_product_value._id,
                      cart_product_value.size,
                      0
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
