import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { products, currency, add_to_cart, cart_data } =
    useContext(DataContext);
  const [product_data, set_product_data] = useState(null);
  const { productid } = useParams();
  const [size, set_size] = useState("");


  // finding product data from recieved id 
  useEffect(() => {
    if (!products || products.length === 0) {
      return;
    }

    const current_product = products.find((value) => {
      return value._id === productid;
    });

    set_product_data(current_product);
  }, [products, productid]);

  function handle_add_to_cart(price) {
    if (size == "") {
      toast.error("select a size");
      return;
    }

    add_to_cart(product_data._id, size);
    // toast("🛒 Item added to cart!");
  }

  function handle_size_select(value) {
    if (value == size) {
      set_size("");
    } else {
      set_size(value);
    }
  }

  console.log(product_data);

  return product_data ? (
    <div className="product-page">
      <div className="product-images-section">
        <div className="thumbnail-images">
          {product_data?.image?.map((val, index) => {
            return (
              <img src={val} alt="thumb1" className="thumbnail" key={index} />
            );
          })}
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
              <span
                className={`size-box ${
                  value == size ? "size_select_border" : ""
                }`}
                key={index}
                onClick={() => handle_size_select(value)}
              >
                {value}
              </span>
            );
          })}
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => handle_add_to_cart(product_data.price)}
        >
          Add to Cart
        </button>

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

      <RelatedProducts
        category={product_data.category}
        subCategory={product_data.subCategory}
      />
    </div>
  ) : (
    <div>...loading</div>
  );
};

export default Product;
