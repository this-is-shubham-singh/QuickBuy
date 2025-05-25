import React from "react";

const Product = () => {
  return (
    <div className="product-page">
      <div className="product-images-section">
        <div className="thumbnail-images">
          <img src="img1.jpg" alt="thumb1" className="thumbnail" />
          <img src="img2.jpg" alt="thumb2" className="thumbnail" />
          <img src="img3.jpg" alt="thumb3" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src="main.jpg" alt="product" />
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-title">Awesome Product Name</h1>

        <div className="product-rating">
          <span className="stars">★★★★☆</span>
          <span className="rating-count">(122)</span>
        </div>

        <div className="product-price">$129.99</div>

        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          dignissim, urna eget tincidunt.
        </p>

        <h4 className="size-heading">Select Size</h4>
        <div className="size-options">
          <span className="size-box">S</span>
          <span className="size-box">M</span>
          <span className="size-box">L</span>
          <span className="size-box">XL</span>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>

        <div className="product-notes">
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
