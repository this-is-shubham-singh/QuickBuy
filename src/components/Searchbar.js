import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const Searchbar = () => {
  const { setShowSearchBar, searchData, setSearchData } =
    useContext(DataContext);

  return (
    <div className="collections-search-wrapper">
      <input
        type="text"
        className="collections-search-input"
        placeholder="Search collections..."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <span
        className="collections-clear-icon"
        onClick={() => setShowSearchBar(false)}
      >
        ×
      </span>
    </div>
  );
};

export default Searchbar;
