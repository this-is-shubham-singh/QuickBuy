import React, { useContext } from "react";
import { useState } from "react";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";

const PlaceOrder = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const { cart_products } = useContext(DataContext);

  const navigate = useNavigate();

  // setting input values
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      data.firstname == "" ||
      data.lastname == "" ||
      data.email == "" ||
      data.street == "" ||
      data.city == "" ||
      data.state == "" ||
      data.zipcode == "" ||
      data.country == "" ||
      data.phone == ""
    ) {
      toast.error("fill in all the details");
      return;
    }

    // setting cart products array to local storage
    localStorage.setItem("cart-data", JSON.stringify(cart_products));

    navigate("/orders");
  }

  return (
    <div className="delivery-info-page">
      <h2 className="delivery-heading">Delivery Information</h2>
      <form className="delivery-content">
        <div className="delivery-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              className="form-half"
              value={data.firstname}
              name="firstname"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-half"
              value={data.lastname}
              name="lastname"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="Email"
              className="form-full"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Street"
              className="form-full"
              name="street"
              value={data.street}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="City"
              className="form-half"
              name="city"
              value={data.city}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="State"
              className="form-half"
              name="state"
              value={data.state}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Zip Code"
              className="form-half"
              name="zipcode"
              value={data.zipcode}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Country"
              className="form-half"
              name="country"
              value={data.country}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              placeholder="Phone"
              className="form-full"
              name="phone"
              value={data.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <CartTotal handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default PlaceOrder;
