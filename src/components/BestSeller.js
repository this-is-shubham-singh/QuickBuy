import React, { useContext, useState } from "react";
import ProductsItem from "./ProductsItem";
import { DataContext } from "../context/DataContextProvider";

const BestSeller = () => {
  const data = useContext(DataContext);
  const [values, setValues] = useState([]);

  useState(() => {
    const arr = data.products.filter((value, index) => {
      return value.bestseller == true;
    });

    setValues(arr.slice(0,5));
  }, []);

  //   console.log(data.products);

  return (
    <section className="latest-collection-section">
      <h2 className="latest-collection-title">BEST SELLERS</h2>
      <p className="latest-collection-description">
        Discover our Best Collections — from bold styles to classic pieces, find
        your perfect look with our curated latest collection.
      </p>

      <div className="latest-collection-grid">
        {values.map((value, index) => (
          <ProductsItem
            key={index}
            image={value.image}
            name={value.name}
            price={value.price}
            id={value._id}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
