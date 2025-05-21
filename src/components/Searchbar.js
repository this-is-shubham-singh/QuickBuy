import React from "react";

const Searchbar = () => {
  return (
    <div className="collections-search-wrapper">
      <input
        type="text"
        className="collections-search-input"
        placeholder="Search collections..."
      />
      <span className="collections-clear-icon">×</span>
    </div>
  );
};

export default Searchbar;
