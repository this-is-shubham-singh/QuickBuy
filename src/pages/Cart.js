import React from "react";

const Cart = () => {
  return (
    <div className="cartpage-container">
      <h2 className="cartpage-heading">Your Cart</h2>

      <div className="cartpage-item-box">
        <div className="cartpage-item">
          {/* Left: Product image */}
          <div className="cartpage-item-image">
            <img src="product.jpg" alt="Product" />
          </div>

          {/* Middle: Product name, price, size */}
          <div className="cartpage-item-details">
            <h3 className="cartpage-item-title">Product Name</h3>
            <div className="cartpage-item-meta">
              <span className="cartpage-price">$49.99</span>
              <span className="cartpage-size">Size: M</span>
            </div>
          </div>

          {/* Right: Quantity and delete button */}
          <div className="cartpage-item-actions">
            <input
              type="number"
              className="cartpage-quantity"
              defaultValue={1}
              min={1}
            />
            <button className="cartpage-delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
