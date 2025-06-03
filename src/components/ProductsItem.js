import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { Link } from "react-router-dom";

const ProductsItem = ({ image, name, price, id, ref }) => {
  const data = useContext(DataContext);

  return (
    <Link to={`/product/${id}`} className="collection-card" ref={ref}>
      <img className="collection-card-image" src={image} alt="Running Shoes" />
      <h3 className="collection-card-name">{name}</h3>
      <p className="collection-card-price">
        {data.currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductsItem;
