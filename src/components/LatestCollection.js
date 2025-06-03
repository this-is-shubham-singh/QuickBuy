import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import ProductsItem from "./ProductsItem";

const LatestCollection = () => {
  const data = useContext(DataContext);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(data.products.slice(0, 10));
  }, []);

  // console.log(values)
  return (
    <section className="latest-collection-section">
      <h2 className="latest-collection-title">Latest Collection</h2>
      <p className="latest-collection-description">
        Discover our new arrivals — from bold styles to classic pieces, find
        your perfect look with our curated latest collection.
      </p>

      <div className="latest-collection-grid">
        {values.map((value, index) => (
          <ProductsItem
            key={index}
            image={value.image[0]}
            name={value.name}
            price={value.price}
            id={value._id}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
