import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useLocation } from "react-router-dom";

const CartTotal = ({ handleSubmit }) => {
  const { currency, delivery_charges, current_total_price } =
    useContext(DataContext);

  const { pathname } = useLocation();
  const current_path = pathname.split("/").pop();

  return (
    <div className="cart-total-section">
      <h2 className="cart-total-heading">CART TOTAL</h2>

      <div className="cart-total-row">
        <span>Subtotal</span>
        <span>
          {currency}
          {current_total_price}
        </span>
      </div>

      <div className="cart-total-row">
        <span>Shipping Fee</span>
        <span>
          {currency}
          {delivery_charges}
        </span>
      </div>

      <div className="cart-total-row total-amount">
        <span>Total</span>
        <span>
          {currency}
          {current_total_price + delivery_charges}
        </span>
      </div>

      {current_path === "placeOrder" ? (
        <div className="cart-total-payment-method">
          <h3 className="payment-method-heading">Payment Method</h3>
          <div className="payment-options-row">
            <label className="payment-option-box">
              <input type="radio" name="payment" />
              <img src={assets.stripe_logo} alt="Stripe" />
            </label>
            <label className="payment-option-box">
              <input type="radio" name="payment" />
              <img
                style={{ width: "85px" }}
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </label>
            <label className="payment-option-box">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
      ) : (
        ""
      )}

      {current_path === "placeOrder" ? (
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="checkout-button"
        >
          PLACE ORDER
        </button>
      ) : (
        <Link to={"/placeOrder"}>
          <button className="checkout-button">PROCEED TO CHECKOUT</button>
        </Link>
      )}
    </div>
  );
};

export default CartTotal;
