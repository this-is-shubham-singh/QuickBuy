// CollectionsPage.jsx
import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const CollectionsPage = () => {
  // const { products } = useContext(DataContext);

  return (
    <section className="collections-page">
      <h1 className="collections-title">ALL COLLECTIONS</h1>
      <div className="collections-content">
        <aside className="filters-sidebar">
          <h2 className="filters-heading">Filters</h2>

          <div className="filter-group">
            <h3 className="filter-subheading">Categories</h3>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Men
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Women
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Kids
            </label>
          </div>

          <div className="filter-group">
            <h3 className="filter-subheading">Type</h3>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Topwear
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Bottomwear
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" />
              Winterwear
            </label>
          </div>
        </aside>

        <main className="products-main">
          <div className="products-topbar">
            <label htmlFor="sort-select" className="sort-label">
              Sort by:
            </label>
            <select id="sort-select" className="sort-select">
              <option value="relevant">Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="products-container">{}</div>
        </main>
      </div>
    </section>
  );
};

export default CollectionsPage;
