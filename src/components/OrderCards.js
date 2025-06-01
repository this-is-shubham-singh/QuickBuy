import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const OrderCards = ({ index, current_cart_item, cart_product_value }) => {
  const { update_quantity, currency } = useContext(DataContext);

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
          </div>
        </div>

        <div className="cartpage-item-actions">
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
};

export default OrderCards;
