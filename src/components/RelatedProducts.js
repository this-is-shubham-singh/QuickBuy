import React, { useContext, useState } from "react";
import ProductsItem from "./ProductsItem";
import { DataContext } from "../context/DataContextProvider";

const RelatedProducts = ({ category, subCategory }) => {
  const data = useContext(DataContext);
  const [values, setValues] = useState([]);

  useState(() => {
    const arr = data.products.filter((value, index) => {
      return value.category === category && value.subCategory === subCategory;
    });

    setValues(arr.slice(0, 5));
  }, []);

  //   console.log(data.products);

  return (
    <section className="latest-collection-section">
      <h2 className="latest-collection-title">RELATED PRODUCTS</h2>

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

export default RelatedProducts;
