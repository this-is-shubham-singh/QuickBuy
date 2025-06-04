import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { useLocation } from "react-router-dom";

const OrderCards = ({ index, current_cart_item, cart_product_value }) => {
  const { update_quantity, currency } = useContext(DataContext);

  const location = useLocation();

  const current_path_name = location.pathname.split("/").pop();

  return (
    <div key={index} className="cartpage-item-box">
      <div className="cartpage-item">
        <div className="cartpage-item-image">
          <img src={current_cart_item.image[0]} alt="Product" />
        </div>

        <div className="cartpage-item-details">
          <h3 className="cartpage-item-title">{current_cart_item.name}</h3>
          <div className="cartpage-item-meta">
            <span className="cartpage-price">
              {currency}
              {current_cart_item.price}
            </span>
            <span className="cartpage-size">
              Size: {cart_product_value.size}
            </span>
            {current_path_name === "orders" ? (
              <span className="cartpage-size">
                quantity: {cart_product_value.quantity}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="cartpage-item-actions">
          {current_path_name != "orders" ? (
            <input
              type="number"
              className="cartpage-quantity"
              defaultValue={cart_product_value.quantity}
              min={1}
              onChange={(e) =>
                update_quantity(
                  cart_product_value._id,
                  cart_product_value.size,
                  Number(e.target.value)
                )
              }
            />
          ) : (
            ""
          )}

          {current_path_name != "orders" ? (
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
          ) : (
            ""
          )}
          
        </div>
      </div>
    </div>
  );
};

export default OrderCards;
