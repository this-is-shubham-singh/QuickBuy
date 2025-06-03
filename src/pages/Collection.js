// CollectionsPage.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import ProductsItem from "../components/ProductsItem";
import Searchbar from "../components/Searchbar";

const CollectionsPage = () => {
  const { products, showSearchBar, searchData, setSearchData } =
    useContext(DataContext);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setloading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  const lastchild = useRef(null);

  useEffect(() => {
    setData(products);
  }, []);

  function handleCategoryCheck(e) {
    const checkedValue = e.target.value;

    if (categories.includes(checkedValue)) {
      const updatedCategories = categories.filter((val, index) => {
        return val != checkedValue;
      });

      setCategories(updatedCategories);
    } else {
      setCategories((value) => [...value, checkedValue]);
    }
  }

  function handleTypeCheck(e) {
    const checkedValue = e.target.value;

    if (types.includes(checkedValue)) {
      const updatedTypes = types.filter((val, index) => {
        return val != checkedValue;
      });

      setTypes(updatedTypes);
    } else {
      setTypes((value) => [...value, checkedValue]);
    }
  }

  function handleSortBy(e) {
    const selectedValue = e.target.value;

    const copyData = [...data];

    if (selectedValue == "low-high") {
      copyData.sort((a, b) => a.price - b.price);
    } else if (selectedValue == "high-low") {
      copyData.sort((a, b) => b.price - a.price);
    }

    for (let i = 0; i < 20; i++) {
      console.log("copy data", copyData[i].price);
    }

    setData(copyData);
  }

  function filterData() {
    let copyData = [...products];

    if (categories.length != 0) {
      copyData = copyData.filter((val, index) => {
        return categories.includes(val.category);
      });
    }

    if (types.length != 0) {
      copyData = copyData.filter((val, index) => {
        return types.includes(val.subCategory);
      });
    }

    setData(copyData);
  }

  useEffect(() => {
    if (data.length == 0) {
      return;
    }

    filterData();
  }, [categories, types]);

  // search functionality
  function search_input_data() {
    let copyData = [...products];
    if (copyData.length == 0) {
      return;
    }

    copyData = copyData.filter((value, index) => {
      return value.name.toLowerCase().includes(searchData.toLowerCase());
    });

    setData(copyData);
  }

  // debouncing
  useEffect(() => {
    setloading(true);

    const timer = setTimeout(() => {
      search_input_data();
      setloading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchData]);

  // infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastchild.current);

          setData((current_data) => [...current_data, ...data]);
        }
      },
      { threshold: 0.5 }
    );

    if (lastchild.current) {
      observer.observe(lastchild.current);
    }

    return () => {
      if (lastchild.current) {
        observer.unobserve(lastchild.current);
        observer.disconnect();
      }
    };
  }, [data]);
  // console.log(data);

  return (
    <section className="collections-page">
      {showSearchBar ? <Searchbar /> : ""}

      <h1 className="collections-title">ALL COLLECTIONS</h1>
      <div className="collections-content">
        <aside className="filters-sidebar">
          <h2 className="filters-heading">Filters</h2>

          <div className="filter-group">
            <h3 className="filter-subheading">Categories</h3>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Men"
                onChange={handleCategoryCheck}
              />
              Men
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Women"
                onChange={handleCategoryCheck}
              />
              Women
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Kids"
                onChange={handleCategoryCheck}
              />
              Kids
            </label>
          </div>

          <div className="filter-group">
            <h3 className="filter-subheading">Type</h3>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Topwear"
                onChange={handleTypeCheck}
              />
              Topwear
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Bottomwear"
                onChange={handleTypeCheck}
              />
              Bottomwear
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                value="Winterwear"
                onChange={handleTypeCheck}
              />
              Winterwear
            </label>
          </div>
        </aside>

        <main className="products-main">
          <div className="products-topbar">
            <label htmlFor="sort-select" className="sort-label">
              Sort by:
            </label>
            <select className="sort-select" onChange={handleSortBy}>
              <option value="relevant">Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {loading ? (
            "...loading"
          ) : (
            <div className="products-container">
              {data.map((val, ind) => {
                return (
                  <ProductsItem
                    key={ind}
                    image={val.image[0]}
                    name={val.name}
                    price={val.price}
                    id={val._id}
                    ref={ind == data.length - 1 ? lastchild : null}
                    className="products-list"
                  />
                );
              })}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default CollectionsPage;
