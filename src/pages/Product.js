import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {
  const { products, currency } = useContext(DataContext);
  const [product_data, set_product_data] = useState(null);
  const { productid } = useParams();

  useEffect(() => {
    if (!products || products.length === 0) {
      return;
    }

    console.log("inside useffect", products.length);

    const current_product = products.find((value) => {
      return value._id === productid;
    });

    console.log("found data", current_product);
    set_product_data(current_product);
  }, [products, productid]);

  // console.log(product_data.sizes);

  return product_data ? (
    <div className="product-page">
      <div className="product-images-section">
        <div className="thumbnail-images">
          <img src="img1.jpg" alt="thumb1" className="thumbnail" />
          <img src="img2.jpg" alt="thumb2" className="thumbnail" />
          <img src="img3.jpg" alt="thumb3" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src={product_data?.image[0]} alt="product" />
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-title">{product_data.name}</h1>

        <div className="product-rating">
          <span className="stars">★★★★☆</span>
          <span className="rating-count">(122)</span>
        </div>

        <div className="product-price">
          {currency}
          {product_data.price}
        </div>

        <p className="product-description">{product_data.description}</p>

        <h4 className="size-heading">Select Size</h4>
        <div className="size-options">
          {product_data?.sizes?.map((value, index) => {
            return (
              <span className="size-box" key={index}>
                {value}
              </span>
            );
          })}
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>

        <div className="product-notes">
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      <div className="productBottomSection__container">
        <div className="productBottomSection__tabs">
          <div className="productBottomSection__tab productBottomSection__tab--active">
            Description
          </div>
          <div className="productBottomSection__tab">Reviews (122)</div>
        </div>

        <div className="productBottomSection__content">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      <RelatedProducts category={product_data.category} subCategory={product_data.subCategory}/>
    </div>
  ) : (
    <div>...loading</div>
  );
};

export default Product;
